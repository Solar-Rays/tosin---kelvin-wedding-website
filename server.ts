import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
import { createServer as createViteServer } from 'vite';
import { v2 as cloudinary } from 'cloudinary';
import { INITIAL_RSVPS, ALL_GALLERY_ITEMS, GALLERY_ITEMS } from './src/data/mockData';
import { RsvpSubmission } from './src/types';

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Cloudinary configuration
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || 'solarrays';
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || '';
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || '';
const CLOUDINARY_FOLDER = process.env.CLOUDINARY_FOLDER || 'Tosin and Kelvin';

if (CLOUDINARY_API_KEY && CLOUDINARY_API_SECRET) {
  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true,
  });
}

// In-memory data store for RSVPs (seeded with demo guests)
let rsvpList: RsvpSubmission[] = [...INITIAL_RSVPS];
let googleSheetsWebhookUrl: string = process.env.GOOGLE_SHEETS_WEBHOOK_URL || '';

// ----------------------------------------------------
// API ROUTES
// ----------------------------------------------------

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    rsvpCount: rsvpList.length,
    cloudinaryConfigured: Boolean(process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET),
  });
});

// Cloudinary Live Gallery Sync
app.get('/api/gallery', async (req, res) => {
  if (!process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    return res.json({
      configured: false,
      message: 'Cloudinary credentials pending in environment variables.',
      cloudName: CLOUDINARY_CLOUD_NAME,
      folder: CLOUDINARY_FOLDER,
      items: ALL_GALLERY_ITEMS,
    });
  }

  try {
    const prefix = CLOUDINARY_FOLDER.trim();
    let resources: any[] = [];
    let nextCursor: string | undefined = undefined;

    do {
      const result: any = await cloudinary.api.resources({
        type: 'upload',
        prefix,
        max_results: 500,
        next_cursor: nextCursor,
      });

      if (result.resources && Array.isArray(result.resources)) {
        resources.push(...result.resources);
      }
      nextCursor = result.next_cursor;
    } while (nextCursor && resources.length < 1000);

    // Filter out deleted/placeholder records with 0 bytes that return 404
    const validResources = resources.filter(
      (r: any) => !r.placeholder && (r.bytes === undefined || r.bytes > 0)
    );

    const activeResources = validResources.length > 0 ? validResources : resources;

    if (activeResources.length === 0) {
      return res.json({
        configured: true,
        itemsCount: 0,
        message: `No images found with prefix "${prefix}".`,
        items: ALL_GALLERY_ITEMS,
      });
    }

    const items = activeResources.map((r: any, index: number) => {
      const publicId = (r.public_id || '').trim();

      // Cloudinary resources often have `folder` or `asset_folder`, or we extract it from public_id.
      // E.g., public_id: "Tosin and Kelvin/edo/IMG_1234"
      // or public_id: "Tosin and Kelvin/english/IMG_5678"
      let folderName = '';
      if (r.folder) {
        // e.g. "Tosin and Kelvin/edo" -> "edo"
        const segments = r.folder.split('/').filter(Boolean);
        folderName = segments[segments.length - 1] || '';
      } else if (r.asset_folder) {
        const segments = r.asset_folder.split('/').filter(Boolean);
        folderName = segments[segments.length - 1] || '';
      }

      if (!folderName && publicId.includes('/')) {
        const parts = publicId.split('/');
        // The last part is filename, the second to last part is immediate parent folder
        if (parts.length >= 2) {
          folderName = parts[parts.length - 2];
        }
      }

      // If the immediate folder is the root folder itself (e.g. just "Tosin and Kelvin" with no subfolder)
      // fallback to 'Wedding Moments'
      if (!folderName || folderName.toLowerCase() === prefix.toLowerCase()) {
        folderName = 'Wedding Moments';
      }

      // Capitalize first letter of each word in the tag (e.g. "edo" -> "Edo", "english" -> "English", "pre-wedding" -> "Pre-Wedding")
      const tag = folderName
        .replace(/[-_]/g, ' ')
        .split(' ')
        .filter(Boolean)
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      const category = tag; // Use exact formatted folder name as category/tag

      // Reliable, fast CDN URL using version and format
      let optimizedUrl = '';
      if (r.secure_url && r.secure_url.includes('/upload/')) {
        optimizedUrl = r.secure_url.replace('/upload/', '/upload/f_auto,q_auto/');
      } else {
        optimizedUrl = cloudinary.url(publicId, {
          secure: true,
          quality: 'auto',
          fetch_format: 'auto',
          version: r.version,
          format: r.format,
        });
      }

      // Clean filename for display title if helpful
      const rawFileName = publicId.split('/').pop() || `Photo ${index + 1}`;
      const cleanFileName = rawFileName.replace(/[-_]/g, ' ').replace(/\.[^/.]+$/, '');

      return {
        id: publicId || `cloudinary-${index}`,
        category,
        title: cleanFileName.length > 20 || cleanFileName.startsWith('IMG') || cleanFileName.startsWith('DSC')
          ? `Tosin & Kelvin — ${tag}`
          : cleanFileName,
        caption: `Captured Moments • ${tag}`,
        url: optimizedUrl,
        fallbackUrl: r.secure_url || optimizedUrl,
        width: r.width,
        height: r.height,
        createdAt: r.created_at,
      };
    });

    return res.json({
      configured: true,
      itemsCount: items.length,
      folder: prefix,
      cloudName: CLOUDINARY_CLOUD_NAME,
      items,
    });
  } catch (err: any) {
    console.error('Cloudinary API error:', err.message || err);
    return res.status(500).json({
      configured: false,
      error: err.message || 'Failed to query Cloudinary',
      items: ALL_GALLERY_ITEMS,
    });
  }
});

