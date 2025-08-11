export const guide = {
  id: 1,
  name: "Emmanuel Mbogo",
  image: "/images/guide3.jpg",
  coverImage: "/images/img33.jpg",
  location: "Serengeti National Park",
  rating: 4.9,
  reviewCount: 124,
  specialties: ["Safari", "Wildlife Photography", "Camping", "Bird Watching", "Cultural Tours"],
  languages: ["English", "Swahili", "French"],
  price: "$120",
  verified: true,
  experience: "10+ years",
  bio: "Born and raised near Serengeti National Park, I've spent my life exploring Tanzania's wilderness. With over a decade of experience as a professional guide, I specialize in wildlife safaris and photography expeditions. My intimate knowledge of animal behavior and habitats allows me to provide unforgettable wildlife encounters while prioritizing safety and conservation. I'm passionate about sharing Tanzania's natural beauty and cultural heritage with visitors from around the world.",
  certifications: [
    "Tanzania Professional Safari Guide Level III",
    "Wilderness First Responder",
    "Wildlife Photography Certification",
  ],
  education: [
    "Bachelor of Science in Wildlife Management, University of Dar es Salaam",
    "Certificate in Conservation Biology, African Wildlife Foundation",
  ],
  achievements: [
    "Featured in National Geographic (2019)",
    "Tanzania Tourism Guide of the Year (2020)",
    "Over 500 successful safari expeditions conducted",
  ],
  availability: {
    nextAvailable: "May 15, 2023",
    bookingWindow: "3-6 months in advance recommended",
    calendar: [
      {
        date: "2023-05-15",
        status: "available",
      },
      {
        date: "2023-05-16",
        status: "available",
      },
      {
        date: "2023-05-17",
        status: "available",
      },
      {
        date: "2023-05-18",
        status: "booked",
      },
      {
        date: "2023-05-19",
        status: "booked",
      },
    ],
  },
  tours: [
    {
      id: 1,
      title: "Classic Serengeti Safari",
      duration: "5 days",
      price: "$650",
      description:
        "Experience the iconic Serengeti landscape and witness the incredible wildlife including lions, elephants, and with luck, the Great Migration.",
      image: "/images/img1.jpg",
      highlights: [
        "Daily game drives in 4x4 safari vehicle",
        "Professional wildlife photography opportunities",
        "Luxury tented accommodation",
        "All meals and non-alcoholic beverages included",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & First Game Drive",
          description: "Airport pickup, camp orientation, and afternoon game drive.",
        },
        {
          day: 2,
          title: "Central Serengeti",
          description: "Full day exploring the wildlife-rich central plains.",
        },
        {
          day: 3,
          title: "Northern Serengeti",
          description: "Journey to the northern region in search of big cats and elephants.",
        },
        {
          day: 4,
          title: "Great Migration Tracking",
          description: "Following the wildebeest herds (seasonal).",
        },
        {
          day: 5,
          title: "Final Safari & Departure",
          description: "Morning game drive and departure transfer.",
        },
      ],
    },
    {
      id: 2,
      title: "Photography Expedition",
      duration: "7 days",
      price: "$900",
      description:
        "A specialized safari focused on capturing the perfect wildlife photographs with expert guidance on lighting, positioning and animal behavior.",
      image: "/images/img2.jpg",
      highlights: [
        "Photography workshops and tutorials",
        "Strategic positioning for optimal lighting",
        "Extended time at prime wildlife locations",
        "Maximum 4 photographers per vehicle",
      ],
      itinerary: [
        {
          day: 1,
          title: "Introduction & Equipment Setup",
          description: "Photography briefing and afternoon practice session.",
        },
        {
          day: 2,
          title: "Golden Light Safari",
          description: "Early morning and late afternoon shoots during golden hour.",
        },
      ],
    },
    {
      id: 3,
      title: "Cultural & Wildlife Experience",
      duration: "6 days",
      price: "$750",
      description:
        "Combine wildlife viewing with authentic cultural experiences, including visits to Maasai villages and interactions with local communities.",
      image: "/images/img3.jpg",
      highlights: [
        "Maasai village visits",
        "Traditional dance performances",
        "Craft workshops with local artisans",
        "Wildlife safaris in diverse habitats",
      ],
      itinerary: [
        {
          day: 1,
          title: "Welcome to Tanzania",
          description: "Airport pickup and cultural orientation.",
        },
        {
          day: 2,
          title: "Maasai Traditions",
          description: "Full day immersion in Maasai culture and traditions.",
        },
      ],
    },
  ],
  gallery: [
    {
      image: "/images/img4.jpg",
      caption: "Lion pride at sunset in Serengeti",
      category: "Wildlife",
    },
    {
      image: "/images/img5.jpg",
      caption: "Elephant herd crossing the savanna",
      category: "Wildlife",
    },
    {
      image: "/images/img6.jpg",
      caption: "Sunrise over the Serengeti plains",
      category: "Landscape",
    },
    {
      image: "/images/img7.jpg",
      caption: "Giraffe family at watering hole",
      category: "Wildlife",
    },
    {
      image: "/images/img8.jpg",
      caption: "Traditional Maasai dance ceremony",
      category: "Culture",
    },
    {
      image: "/images/img9.jpg",
      caption: "Zebra crossing during migration",
      category: "Wildlife",
    },
    {
      image: "/images/img10.jpg",
      caption: "Sunset at Ngorongoro Crater",
      category: "Landscape",
    },
    {
      image: "/images/img11.jpg",
      caption: "Leopard in acacia tree",
      category: "Wildlife",
    },
    {
      image: "/images/img12.jpg",
      caption: "Local children at village school",
      category: "Culture",
    },
  ],
  reviews: [
    {
      id: 1,
      name: "Sarah Johnson",
      country: "United States",
      image: "/images/img13.jpg",
      rating: 5,
      date: "March 2023",
      text: "Emmanuel was an exceptional guide! His knowledge of wildlife and the Serengeti ecosystem is incredible. He knew exactly where to find the animals on our wishlist and shared fascinating information about their behavior. He was also very considerate of our needs and made sure we were comfortable throughout the safari. Highly recommend!",
    },
    {
      id: 2,
      name: "Thomas Weber",
      country: "Germany",
      image: "/images/img14.jpg",
      rating: 5,
      date: "January 2023",
      text: "Our photography tour with Emmanuel exceeded all expectations. He understood exactly what lighting and positioning we needed for the perfect shots. His patience and expertise made all the difference in capturing incredible wildlife moments. The camping experience was also very comfortable and well-organized.",
    },
    {
      id: 3,
      name: "Emma Wilson",
      country: "United Kingdom",
      image: "/images/img15.jpg",
      rating: 4,
      date: "December 2022",
      text: "Emmanuel provided us with an amazing safari experience. He is very knowledgeable about the wildlife and terrain. We saw all the Big Five thanks to his expertise! The only minor issue was that our vehicle had some air conditioning problems, but Emmanuel quickly arranged an alternative. Would definitely book with him again.",
    },
    {
      id: 4,
      name: "Hiroshi Tanaka",
      country: "Japan",
      image: "/images/img16.jpg",
      rating: 5,
      date: "November 2022",
      text: "Emmanuel is a true wildlife expert! His ability to spot animals from incredible distances is amazing. He was patient with our photography needs and knew all the best spots. The cultural component of our tour was also excellent - we learned so much about Maasai traditions from him.",
    },
  ],
  shop: {
    featured: [
      {
        id: 1,
        name: "Handcrafted Maasai Beaded Necklace",
        price: "$45",
        image: "/images/img17.jpg",
        description:
          "Traditional beadwork necklace made by Maasai women, featuring vibrant colors and authentic designs.",
        category: "Jewelry",
        inStock: true,
      },
      {
        id: 2,
        name: "Carved Wooden Safari Animals Set",
        price: "$65",
        image: "/images/img18.jpg",
        description:
          "Hand-carved wooden figures of the Big Five animals, crafted by local artisans using sustainable wood.",
        category: "Home Decor",
        inStock: true,
      },
      {
        id: 3,
        name: "Tanzania Wildlife Photography Book",
        price: "$35",
        image: "/images/img19.jpg",
        description:
          "A collection of Emmanuel's best wildlife photographs with informative captions about animal behavior and habitats.",
        category: "Books",
        inStock: true,
      },
    ],
    categories: [
      {
        name: "Jewelry & Accessories",
        items: [
          {
            id: 4,
            name: "Maasai Warrior Bracelet",
            price: "$25",
            image: "/images/img20.jpg",
            description:
              "Traditional beaded bracelet worn by Maasai warriors, handcrafted by local artisans.",
            inStock: true,
          },
          {
            id: 5,
            name: "Tanzanite Pendant Necklace",
            price: "$120",
            image: "/images/img21.jpg",
            description:
              "Sterling silver pendant featuring genuine Tanzanite, a gemstone found only in Tanzania.",
            inStock: false,
          },
        ],
      },
      {
        name: "Home Decor",
        items: [
          {
            id: 6,
            name: "Hand-woven Basket",
            price: "$40",
            image: "/images/img22.jpg",
            description: "Traditional basket woven by local women using natural fibers and dyes.",
            inStock: true,
          },
          {
            id: 7,
            name: "Serengeti Sunset Wall Art",
            price: "$85",
            image: "/images/img23.jpg",
            description:
              "Limited edition print of a stunning Serengeti sunset, captured by Emmanuel during a safari.",
            inStock: true,
          },
        ],
      },
      {
        name: "Clothing",
        items: [
          {
            id: 8,
            name: "Traditional Shuka Cloth",
            price: "$55",
            image: "/images/img24.jpg",
            description: "Authentic Maasai shuka cloth in vibrant red and blue check pattern.",
            inStock: true,
          },
          {
            id: 9,
            name: "Safari Hat",
            price: "$35",
            image: "/images/img25.jpg",
            description:
              "Durable, wide-brimmed safari hat perfect for sun protection during outdoor adventures.",
            inStock: true,
          },
        ],
      },
    ],
  },
};
