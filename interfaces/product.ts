import { User } from "./auth";

export interface Product {
  id: string;
  name: string;
  slug?: string;
  description?: string;
  story?: string;
  details?: string[];
  colors?: string[];
  sizes?: string[];
  shipping?: {
    free: boolean;
    estimated: string;
    international: boolean;
  };
  reviews?: {
    id: string;
    name: string;
    country: string;
    image: string;
    rating: number;
    date: string;
    text: string;
  }[];
  image: string;
  images?: string[];
  price: string;
  originalPrice?: string;
  rating: number;
  reviewCount: number;
  category: string;
  seller: User;
  location?: string;
  inStock: boolean;
}

export interface Collection {
  id: string;
  name: string;
  image: string;
  count: number;
}

export interface CartItem {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
  seller?: User;
  color?: string;
}
