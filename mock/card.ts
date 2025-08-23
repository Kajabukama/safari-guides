import { CartItem } from "@/interfaces/product";

export const cartItems: CartItem[] = [
  {
    id: "1",
    name: "Handcrafted Maasai Beaded Necklace",
    price: "45",
    image: "/images/image.jpeg",
    quantity: 1,
    seller: {
      id: "2",
      name: "Amina Hussein",
      image: "images/guide2.jpg",
      isGuide: true,
    },
    color: "Red",
  },
  {
    id: "2",
    name: "Carved Wooden Safari Animals Set",
    price: "65",
    image: "/images/image.jpeg",
    quantity: 2,
    seller: {
      id: "2",
      name: "Emmanuel Mbogo",
      image: "images/guide2.jpg",
      isGuide: false,
    },
    color: "Natural",
  },
  {
    id: "8",
    name: "Traditional Maasai Shuka Cloth",
    price: "55",
    image: "/images/image.jpeg",
    quantity: 1,
    seller: {
      id: "2",
      name: "Amina Hussein",
      image: "images/guide2.jpg",
      isGuide: true,
    },
    color: "Red & Blue",
  },
];
