"use client";
import React from "react";
import Image from "next/image";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import { Event } from "@/interfaces/event";

const EventCard = ({ event }: { event: Event }) => {
  return (
    <Link href={`/events/${event.id}`}>
      <div className="group relative overflow-hidden rounded-lg shadow-md aspect-[3/4] w-full h-72">
        <div className="relative w-full h-full">
          <Image
            src={event.images[0]}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute inset-0 p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="bg-white/90 text-stone-900 text-xs font-medium px-2 py-1 rounded-full">
                {event.price}
              </div>
              <div className="bg-stone-900/80 text-white text-xs px-2 py-1 rounded-full flex items-center">
                <CalendarIcon className="w-3 h-3 mr-1" />
                {event.date}
              </div>
            </div>

            <div className="text-white">
              <h3 className="text-base mb-1 line-clamp-2">{event.title}</h3>
              <div className="flex items-center text-sm text-white/80">
                <MapPinIcon className="w-3.5 h-3.5 mr-1" />
                <span className="truncate">{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
