import { Service } from "@/interfaces";

export const service: Service = {
  id: "1",
  title: "Luxury Tented Camp",
  type: "accommodation",
  image: "/images/img35.jpg",
  images: [
    "/images/img36.jpg",
    "/images/img37.jpg",
    "/images/img38.jpg",
    "/images/img39.jpg",
    "/images/img40.jpg",
  ],
  location: "Central Serengeti",
  coordinates: {
    latitude: "-2.3333",
    longitude: "34.8333",
  },
  price: "$250",
  rating: 4.9,
  reviewCount: 42,
  guideId: 1,
  guideName: "Emmanuel Mbogo",
  guideImage: "/images/guide2.jpg",
  guideExperience: "10+ years",
  description: `Experience the perfect blend of luxury and adventure in our tented camp situated in the heart of the Serengeti. Each spacious tent is elegantly furnished with en-suite bathrooms, comfortable beds with premium linens, and a private veranda overlooking the savanna.
The camp features a central dining area where our chef prepares gourmet meals using fresh, local ingredients. Enjoy sundowners around the campfire as you share stories of the day's wildlife sightings.
Our camp is strategically located to provide easy access to the best game viewing areas while offering a peaceful retreat in harmony with nature. Fall asleep to the distant sounds of lions and wake to the calls of birds and the golden light of the African dawn.`,
  features: [
    "En-suite bathroom with hot shower",
    "Comfortable king or twin beds",
    "Solar-powered electricity",
    "Private veranda",
    "Full-board dining with gourmet meals",
    "Complimentary WiFi in common areas",
    "Daily housekeeping",
    "Laundry service",
    "Campfire gatherings",
    "Guided nature walks",
  ],
  policies: {
    checkIn: "12:00 PM",
    checkOut: "10:00 AM",
    cancellation:
      "Free cancellation up to 7 days before arrival. 50% charge for cancellations within 7 days.",
    children: "Children over 6 years are welcome. Special family tents available.",
    pets: "No pets allowed due to wildlife presence.",
  },
  rooms: [
    {
      type: "Standard Tent",
      capacity: "2 guests",
      beds: "1 King or 2 Twin Beds",
      price: "$250",
      description: "Spacious tent with en-suite bathroom and private veranda",
      image: "/images/img36.jpg",
    },
    {
      type: "Deluxe Tent",
      capacity: "2 guests",
      beds: "1 King Bed",
      price: "$350",
      description: "Larger tent with premium furnishings, outdoor shower, and expansive veranda",
      image: "/images/img37.jpg",
    },
    {
      type: "Family Tent",
      capacity: "4 guests",
      beds: "1 King Bed and 2 Twin Beds",
      price: "$450",
      description: "Two-bedroom tent ideal for families, with shared bathroom and large veranda",
      image: "/images/img38.jpg",
    },
  ],
  reviews: [
    {
      id: 1,
      name: "Sarah Johnson",
      country: "United States",
      image: "/images/img39.jpg",
      rating: 5,
      date: "March 2023",
      text: "This tented camp was the highlight of our safari! The perfect balance of comfort and wilderness. Falling asleep to the sounds of the Serengeti was magical. The staff was attentive and the food was incredible. Would definitely recommend!",
    },
    {
      id: 2,
      name: "Thomas Weber",
      country: "Germany",
      image: "/images/img40.jpg",
      rating: 5,
      date: "January 2023",
      text: "An exceptional experience! The tents are spacious and beautifully decorated. We had elephants walking past our tent one morning! The communal areas are comfortable and the campfire in the evening was a perfect way to end each day.",
    },
    {
      id: 3,
      name: "Emma Wilson",
      country: "United Kingdom",
      image: "/images/img10.jpg",
      rating: 4,
      date: "December 2022",
      text: "A wonderful stay in a beautiful setting. The tents are very comfortable and the food was excellent. The only reason for 4 stars instead of 5 is that the WiFi was quite slow, but that's to be expected in such a remote location, a fantastic experience",
    },
  ],
  faqs: [
    {
      question: "Is the camp fenced?",
      answer:
        "No, the camp is unfenced to allow for an authentic safari experience. However, security staff patrol the camp at night, and guests are escorted to their tents after dark.",
    },
    {
      question: "Do you provide airport transfers?",
      answer:
        "Yes, we can arrange transfers from Seronera Airstrip for an additional fee. Please let us know your flight details when booking.",
    },
    {
      question: "Is electricity available 24/7?",
      answer:
        "The camp runs on solar power which provides electricity for lighting and charging electronic devices. Power is available 24 hours in the main areas and during specific hours in the tents.",
    },
    {
      question: "What activities are available at the camp?",
      answer:
        "We offer game drives, guided bush walks, sundowner experiences, and cultural visits to nearby Maasai villages. Hot air balloon safaris can be arranged for an additional fee.",
    },
  ],
};
