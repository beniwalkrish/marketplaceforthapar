// Category enum
export type Category = 'books' | 'electronics' | 'hostel' | 'clothes' | 'tickets' | 'food';

// Condition enum
export type Condition = 'new' | 'like_new' | 'good' | 'fair';

// User type
export interface User {
  id: string;
  email: string;
  name: string;
  branch: string;
  year: number;
  whatsapp: string;
  avatar_url: string | null;
  is_verified: boolean;
  rating: number;
  created_at: string;
}

// Listing type
export interface Listing {
  id: string;
  user_id: string;
  title: string;
  description: string;
  price: number;
  category: Category;
  condition: Condition;
  images: string[];
  location_on_campus: string;
  whatsapp: string;
  is_boosted: boolean;
  boost_expires_at: string | null;
  is_sold: boolean;
  created_at: string;
}

// Extended listing with seller info
export interface ListingWithSeller extends Listing {
  user: User;
}

// Wishlist item
export interface WishlistItem {
  id: string;
  user_id: string;
  listing_id: string;
  created_at: string;
}

// Search filters
export interface SearchFilters {
  query?: string;
  category?: Category;
  minPrice?: number;
  maxPrice?: number;
  condition?: Condition;
  sortBy?: 'newest' | 'price_low' | 'price_high';
}
