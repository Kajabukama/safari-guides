"use client";
import React from "react";
import { motion } from "framer-motion";
import { ClockIcon, StarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

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
        <h2 className="text-2xl font-semibold mb-6">Tours & Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg group">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-4">
                    <div className="flex justify-end">
                      <div className="flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <StarIcon size={14} className="text-yellow-400 fill-yellow-400 mr-1" />
                        <span className="text-xs font-medium text-gray-900">4.8</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-white font-medium text-lg line-clamp-2">{tour.title}</h3>
                      <div className="flex items-center text-white/90">
                        <ClockIcon size={14} className="mr-1.5" />
                        <span className="text-sm">{tour.duration}</span>
                        <Badge className="ml-auto bg-white/90 text-gray-900 hover:bg-white font-semibold">
                          {tour.price}
                        </Badge>
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
