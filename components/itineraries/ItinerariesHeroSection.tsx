"use client";
import React from "react";
import { motion } from "framer-motion";
import { SearchIcon, FilterIcon, MapPinIcon, CalendarIcon, UsersIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ItinerariesHeroSectionProps {
  searchTerm: string;
  selectedLocation: string;
  selectedDuration: string;
  selectedGroupSize: string;
  onSearchChange: (value: string) => void;
  onLocationChange: (location: string) => void;
  onDurationChange: (duration: string) => void;
  onGroupSizeChange: (size: string) => void;
  onSearch: () => void;
  onFilters: () => void;
}

const ItinerariesHeroSection: React.FC<ItinerariesHeroSectionProps> = ({
  searchTerm,
  selectedLocation = "all",
  selectedDuration = "any",
  selectedGroupSize = "any",
  onSearchChange,
  onLocationChange,
  onDurationChange,
  onGroupSizeChange,
  onSearch,
  onFilters,
}) => {
  return (
    <motion.div
      className="bg-emerald-700 py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto text-center">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Discover Africa&rsquo;s Best Safari Itineraries
        </motion.h1>
        <motion.p
          className="text-white/90 text-lg mb-8 max-w-4xl mx-auto"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Explore curated safari packages designed by our expert local guides to experience the best
          of Africa&rsquo;s wildlife and landscapes
        </motion.p>
        <motion.div
          className="bg-card rounded-2xl p-4 shadow-lg max-w-4xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <div className="relative w-full">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10 pointer-events-none" />
                <Input
                  type="text"
                  placeholder="Search by destination, activity, or wildlife..."
                  className="w-full pl-10 h-12 text-base"
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <Button onClick={onSearch}>Search</Button>
              <Button variant="outline" className="flex items-center" onClick={onFilters}>
                <FilterIcon size={18} className="mr-2" />
                Filters
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="relative">
              <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
              <Select value={selectedLocation} onValueChange={onLocationChange}>
                <SelectTrigger className="pl-10">
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Serengeti National Park">Serengeti National Park</SelectItem>
                  <SelectItem value="Ngorongoro Conservation Area">
                    Ngorongoro Conservation Area
                  </SelectItem>
                  <SelectItem value="Tarangire National Park">Tarangire National Park</SelectItem>
                  <SelectItem value="Lake Manyara">Lake Manyara</SelectItem>
                  <SelectItem value="Multiple Parks">Multiple Parks</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
              <Select value={selectedDuration} onValueChange={onDurationChange}>
                <SelectTrigger className="pl-10">
                  <SelectValue placeholder="Any Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Duration</SelectItem>
                  <SelectItem value="3 days">3 days</SelectItem>
                  <SelectItem value="4 days">4 days</SelectItem>
                  <SelectItem value="5 days">5 days</SelectItem>
                  <SelectItem value="6 days">6 days</SelectItem>
                  <SelectItem value="7 days">7 days</SelectItem>
                  <SelectItem value="8 days">8 days</SelectItem>
                  <SelectItem value="9 days">9 days</SelectItem>
                  <SelectItem value="10 days">10 days</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="relative">
              <UsersIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
              <Select value={selectedGroupSize} onValueChange={onGroupSizeChange}>
                <SelectTrigger className="pl-10">
                  <SelectValue placeholder="Any Group Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Group Size</SelectItem>
                  <SelectItem value="1-2">1-2 people</SelectItem>
                  <SelectItem value="3-5">3-5 people</SelectItem>
                  <SelectItem value="6-10">6-10 people</SelectItem>
                  <SelectItem value="10+">10+ people</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ItinerariesHeroSection;
