import { useState, useEffect, useCallback } from 'react';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS, ALL_GALLERY_ITEMS } from '../data/mockData';

export interface GalleryCategory {
  id: string;
  label: string;
}

export function useGallery() {
  const [items, setItems] = useState<GalleryItem[]>(ALL_GALLERY_ITEMS);
  const [featuredItems, setFeaturedItems] = useState<GalleryItem[]>(GALLERY_ITEMS);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isCloudinaryLive, setIsCloudinaryLive] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchGallery = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/gallery');
      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }
      const data = await res.json();
      if (data.items && Array.isArray(data.items) && data.items.length > 0) {
        setItems(data.items);
        setFeaturedItems(data.items.slice(0, 6));
        setIsCloudinaryLive(Boolean(data.configured));
      }
    } catch (err: any) {
      console.warn('Could not load gallery from Cloudinary API, using fallback:', err.message);
      setError(err.message);
      setItems(ALL_GALLERY_ITEMS);
      setFeaturedItems(GALLERY_ITEMS);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGallery();
  }, [fetchGallery]);

  // Derive unique categories from active items preserving proper case
  const categoryMap = new Map<string, string>();
  items.forEach((i) => {
    const raw = String(i.category || '').trim();
    if (raw) {
      const lower = raw.toLowerCase();
      if (!categoryMap.has(lower)) {
        categoryMap.set(lower, raw);
      }
    }
  });

  const categories: GalleryCategory[] = [
    { id: 'all', label: 'ALL' },
    ...Array.from(categoryMap.entries()).map(([id, label]) => ({
      id,
      label,
    })),
  ];

  return {
    items,
    featuredItems,
    categories,
    isLoading,
    isCloudinaryLive,
    error,
    refresh: fetchGallery,
  };
}
