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
