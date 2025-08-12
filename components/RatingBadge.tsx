import { StarIcon } from "lucide-react";
import React from "react";

function RatingBadge({ rating }: { rating: number }) {
  return (
    <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-2 py-1 rounded-full flex items-center">
      <StarIcon className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
      <span>{rating}</span>
    </div>
  );
}

export default RatingBadge;
