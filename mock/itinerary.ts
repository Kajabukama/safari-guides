export const itinerary = {
  id: "1",
  title: "Classic Serengeti Migration Safari",
  images: [
    "/images/img20.jpg",
    "/images/img21.jpg",
    "/images/img22.jpg",
    "/images/img43.jpg",
    "/images/img44.jpg",
    "/images/img45.jpg",
    "/images/img46.jpg",
    "/images/img47.jpg",
  ],
  location: "Serengeti National Park",
  coordinates: {
    lat: -2.3333,
    lng: 34.8333,
  },
  duration: "5 days",
  price: "$1,200",
  rating: 4.9,
  reviewCount: 58,
  maxGuests: 6,
  guideId: 1,
  guideName: "Emmanuel Mbogo",
  guideImage: "/images/guide3.jpg",
  guideExperience: "10+ years",
  description: `Experience the breathtaking wildlife and landscapes of the Serengeti on this 5-day safari adventure. Follow the Great Migration through the Serengeti plains with expert wildlife tracking and photography opportunities.
Our knowledgeable guides will take you to the best locations to witness the incredible diversity of animals in their natural habitat, including lions, elephants, giraffes, zebras, and with luck, the dramatic river crossings of wildebeest during migration season.
This safari includes comfortable accommodations, all meals, transportation in a 4x4 safari vehicle, park entrance fees, and the expertise of our professional guides.`,
  itinerary: [
    {
      day: 1,
      title: "Arrival & Orientation",
      description:
        "Arrival at Kilimanjaro International Airport. Transfer to your lodge in Arusha for overnight stay. Evening orientation with your guide to discuss the safari itinerary.",
    },
    {
      day: 2,
      title: "Serengeti National Park",
      description:
        "Early morning departure to Serengeti National Park. Afternoon game drive to spot the Big Five and other wildlife. Overnight at a comfortable tented camp within the park.",
    },
    {
      day: 3,
      title: "Migration Tracking",
      description:
        "Full day dedicated to tracking the Great Migration. Witness thousands of wildebeest and zebra as they move across the plains. Picnic lunch in the bush.",
    },
    {
      day: 4,
      title: "Central Serengeti",
      description:
        "Explore the central Serengeti region, known for its rich predator population. Visit the Seronera River Valley to observe lions, leopards, and cheetahs hunting.",
    },
    {
      day: 5,
      title: "Departure",
      description:
        "Final morning game drive. Depart for Arusha with lunch en route. Transfer to Kilimanjaro International Airport for your departure flight.",
    },
  ],
  includes: [
    "Professional safari guide",
    "All park entrance fees",
    "4 nights accommodation",
    "All meals during safari",
    "Transportation in 4x4 safari vehicle",
    "Airport transfers",
    "Bottled water during game drives",
  ],
  excludes: [
    "International flights",
    "Travel insurance",
    "Visa fees",
    "Personal expenses",
    "Tips and gratuities",
    "Optional activities",
  ],
  accommodations: [
    {
      name: "Serengeti Serena Safari Lodge",
      description: "Luxury lodge with swimming pool and restaurant",
      image: "/images/img26.jpg",
    },
    {
      name: "Serengeti Wilderness Camp",
      description: "Comfortable tented camp with en-suite facilities",
      image: "/images/img27.jpg",
    },
  ],
  reviews: [
    {
      id: 1,
      name: "Sarah Johnson",
      country: "United States",
      image: "/images/guide1.jpg",
      rating: 5,
      date: "March 2023",
      text: "This safari exceeded all our expectations! Emmanuel was an exceptional guide who knew exactly where to find the animals. We saw the Big Five on our first two days! The accommodations were comfortable and the food was excellent. Highly recommend!",
    },
    {
      id: 2,
      name: "Thomas Weber",
      country: "Germany",
      image: "/images/guide2.jpg",
      rating: 5,
      date: "January 2023",
      text: "An amazing experience from start to finish. The migration was spectacular, and our guide's knowledge of animal behaviour helped us witness some incredible moments. Tented camps were comfortable, and they gave us the authentic safari experience we were looking for.",
    },
    {
      id: 3,
      name: "Emma Wilson",
      country: "United Kingdom",
      image: "/images/guide3.jpg",
      rating: 4,
      date: "December 2022",
      text: "We had a wonderful time on our safari. The Serengeti is breathtaking and we saw so many animals! The only reason for 4 stars instead of 5 is that our vehicle had some air conditioning problems on the hottest day, but Emmanuel quickly arranged an alternative. Would definitely book again!",
    },
  ],
  faqs: [
    {
      question: "What is the best time to see the Great Migration?",
      answer:
        "The Great Migration is a year-round event, but the best time to see river crossings is typically from July to October. For calving season, February to March is ideal.",
    },
    {
      question: "Is this safari suitable for families with children?",
      answer:
        "This safari is suitable for families with children aged 8 and above. For younger children, we recommend our specialized family safari packages.",
    },
    {
      question: "What type of vehicles are used?",
      answer:
        "We use 4x4 Toyota Land Cruisers specially modified for safari with pop-up roofs for game viewing and photography. Each vehicle accommodates a maximum of 6 guests to ensure everyone has a window seat.",
    },
    {
      question: "What should I pack for the safari?",
      answer:
        "We recommend light, neutral-colored clothing, a hat, sunglasses, sunscreen, insect repellent, a light jacket for evenings, comfortable walking shoes, and a camera with extra batteries and memory cards.",
    },
  ],
};
