"use client";
import React from "react";
import Image from "next/image";
import { Event } from "@/interfaces/event";
import { CalendarIcon, MapPinIcon } from "lucide-react";

function SimilarEvents({ event }: { event: Event }) {
  return (
    <div className="overflow-hidden">
      <div className="relative">
        <Image
          width={1800}
          height={1200}
          src={event.images[0]}
          alt={`Similar Event ${event.title}`}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-1">{event.title}</h3>
        <div className="flex items-center text-muted-foreground text-sm mb-2">
          <CalendarIcon size={14} className="mr-1" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MapPinIcon size={14} className="mr-1" />
            <span className="text-sm text-muted-foreground">{event.location}</span>
          </div>
          <span className="font-semibold">{event.price}</span>
        </div>
      </div>
    </div>
  );
}

export default SimilarEvents;
