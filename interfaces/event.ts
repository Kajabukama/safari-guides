export interface Event {
  id: string;
  title: string;
  images: string[];
  date: string;
  time: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  price: string;
  rating: number;
  reviewCount: number;
  maxParticipants: number;
  currentParticipants: number;
  guideId: number;
  guideName: string;
  guideImage: string;
  guideExperience: string;
  description: string;
  schedule: {
    time: string;
    activity: string;
  }[];
  includes: string[];
  requirements: string[];
  participants: {
    id: number;
    name: string;
    image: string;
    location: string;
    status: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}
