import { StoryMilestone, EventDetail, GalleryItem, BankAccountDetails, MealOption, DrinkOption, RsvpSubmission } from '../types';

export const COUPLE_INFO = {
  bride: 'Tosin',
  groom: 'Kelvin',
  names: 'Tosin & Kelvin',
  initials: 'T & K',
  hashtag: '#A PROMISE OF FOREVER — Kelvin&Tosin',
  hashtagShort: '#KelvinAndTosin2026',
  date: 'Saturday, 24th October 2026',
  isoDate: '2026-10-24T13:00:00',
  time: '1:00 PM',
  city: 'Benin City, Edo State, Nigeria',
  venueCeremony: 'Ehizua Event Centre',
  venueReception: 'Ehizua Event Centre',
  venueAddress: '83, Airport Road Opposite ITV Glass House, Benin City',
  dressCode: 'Lavender & Cream (Color of the Day)',
  colorsOfDay: [
    { name: 'Lavender', hex: '#9c7bb5' },
    { name: 'Cream', hex: '#f5e6d3' },
  ],
  rsvpDeadline: '10th October, 2026',
  contactPhone: '08105272956, 0902 367 0738',
  contactEmail: 'rsvp@kelvinandtosin.com',
  plannerContact: '08105272956, 0902 367 0738',
  families: {
    brideParents: 'Hezekiah Dowole',
    brideOrigin: 'Oke Luse under Ose Local Government Area of Ondo State',
    groomParents: 'Igbinoba Elijah Ikponmwosa',
    groomOrigin: 'Udo Town, Ovia South West Local Government Area of Edo State',
  },
};

export const COUPLE_STORIES = {
  tosin: {
    author: 'Tosin (The Bride)',
    role: 'Bride',
    title: 'From That Umbrella Moment to Forever',
    quote: 'I’m not just getting married to the man I love. I’m getting married to my best friend. From that umbrella moment to forever.',
    paragraphs: [
      'I met Kelvin in the most unexpected way at a university send-off party. It was drizzling outside, and as I walked out of the hall to get some snacks, I saw him standing there holding an umbrella.',
      "I asked if I could share it, but he kindly explained it wasn't his and was meant for someone else. I just walked away and didn't think much of it, not knowing he would one day become my husband.",
      'A few weeks later, while scrolling through Facebook, I randomly sent him a friend request. He accepted almost immediately and sent a message, and just like that, we started talking.',
      'We spent a year building a close friendship before it turned into something more. Six years later, here we are. From an umbrella moment on a rainy day to marrying my best friend, looking back, I realize how beautifully unexpected our story has been.'
    ],
    image: 'https://res.cloudinary.com/solarrays/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1791674145/Tosin%20and%20Kelvin/edo/rmjoyxu5enhzeiwqzxti_spy1sq.avif',
  },
  kelvin: {
    author: 'Kelvin (The Groom)',
    role: 'Groom',
    title: 'That Fateful Wednesday to Forever',
    quote: 'I love her so very much, and my greatest desire is to ensure she always feels completely safe, secure, and cherished with me.',
    paragraphs: [
      'It all started on that fateful Wednesday when I decided to attend a meeting with the congregation. Looking back, I realize just how fortunate I was to be there that day.',
      'She had a part in the program, and the moment they called her up to present, my eyes were glued to her. That was the exact instant I truly started noticing her. My very first impression was how remarkably smart she was, and delightfully dramatic!',
      'Not long after, a notification popped up on Facebook. It was a friend request from her, and I couldn\'t accept it fast enough! That single click opened the door for us to start talking, and after a year of becoming close friends, our relationship turned into something deeper.',
      'Getting to know her over these six years, I came to see just how deeply kind and reasonable she is. A truly kind person never hurts you, and she proves that every day by always putting my interests first. I love her so very much, and my greatest desire is to ensure she always feels completely safe, secure, and cherished with me.'
    ],
    image: 'https://res.cloudinary.com/solarrays/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1791674138/Tosin%20and%20Kelvin/edo/ifuhurbqqgvp30l6c7pu_xjz2ck.avif',
  },
};

