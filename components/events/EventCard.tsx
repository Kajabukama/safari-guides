import React from "react";
import Image from "next/image";
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";

export interface EventProps {
  id: number;
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  price: string;
  guideId: number;
  guideName: string;
  guideImage: string;
  description: string;
}

const EventCard: React.FC<EventProps> = ({
  id,
  title,
  image,
  date,
  time,
  location,
  price,
  guideId,
  guideName,
  guideImage,
  description,
}) => {
  return (
    <Link href={`/events/${id}`}>
      <div className="group relative overflow-hidden rounded-lg shadow-md aspect-[3/4] w-full h-72">
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute inset-0 p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="bg-white/90 text-stone-900 text-xs font-medium px-2 py-1 rounded-full">
                {price}
              </div>
              <div className="bg-stone-900/80 text-white text-xs px-2 py-1 rounded-full flex items-center">
                <CalendarIcon className="w-3 h-3 mr-1" />
                {date}
              </div>
            </div>

            <div className="text-white">
              <h3 className="text-base mb-1 line-clamp-2">{title}</h3>
              <div className="flex items-center text-sm text-white/80">
                <MapPinIcon className="w-3.5 h-3.5 mr-1" />
                <span className="truncate">{location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(EventCard);
