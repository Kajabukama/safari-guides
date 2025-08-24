"use client";

import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/services/ServiceCard";
import { Service } from "@/interfaces/service";
import HeadingSection from "@/components/HeadingSection";

const ServicesSection = ({ services }: { services: Service[] }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        when: "beforeChildren",
      } as const,
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 110,
        damping: 15,
        mass: 0.4,
      },
    },
  } as const;

  return (
    <div className="container mx-auto">
      <HeadingSection
        title="Join a safari group"
        description="For backpackers and nature lovers, join others on a safari group and experience the
                thrill of the wild with our local guides."
        linkLabel="View all"
        url="/services"
      />

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        {services.map((service) => (
          <motion.div key={service.id} variants={item}>
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesSection;
