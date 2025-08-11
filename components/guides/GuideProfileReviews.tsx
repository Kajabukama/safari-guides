import { StarIcon, MapPinIcon } from "lucide-react";
import React from "react";

function GuideProfileReviews({
  rating,
  reviewCount,
  location,
}: {
  rating: number;
  reviewCount: number;
  location: string;
}) {
  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="flex items-center mb-2 text-base">
        <StarIcon size={20} className="text-yellow-500 fill-current" />
        <span className="ml-1 font-semibold">{rating}</span>
        <span className="ml-1 text-muted-foreground">({reviewCount} reviews)</span>
      </div>
      <div className="flex items-center text-muted-foreground">
        <MapPinIcon size={16} className="mr-1" />
        <span>{location}</span>
      </div>
    </div>
  );
}

export default GuideProfileReviews;
