"use client";

import React from "react";
import { motion } from "framer-motion";
import GuideList from "@/components/guides/GuideList";
import HeadingSection from "../HeadingSection";

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
    <motion.div
      className="container mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      variants={fadeIn}
    >
      <HeadingSection
        title="Popular Safari Guides"
        description="Meet our experienced and passionate guides"
        linkLabel="View all"
        url="/guides"
      />
      <GuideList />
    </motion.div>
  );
};

export default GuidesSection;
