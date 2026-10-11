export interface RsvpSubmission {
  id: string;
  fullName: string;
  email?: string;
  phone: string;
  attending: 'yes' | 'no';
  guestCount: number;
  guestNames?: string;
  dietaryRequirements?: string;
  submittedAt: string;
  mealChoice?: string;
  drinkChoice?: string;
  tableNumber?: number;
  tableName?: string;
  seatNumber?: number;
}

export interface StoryMilestone {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

export interface EventDetail {
  id: string;
  title: string;
  time: string;
  date: string;
  location: string;
  address: string;
  description: string;
  mapEmbedUrl: string;
  directionsUrl: string;
}

export interface GalleryItem {
  id: string;
  category: 'engagement' | 'travel' | 'our moments' | 'traditional' | string;
  title: string;
  caption: string;
  url: string;
  fallbackUrl?: string;
  width?: number;
  height?: number;
}

export interface RegistryPartner {
  id: string;
  name: string;
  url: string;
  logoText: string;
  description: string;
}

export interface BankAccountDetails {
  id: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  description: string;
}

export interface CashFundOption {
  id: string;
  title: string;
  targetAmount?: number;
  currentAmount?: number;
  description: string;
  iconName: string;
}

export interface MealOption {
  id: string;
  name: string;
  type: 'Meat' | 'Fish' | 'Vegetarian' | 'Vegan' | 'Kids';
  description: string;
  image: string;
}

export interface DrinkOption {
  id: string;
  name: string;
  type: 'Cocktail' | 'Wine' | 'Champagne' | 'Mocktail' | 'Soft';
  description: string;
}