// Submit RSVP
app.post('/api/rsvp', async (req, res) => {
  try {
    const { fullName, email, phone, attending, guestCount, guestNames, dietaryRequirements } = req.body;

    if (!fullName || !attending) {
      return res.status(400).json({ error: 'Full name and attendance confirmation are required.' });
    }

    // Check if RSVP already exists for email to update or create
    const existingIndex = email
      ? rsvpList.findIndex((r) => r.email && r.email.toLowerCase() === email.toLowerCase())
      : -1;

    const tableNumber = (rsvpList.length % 6) + 1;
    const tableNames = [
      'Royal Palm Table (VIP)',
      'Emerald Bay Table',
      'Golden Hour Table',
      'Zanzibar Sunset Table',
      'Lekki Breeze Table',
      'Grand Pavilion Table',
    ];
    const tableName = tableNames[tableNumber - 1];
    const seatNumber = (rsvpList.length % 8) + 1;

    const newRsvp: RsvpSubmission = {
      id: existingIndex >= 0 ? rsvpList[existingIndex].id : `rsvp-${Date.now()}`,
      fullName,
      email: email || '',
      phone: phone || '',
      attending,
      guestCount: Number(guestCount) || 1,
      guestNames: guestNames || fullName,
      dietaryRequirements: dietaryRequirements || '',
      submittedAt: new Date().toISOString(),
      mealChoice: existingIndex >= 0 ? rsvpList[existingIndex].mealChoice : undefined,
      drinkChoice: existingIndex >= 0 ? rsvpList[existingIndex].drinkChoice : undefined,
      tableNumber,
      tableName,
      seatNumber,
    };

    if (existingIndex >= 0) {
      rsvpList[existingIndex] = newRsvp;
    } else {
      rsvpList.push(newRsvp);
    }

    // Forward to Google Sheets Webhook if configured
    if (googleSheetsWebhookUrl) {
      try {
        await fetch(googleSheetsWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newRsvp),
        });
      } catch (webhookErr) {
        console.error('Google Sheets Webhook Sync Error:', webhookErr);
      }
    }

    return res.json({
      success: true,
      message: 'RSVP submitted successfully!',
      rsvp: newRsvp,
    });
  } catch (err: any) {
    console.error('RSVP submission error:', err);
    return res.status(500).json({ error: 'Failed to submit RSVP.' });
  }
});

// Get all RSVPs (Couple Admin / Dashboard)
app.get('/api/admin/rsvps', (req, res) => {
  return res.json({
    totalCount: rsvpList.length,
    attendingCount: rsvpList.filter((r) => r.attending === 'yes').length,
    declinedCount: rsvpList.filter((r) => r.attending === 'no').length,
    totalGuests: rsvpList.filter((r) => r.attending === 'yes').reduce((sum, r) => sum + (r.guestCount || 1), 0),
    googleSheetsWebhookUrl,
    rsvps: rsvpList,
  });
});

// Configure Google Sheets Webhook URL
app.post('/api/admin/google-sheets-sync', (req, res) => {
  const { webhookUrl } = req.body;
  googleSheetsWebhookUrl = webhookUrl || '';
  return res.json({
    success: true,
    message: googleSheetsWebhookUrl
      ? 'Google Sheets integration URL updated successfully!'
      : 'Google Sheets webhook cleared.',
    googleSheetsWebhookUrl,
  });
});

// Download RSVPs as CSV
app.get('/api/export-csv', (req, res) => {
  const headers = [
    'ID',
    'Full Name',
    'Email',
    'Phone',
    'Attending',
    'Guest Count',
    'Guest Names',
    'Dietary Requirements',
    'Meal Choice',
    'Drink Choice',
    'Table Number',
    'Table Name',
    'Seat Number',
    'Submitted At',
  ];

  const rows = rsvpList.map((r) => [
    `"${r.id}"`,
    `"${r.fullName.replace(/"/g, '""')}"`,
    `"${String(r?.email || '').replace(/"/g, '""')}"`,
    `"${r.phone.replace(/"/g, '""')}"`,
    `"${r.attending}"`,
    r.guestCount,
    `"${(r.guestNames || '').replace(/"/g, '""')}"`,
    `"${(r.dietaryRequirements || '').replace(/"/g, '""')}"`,
    `"${(r.mealChoice || '').replace(/"/g, '""')}"`,
    `"${(r.drinkChoice || '').replace(/"/g, '""')}"`,
    r.tableNumber || '',
    `"${(r.tableName || '').replace(/"/g, '""')}"`,
    r.seatNumber || '',
    `"${r.submittedAt}"`,
  ]);

  const csvContent = [headers.join(','), ...rows.map((row) => row.join(','))].join('\n');

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="Tosin_Kelvin_Wedding_RSVPs.csv"');
  return res.send(csvContent);
});

// ----------------------------------------------------
// VITE MIDDLEWARE / PRODUCTION STATIC SERVER
// ----------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Wedding App Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
