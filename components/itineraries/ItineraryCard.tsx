"use client";

import React from "react";
import Image from "next/image";
import { StarIcon } from "lucide-react";
import Link from "next/link";
import { ItineraryMany } from "@/interfaces";

const ItineraryCard = ({ itinerary }: { itinerary: ItineraryMany }) => {
  return (
    <Link href={`/safari-itineraries/${itinerary?.id}`}>
      <div className="group relative overflow-hidden rounded-xl aspect-[4/4] w-full">
        <div className="relative w-full h-full">
          <Image
            src={itinerary?.image}
            alt={itinerary?.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

          <div className="absolute inset-0 p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="bg-white/90 text-stone-900 text-xs font-medium px-2 py-1 rounded-full">
                {itinerary?.duration}
              </div>
              <div className="bg-stone-900/80 text-white text-xs px-2 py-1 rounded-full flex items-center">
                <StarIcon className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                {itinerary?.rating}
              </div>
            </div>

            <div className="text-white">
              <h3 className="text-base mb-1">{itinerary?.title}</h3>
              {/* <div className="flex items-center text-sm text-white/80 mb-2">
              <MapPinIcon className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
              <span className="truncate">{location}</span>
            </div> */}
              {/* <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-white/90">
                <UsersIcon className="w-3.5 h-3.5 mr-1" />
                <span>Max {maxGuests}</span>
              </div>
              <div className="font-semibold">{price}</div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItineraryCard;
