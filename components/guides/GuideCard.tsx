import React from "react";
import { StarIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
interface GuideCardProps {
  name: string;
  image: string;
  location: string;
  rating: number;
  specialties: string[];
  price: string;
  verified: boolean;
  id: number;
}
const GuideCard: React.FC<GuideCardProps> = ({ name, image, rating, verified, id }) => {
  return (
    <Link href={`/safari-guides/${id}`} className="block group">
      <div className="overflow-hidden border-none rounded-3xl">
        <div className="relative aspect-[5/5]">
          <Image
            src={image}
            alt={`Guide ${name}`}
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105 rounded-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Gradient overlay for better text readability */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" /> */}

          {/* Verified badge */}
          {verified && (
            <Badge className="absolute top-3 right-3 bg-white text-primary hover:bg-white">
              {/* <CheckIcon size={14} className="mr-1" /> */}
              Verified
            </Badge>
          )}

          {/* Rating overlay */}
          <div className="absolute bottom-3 left-3 flex items-center bg-white backdrop-blur-sm rounded-full px-3 py-1.5">
            <StarIcon size={16} className="text-yellow-500 fill-current mr-1" />
            <span className="font-semibold text-sm text-gray-900">{rating.toFixed(1)}</span>
          </div>

          {/* Guide name overlay */}
          {/* <div className="absolute bottom-3 right-3">
            <h3 className="text-white font-semibold text-base">{name}</h3>
          </div> */}
        </div>
      </div>
    </Link>
  );
};
export default GuideCard;
