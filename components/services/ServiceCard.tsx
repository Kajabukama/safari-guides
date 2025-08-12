import React from "react";
import Image from "next/image";
import { StarIcon, MapPinIcon } from "lucide-react";
import { Service } from "@/interfaces/service";
import Link from "next/link";

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md aspect-[3/4] w-full">
      <Link href={`/services/${service.id}`}>
        <div className="relative w-full h-full">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          <div className="absolute inset-0 p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="bg-white/90 text-stone-900 text-xs font-medium px-2 py-1 rounded-full">
                {service.type.charAt(0).toUpperCase() + service.type.slice(1)}
              </div>
              <div className="bg-stone-900/80 text-white text-xs px-2 py-1 rounded-full flex items-center">
                <StarIcon className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                {service.rating}
              </div>
            </div>

            <div className="text-white">
              <h3 className="text-xl font-bold mb-1 line-clamp-2">{service.title}</h3>
              <div className="flex items-center text-sm text-white/80">
                <MapPinIcon className="w-3.5 h-3.5 mr-1" />
                <span className="truncate">{service.location}</span>
              </div>
              <div className="mt-2 text-white/90">
                <span className="font-semibold">{service.price}</span>
                <span className="text-sm">
                  {service.type === "accommodation"
                    ? "/ night"
                    : service.type === "food"
                    ? "/ meal"
                    : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ServiceCard;
