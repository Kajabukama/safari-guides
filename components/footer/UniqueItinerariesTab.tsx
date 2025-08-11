import React from "react";
import { itineraries } from "@/mock/itineraries";
import Image from "next/image";
import Link from "next/link";

function UniqueItinerariesTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {Array.from({ length: 4 }).map((_, colIndex) => (
        <div key={colIndex} className="space-y-6">
          {itineraries
            .slice(colIndex * 3, colIndex * 3 + 3)
            .slice(0, 3)
            .map((itinerary) => (
              <Link
                href={`/safari-itineraries/${itinerary.id}`}
                key={itinerary.id}
                className="flex items-center space-x-2"
              >
                <div className="relative w-12 h-12 overflow-hidden rounded-full">
                  <Image
                    src={itinerary.image}
                    alt={itinerary.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <h4 className="font-medium">{itinerary.title}</h4>
                  <div className="text-sm text-muted-foreground">
                    {itinerary.location} • {itinerary.duration} • {itinerary.price}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      ))}
    </div>
  );
}

export default UniqueItinerariesTab;
