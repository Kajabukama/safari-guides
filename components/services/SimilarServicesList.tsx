"use client";
import React from "react";
import { MapPinIcon } from "lucide-react";
import { StarIcon } from "lucide-react";
import { Service } from "@/interfaces/service";
import Image from "next/image";

function SimilarServicesList({ service }: { service: Service }) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">
        Similar {service.type === "accommodation" ? "Accommodations" : "Services"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        {/* This would typically be populated with actual similar services */}
        {[1, 2, 5].map((i) => (
          <div key={i} className="overflow-hidden">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                width={1920}
                height={1920}
                src={service?.images?.[0] || ""}
                alt={`Similar Service ${i}`}
                className="w-full h-full object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">{service.title}</h3>
              <div className="flex text-muted-foreground items-center text-sm mb-2">
                <MapPinIcon size={14} className="mr-1" />
                <span>{service.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <StarIcon size={14} className="text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">{service.rating}</span>
                </div>
                <span className="font-semibold">{service.price} / night</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarServicesList;
