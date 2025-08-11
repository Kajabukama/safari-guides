"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ItinerariesCTASection: React.FC = () => {
  return (
    <section className="bg-emerald-700 py-16 mt-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Can&apos;t find the perfect safari?
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Our local guides can create custom itineraries tailored to your interests, schedule, and
            budget
          </p>
          <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
            Request Custom Safari
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ItinerariesCTASection;
