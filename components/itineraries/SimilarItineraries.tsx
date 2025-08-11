"use client";
import { ItineraryMany } from "@/interfaces";
import { itineraries } from "@/mock/itineraries";
import { MapPinIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function SimilarItineraries() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Similar Itineraries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* This would typically be populated with actual similar itineraries */}
        {itineraries.slice(0, 5).map((item: ItineraryMany) => (
          <div key={item.id} className="overflow-hidden">
            <div className="relative">
              <Image
                width={1800}
                height={1480}
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-2xl"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <div className="flex items-center text-gray-600 text-sm mb-2">
                <MapPinIcon size={14} className="mr-1" />
                <span>{item.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <StarIcon size={14} className="text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">{item.rating}</span>
                </div>
                <span className="font-semibold">${item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarItineraries;
