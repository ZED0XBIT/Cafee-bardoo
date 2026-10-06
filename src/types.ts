export type ThemeMode = 'day' | 'night';
export type Language = 'en' | 'fr';

export type MenuCategory = 'breakfast' | 'pizza' | 'coffee' | 'lounge' | 'desserts';

export interface MenuItem {
  id: string;
  name: string;
  nameFr?: string;
  description: string;
  descriptionFr?: string;
  price: number; // in DT (Tunisian Dinar)
  category: MenuCategory;
  isSignature?: boolean;
  isPopular?: boolean;
  tags?: string[];
  image?: string;
}

export interface LocationInfo {
  id: string;
  name: string;
  tagline: string;
  address: string;
  hours: string;
  phone: string;
  phoneAlt?: string;
  near: string;
  mapUrl: string;
  facebookUrl?: string;
  image: string;
  features: string[];
}

export interface Review {
  id: string;
  author: string;
  location: 'Bardo' | 'El Aouina' | 'General';
  rating: number;
  comment: string;
  date: string;
}

export interface ReservationRequest {
  location: string;
  date: string;
  time: string;
  guests: number;
  name: string;
  phone: string;
  seatingArea: 'Indoor Lounge' | 'Terrace' | 'Non-Smoking' | 'Shisha Area';
  notes?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}
