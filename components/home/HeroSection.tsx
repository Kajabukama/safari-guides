"use client";

import { motion } from "framer-motion";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <motion.div
      className="relative h-[70vh] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), url('/images/img30.jpg')`,
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-90"></div>
      <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-20 items-center relative z-10 text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
        >
          Discover Authentic Africa with Local Guides
        </motion.h1>
        <motion.p
          className="text-xl text-white mb-8 max-w-2xl"
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
        >
          Connect with experienced local guides who will show you the authentic beauty, wildlife,
          and culture of Africa
        </motion.p>
      </div>
    </motion.div>
  );
};

export default HeroSection;
