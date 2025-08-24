"use client";
import React from "react";
import { motion } from "framer-motion";
import { ClockIcon, StarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import RatingBadge from "../RatingBadge";

interface Tour {
  id: number;
  title: string;
  image: string;
  duration: string;
  price: string;
  description: string;
  highlights: string[];
  itinerary?: {
    day: number;
    title: string;
    description: string;
  }[];
}

interface GuideToursServicesProps {
  tours: Tour[];
}

const GuideToursServices: React.FC<GuideToursServicesProps> = ({ tours }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <div className="mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              custom={index % 4}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="group"
            >
              <Link href={`/services/${tour.id}`} passHref>
                <div className="relative w-full rounded-xl group space-y-1">
                  <div className="aspect-square overflow-hidden rounded-xl relative">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      width={1600}
                      height={1600}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <RatingBadge rating={4.8} />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="font-medium text-sm line-clamp-1">{tour.title}</h3>
                      <div className="flex items-center">
                        <ClockIcon size={14} className="mr-1.5" />
                        <span className="text-sm">{tour.duration}</span>
                        <Badge className="ml-auto font-semibold text-xs">{tour.price}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default GuideToursServices;
