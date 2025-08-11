"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const CTASection: React.FC = () => {
  return (
    <motion.section
      className="py-20 bg-emerald-700 text-white"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
        >
          Ready to Explore Tanzania with a Local?
        </motion.h2>
        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto"
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
        >
          Connect with our experienced guides and start planning your authentic Tanzanian adventure
          today.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.6,
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
        >
          <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
            Find a Guide
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-emerald-800"
          >
            Become a Guide
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTASection;
