// User interfaces
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

// Guide interfaces
export interface Guide {
  id: number;
  name: string;
  image: string;
  location: string;
  rating: number;
  specialties: string[];
  price: string;
  verified: boolean;
}

// Itinerary interfaces
export interface ItinerarySingle {
  id: string;
  title: string;
  images: string[];
  location: string;
  duration: string;
  price: string;
  rating: number;
  reviewCount: number;
  maxGuests: number;
  guideId: number;
  guideName: string;
  guideImage: string;
  description?: string;
}
export interface ItineraryMany {
  id: string;
  title: string;
  image: string;
  location: string;
  duration: string;
  price: string;
  rating: number;
  reviewCount: number;
  maxGuests: number;
  guideId: number;
  guideName: string;
  guideImage: string;
  description?: string;
}

// Service interfaces
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

// Destination interfaces
export interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  guideCount: number;
}

// Benefit interfaces
export interface Benefit {
  title: string;
  description: string;
}

// Photo Gallery interfaces
export interface Photo {
  id: number;
  image: string;
  title: string;
  location: string;
  likes: number;
  comments: number;
  photographer: {
    id: number;
    name: string;
    image: string;
    type: "guide" | "tourist";
  };
  tags: string[];
  date: string;
}

// About Us interfaces
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties?: string[];
}

export interface Statistic {
  label: string;
  value: string;
  description?: string;
}

// Filter interfaces
export interface FilterOptions {
  searchTerm: string;
  selectedLocation: string;
  selectedSpecialty?: string;
  selectedDuration?: string;
  priceRange?: [number, number];
  verifiedOnly?: boolean;
  sortBy?: string;
}
