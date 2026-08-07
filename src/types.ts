export interface Dish {
  id: string;
  title: string;
  category: 'all' | 'signature' | 'levant' | 'catering' | 'dessert' | 'drinks';
  description: string;
  technique: string;
  ingredients: string[];
  pairing: string;
  image: string;
  badge?: string;
  awardWinning?: boolean;
}

export interface Milestone {
  year: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  category: 'award' | 'experience' | 'education' | 'press';
  highlightBadge?: string;
  image?: string;
}

export interface PressItem {
  id: string;
  source: string;
  title: string;
  date: string;
  excerpt: string;
  linkText: string;
  url?: string;
  image?: string;
  verifiedWinner?: boolean;
}

export interface InstagramPost {
  id: string;
  caption: string;
  likes: number;
  comments: number;
  type: 'image' | 'video' | 'carousel';
  imageUrl: string;
  instagramUrl: string;
  tags: string[];
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  location: string;
  budgetTier: string;
  dietaryNotes: string;
  specialRequests: string;
}

export interface AIMenuRequest {
  eventType: string;
  cuisinePreference: string;
  guestCount: string;
  dietary: string;
  budgetTier: string;
  specificNotes: string;
}

export interface AIMenuCourse {
  courseName: string;
  dishTitle: string;
  description: string;
  platingNotes: string;
  pairingSuggestion: string;
}

export interface AIMenuResponse {
  menuTitle: string;
  conceptOverview: string;
  courses: AIMenuCourse[];
  chefSpecialTouch: string;
  estimatedPrepLeadTime: string;
}
