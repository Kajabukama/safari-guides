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

// Service interfaces

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
