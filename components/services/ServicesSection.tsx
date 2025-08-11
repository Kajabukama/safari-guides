"use client";
import React, { useMemo } from "react";
import { m, LazyMotion, domAnimation, motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import ServiceCard from "@/components/services/ServiceCard";
import { Service } from "@/interfaces";

const ServicesSection = ({ services }: { services: Service[] }) => {
  const container = useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.06,
          when: "beforeChildren",
        } as const,
      },
    }),
    []
  );

  const item = useMemo(
    () =>
      ({
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
      } as const),
    []
  );

  const header = useMemo(
    () =>
      ({
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1], // Custom ease curve for smoother motion
          },
        },
      } as const),
    [services]
  );

  return (
    <LazyMotion features={domAnimation}>
      <section className="py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={header}
          >
            <div className="mb-4 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">Join a safari group</h2>
              <p className="text-muted-foreground">
                For backpackers and nature lovers, join others on a safari group and experience the
                thrill of the wild with our local guides.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center text-primary font-medium hover:text-stone-700 transition-colors"
            >
              View all services
              <ArrowRightIcon size={18} className="ml-1" />
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
      </section>
    </LazyMotion>
  );
};

export default ServicesSection;