export const STORY_MILESTONES: StoryMilestone[] = [
  {
    id: '1',
    date: '2019',
    title: 'We Met',
    description: 'Our paths crossed in Benin, starting a beautiful friendship built on faith, laughter, and trust.',
    image: 'https://res.cloudinary.com/solarrays/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1791674073/Tosin%20and%20Kelvin/english/gz6nqspi2v8eypyqkunf_kfap0t.avif',
  },
  {
    id: '2',
    date: '2020',
    title: 'We Fell In Love',
    description: 'Growing together every day through shared dreams, gatherings, and unforgettable adventures.',
    image: 'https://res.cloudinary.com/solarrays/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1791674076/Tosin%20and%20Kelvin/english/inmyma3djmqw1ko8clij_xnwc8k.avif',
  },
  {
    id: '3',
    date: 'April 2026',
    title: 'The Proposal',
    description: 'Surrounded by close family, Kelvin popped the question and Tosin joyfully said YES to forever!',
    image: 'https://res.cloudinary.com/solarrays/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1791674080/Tosin%20and%20Kelvin/english/b8izlrpjwonah1mdlxah_k4rzr2.avif',
  },
];

export const EVENTS_SCHEDULE: EventDetail[] = [
  {
    id: 'wedding-celebration',
    title: 'Wedding Ceremony & Reception',
    time: '1:00 PM',
    date: 'Saturday, 24th October 2026',
    location: 'Ehizua Event Centre',
    address: '83, Airport Road Opposite ITV Glass House, Benin City, Edo State',
    description: 'Together with their families Hezekiah Dowole & Igbinoba Elijah Ikponmwosa cordially invite you to celebrate the wedding of their children Tosin & Kelvin.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.518!2d5.6022!3d6.3268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3a5a5a5a5a5%3A0x1234567890abcdef!2sAirport%20Road%2C%20Benin%20City!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng',
    directionsUrl: 'https://maps.google.com/?q=Airport+Road+Benin+City+Edo+State',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    category: 'engagement',
    title: 'Golden Hour Smile',
    caption: 'Sunset photoshoot at Lekki Conservation Centre',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'g2',
    category: 'engagement',
    title: 'Together Always',
    caption: 'Our formal engagement portrait session',
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'g3',
    category: 'travel',
    title: 'Zanzibar Sunset',
    caption: 'The magical evening right after Kelvin popped the question',
    url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'g4',
    category: 'travel',
    title: 'Cape Town Getaway',
    caption: 'Exploring Table Mountain during our summer holiday',
    url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'g5',
    category: 'our moments',
    title: 'Laughter & Joy',
    caption: 'Celebrating our anniversary with close family',
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'g6',
    category: 'our moments',
    title: 'Warm Embraces',
    caption: 'A quiet morning before our traditional introduction',
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=1000',
  },
];

export const ALL_GALLERY_ITEMS: GalleryItem[] = [
  ...GALLERY_ITEMS,
  {
    id: 'g7',
    category: 'engagement',
    title: 'Eyes On Forever',
    caption: 'Whispering sweet promises during our pre-wedding shoot',
    url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'g8',
    category: 'engagement',
    title: 'Serenade of Joy',
    caption: 'Shared laughter and pure bliss in the botanical gardens',
    url: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'g9',
    category: 'travel',
    title: 'Parisian Twilight',
    caption: 'Strolling through Montmartre on our first European vacation',
    url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'g10',
    category: 'travel',
    title: 'Coastal Escapade',
    caption: 'Basking in the ocean breeze and warm sandy shores',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'g11',
    category: 'our moments',
    title: 'Family Blessing',
    caption: 'Surrounded by parental prayers during our introduction rites',
    url: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'g12',
    category: 'our moments',
    title: 'The Unplanned Laugh',
    caption: 'Candid giggles after getting caught in university rain showers',
    url: 'https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'g13',
    category: 'engagement',
    title: 'Hand In Hand',
    caption: 'Stepping forward into a shared destiny with faith and hope',
    url: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'g14',
    category: 'our moments',
    title: 'Champagne & Cheers',
    caption: 'Toast to good news and our future together with best friends',
    url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1000',
  },
];

export const NIGERIAN_BANK_ACCOUNTS: BankAccountDetails[] = [
  {
    id: 'bank-1',
    bankName: 'Guaranty Trust Bank (GTBank)',
    accountName: 'Kelvin Uyi Ikponmwosa',
    accountNumber: '0162671839',
    description: 'Direct transfers for wedding gifts and blessings.',
  },
];

