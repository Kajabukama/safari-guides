import { Attraction, Fact } from "@/interfaces/about";
import { Globe, UsersRound, Calendar } from "lucide-react";

export const attractions: Attraction[] = [
  {
    id: "1",
    name: "Wildlife Safari",
    image: "/images/img38.jpg",
    circuit: "Northern Circuit",
    description:
      "Tanzania is home to some of the most spectacular wildlife viewing in Africa, including the Great Migration in Serengeti.",
  },
  {
    id: "2",
    name: "Mount Kilimanjaro",
    image: "/images/img39.jpg",
    circuit: "Northern Circuit",
    description:
      "Africa's highest peak offers one of the world's greatest mountain climbs with stunning views and diverse ecosystems.",
  },
  {
    id: "3",
    name: "Zanzibar Beaches",
    image: "/images/img40.jpg",
    circuit: "Coastal Circuit",
    description:
      "Crystal clear waters, white sand beaches, and historic Stone Town make Zanzibar a perfect destination to relax.",
  },
  {
    id: "4",
    name: "Maasai Culture",
    image: "/images/img41.jpg",
    circuit: "Northern Circuit",
    description:
      "Experience the rich traditions of the Maasai people, one of Africa's most famous and culturally distinctive tribes.",
  },
  {
    id: "5",
    name: "Ngorongoro Crater",
    image: "/images/img42.jpg",
    circuit: "Northern Circuit",
    description:
      "Experience the rich traditions of the Maasai people, one of Africa's most famous and culturally distinctive tribes.",
  },
];

export const facts: Fact[] = [
  {
    icon: <Globe size={24} className="text-emerald-600" />,
    title: "Geography",
    description:
      "Tanzania is the largest country in East Africa, covering 947,300 square kilometers with diverse landscapes from mountains to savannah.",
  },
  {
    icon: <UsersRound size={24} className="text-emerald-600" />,
    title: "People & Culture",
    description:
      "Home to over 120 ethnic groups with diverse cultures and traditions, with Swahili being the national language alongside English.",
  },
  {
    icon: <Calendar size={24} className="text-emerald-600" />,
    title: "Best Time to Visit",
    description:
      "The dry seasons (June-October and December-February) are ideal for wildlife viewing, while March-May brings lush landscapes but more rain.",
  },
];
