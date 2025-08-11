"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import ItineraryCard from "@/components/itineraries/ItineraryCard";
import { ItineraryMany } from "@/interfaces";

interface ItinerariesSectionProps {
  itineraries: ItineraryMany[];
}

const ItinerariesSection = ({ itineraries }: ItinerariesSectionProps) => {
  const fadeIn = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Popular Safari Itineraries</h2>
            <p className="text-muted-foreground">
              Expertly crafted safari experiences for unforgettable adventures
            </p>
          </div>
          <Link
            href="/safaris"
            className="flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
          >
            Explore all safaris
            <ArrowRightIcon size={18} className="ml-1" />
          </Link>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
        >
          {itineraries.map((itinerary) => (
            <motion.div key={itinerary.id} variants={fadeIn}>
              <ItineraryCard itinerary={itinerary} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ItinerariesSection;
