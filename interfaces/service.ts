export interface Service {
  id: string;
  title: string;
  image: string;
  images?: string[];
  type: "accommodation" | "food" | "transport" | "equipment";
  location: string;
  coordinates?: {
    latitude: string;
    longitude: string;
  };
  guideExperience?: string;
  price: string;
  rating: number;
  reviewCount: number;
  guideId: number;
  guideName: string;
  guideImage: string;
  description: string;
  features?: string[];
  policies?: {
    checkIn: string;
    checkOut: string;
    cancellation: string;
    children: string;
    pets: string;
  };
  rooms?: {
    type: string;
    capacity: string;
    beds: string;
    price: string;
    description: string;
    image: string;
  }[];
  reviews?: {
    id: number;
    name: string;
    country: string;
    image: string;
    rating: number;
    date: string;
    text: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}
