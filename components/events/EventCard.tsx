"use client";
import React from "react";
import Image from "next/image";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import { Event } from "@/interfaces/event";

const EventCard = ({ event }: { event: Event }) => {
  return (
    <Link href={`/events/${event.id}`} className="block overflow-hidden">
      <div className="relative aspect-square w-full">
        <Image
          src={event.images[0]}
          alt={event.title}
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        <div className="absolute top-2 left-2 right-2 flex justify-between">
          <div className="bg-white/90 text-stone-900 text-xs font-medium px-2 py-1 rounded-full">
            {event.price}
          </div>
          <div className="bg-stone-900/80 text-white text-xs px-2 py-1 rounded-full flex items-center">
            <CalendarIcon className="w-3 h-3 mr-1" />
            {event.date}
          </div>
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium mb-1 line-clamp-1">{event.title}</h3>
        <div className="flex items-center text-sm">
          <MapPinIcon className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
          <span className="truncate">{event.location}</span>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