export const MEAL_OPTIONS: MealOption[] = [
  {
    id: 'm1',
    name: 'Signature Smokey Jollof & Grilled Croaker',
    type: 'Fish',
    description: 'Lagos-style firewood smokey Jollof rice served with grilled croaker fish, fried plantains, and peppered moin-moin.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 'm2',
    name: 'Braised Beef Short Ribs & Creamy Yam Purée',
    type: 'Meat',
    description: 'Slow-cooked red wine reduction beef short ribs accompanied by nutmeg-infused white yam purée and steamed asparagus.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 'm3',
    name: 'Truffle & Wild Mushroom Risotto',
    type: 'Vegetarian',
    description: 'Arborio rice cooked with wild forest mushrooms, aged parmesan, fresh herbs, and white truffle drizzle.',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 'm4',
    name: 'Kids Gold Crispy Chicken & Sweet Potato Fries',
    type: 'Kids',
    description: 'Hand-breaded tender chicken strips served with honey mustard sauce and crispy sweet potato fries.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=500',
  },
];

export const DRINK_OPTIONS: DrinkOption[] = [
  {
    id: 'd1',
    name: 'Tosin’s Passionfruit Blossom Cocktail',
    type: 'Cocktail',
    description: 'A delicate blend of aged rum, passion fruit nectar, elderflower, fresh lime, and sparkling prosecco.',
  },
  {
    id: 'd2',
    name: 'Kelvin’s Old Fashioned Reserve',
    type: 'Cocktail',
    description: 'Smokey bourbon, Angostura bitters, orange peel twist, and spiced clove honey syrup.',
  },
  {
    id: 'd3',
    name: 'Bordeaux Fine Red & Chardonnay Wine Pairing',
    type: 'Wine',
    description: 'Handpicked French sommelier selection to accompany your chosen meal.',
  },
  {
    id: 'd4',
    name: 'Hibiscus Zobo Spritz (Mocktail)',
    type: 'Mocktail',
    description: 'Refreshing hibiscus tea infused with ginger, mint leaves, pineapple juice, and sparkling soda.',
  },
  {
    id: 'd5',
    name: 'Moët & Chandon Brut Champagne',
    type: 'Champagne',
    description: 'Classic crisp champagne for toasts and celebrations.',
  },
];

// Pre-seeded initial RSVPs
export const INITIAL_RSVPS: RsvpSubmission[] = [
  {
    id: 'rsvp-1',
    fullName: 'Dr. Kunle & Folake Adebayo',
    email: 'kunle.adebayo@example.com',
    phone: '+234 802 111 2233',
    attending: 'yes',
    guestCount: 2,
    guestNames: 'Dr. Kunle Adebayo, Folake Adebayo',
    dietaryRequirements: 'No shellfish please',
    submittedAt: '2026-06-12T14:30:00Z',
    mealChoice: 'Signature Smokey Jollof & Grilled Croaker',
    drinkChoice: 'Tosin’s Passionfruit Blossom Cocktail',
    tableNumber: 1,
    tableName: 'Royal Palm Table (VIP)',
    seatNumber: 1,
  },
  {
    id: 'rsvp-2',
    fullName: 'Chidi & Nneka Okonkwo',
    email: 'chidi.okonkwo@example.com',
    phone: '+234 803 444 5566',
    attending: 'yes',
    guestCount: 2,
    guestNames: 'Chidi Okonkwo, Nneka Okonkwo',
    dietaryRequirements: 'Gluten-free preference',
    submittedAt: '2025-06-15T09:15:00Z',
    mealChoice: 'Braised Beef Short Ribs & Creamy Yam Purée',
    drinkChoice: 'Dami’s Old Fashioned Reserve',
    tableNumber: 2,
    tableName: 'Emerald Bay Table',
    seatNumber: 4,
  },
  {
    id: 'rsvp-3',
    fullName: 'Tolu Alabi',
    email: 'tolu.alabi@example.com',
    phone: '+234 809 777 8899',
    attending: 'yes',
    guestCount: 1,
    guestNames: 'Tolu Alabi',
    dietaryRequirements: 'Strictly Vegetarian',
    submittedAt: '2025-06-20T18:40:00Z',
    mealChoice: 'Truffle & Wild Mushroom Risotto',
    drinkChoice: 'Hibiscus Zobo Spritz (Mocktail)',
    tableNumber: 3,
    tableName: 'Golden Hour Table',
    seatNumber: 2,
  },
];
