import React from "react";
import { motion } from "framer-motion";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

interface HeroSectionProps {
  searchTerm: string;
  setSearchTerm: (arg: string) => void;
}

function HeroSection({ searchTerm, setSearchTerm }: HeroSectionProps) {
  return (
    <div className="bg-emerald-700 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Authentic Tanzanian Crafts & Souvenirs
          </h1>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-8">
            Discover handcrafted treasures from local artisans and guides, from traditional Maasai
            beadwork to stunning Tingatinga paintings
          </p>
          <div className="max-w-xl mx-auto bg-white text-black rounded-full">
            <div className="relative">
              <SearchIcon
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="text"
                placeholder="Search for souvenirs, art, crafts..."
                className="w-full pl-12 pr-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
