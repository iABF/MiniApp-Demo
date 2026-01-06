export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  price: number;
  image: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  type: string;
  price: number;
  image: string;
  origin: string;
  description: string;
}

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  level: string;
  points: number;
}

export interface Booking {
  id: string;
  eventId: string;
  event: Event;
  timestamp: number;
  status: 'confirmed' | 'pending';
}

export interface Purchase {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  timestamp: number;
}

export type Tab = 'events' | 'shop' | 'profile';