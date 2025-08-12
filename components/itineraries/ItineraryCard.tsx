"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ItineraryMany } from "@/interfaces/itinerary";
import RatingBadge from "@/components/RatingBadge";

const ItineraryCard = ({ itinerary }: { itinerary: ItineraryMany }) => {
  return (
    <Link href={`/safari-itineraries/${itinerary?.id}`} className="block group">
      <div className="overflow-hidden">
        <div className="relative aspect-square rounded-2xl overflow-hidden">
          <Image
            src={itinerary?.image}
            alt={itinerary?.title}
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />

          {/* Duration badge */}
          <div className="absolute top-2 left-2 bg-white/90 text-stone-900 text-xs font-medium px-2 py-1 rounded-full">
            {itinerary?.duration}
          </div>

          {/* Rating badge */}
          <RatingBadge rating={itinerary?.rating} />
        </div>

        {/* Itinerary info below image */}
        <div className="mt-3 px-1">
          <h3 className="font-semibold line-clamp-1">{itinerary?.title}</h3>
          <div className="text-sm text-muted-foreground">
            {itinerary?.price} • Max {itinerary?.maxGuests} guests
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItineraryCard;
