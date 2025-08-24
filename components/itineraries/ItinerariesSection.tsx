"use client";

import React from "react";
import { motion } from "framer-motion";
import ItineraryCard from "@/components/itineraries/ItineraryCard";
import { ItineraryMany } from "@/interfaces/itinerary";
import HeadingSection from "@/components/HeadingSection";

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
      className=""
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      variants={fadeIn}
    >
      <div className="container mx-auto">
        <HeadingSection
          title="Popular Safari Itineraries"
          description=" Expertly crafted safari experiences for unforgettable adventures"
          linkLabel="View all"
          url="/safari-itineraries"
        />

        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-7 gap-6"
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
