"use client";
import { ItineraryMany } from "@/interfaces/itinerary";
import { itineraries } from "@/mock/itineraries";
import React from "react";
import ItineraryCard from "@/components/itineraries/ItineraryCard";

function SimilarItineraries() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Similar Itineraries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        {itineraries.slice(0, 6).map((item: ItineraryMany) => (
          <ItineraryCard itinerary={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default SimilarItineraries;
