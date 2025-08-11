"use client";
import React from "react";
import { motion } from "framer-motion";
import { SearchIcon, FilterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FilterOptions } from "@/interfaces";

interface GuidesHeroSectionProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onSearch: () => void;
  onFilters: () => void;
}

const GuidesHeroSection: React.FC<GuidesHeroSectionProps> = ({
  searchTerm,
  onSearchChange,
  onSearch,
  onFilters,
}) => {
  return (
    <div
      className="py-16 h-[35vh]"
      style={{
        backgroundImage: `url('/images/img28.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
    </div>
  );
};

export default GuidesHeroSection;
