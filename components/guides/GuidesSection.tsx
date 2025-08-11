"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import GuideList from "./GuideList";

const GuidesSection: React.FC = () => {
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
            <h2 className="text-3xl font-bold mb-2">Popular Safari Guides</h2>
            <p className="text-muted-foreground">Meet our experienced and passionate guides</p>
          </div>
          <Link
            href="/guides"
            className="flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
          >
            View all guides
            <ArrowRightIcon size={18} className="ml-1" />
          </Link>
        </div>
        <GuideList />
      </div>
    </motion.section>
  );
};

export default GuidesSection;
