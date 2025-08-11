"use client";
import React from "react";
import { motion } from "framer-motion";
import GuideCard from "@/components/guides/GuideCard";
import { Guide } from "@/interfaces";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface GuidesListSectionProps {
  guides: Guide[];
  colSize: number;
  onSortChange: (sortBy: string) => void;
  onClearFilters: () => void;
}

const GuidesListSection: React.FC<GuidesListSectionProps> = ({
  guides,
  onSortChange,
  colSize,
  onClearFilters,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="lg:w-3/4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">{guides.length} guides available</h2>
        <div className="flex items-center gap-2">
          <Label className="text-sm font-medium">Sort by:</Label>
          <Select defaultValue="rating" onValueChange={onSortChange}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rating</SelectItem>
              <SelectItem value="price-low">Lowest Price</SelectItem>
              <SelectItem value="price-high">Highest Price</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <motion.div
        className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-${colSize} gap-6`}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {guides.slice(0, 10).map((guide) => (
          <motion.div key={guide.id} variants={itemVariants}>
            <GuideCard
              id={guide.id}
              name={guide.name}
              image={guide.image}
              location={guide.location}
              rating={guide.rating}
              specialties={guide.specialties}
              price={guide.price}
              verified={guide.verified}
            />
          </motion.div>
        ))}
      </motion.div>

      {guides.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">
            No guides match your search criteria. Try adjusting your filters.
          </p>
          <Button variant="outline" className="mt-4" onClick={onClearFilters}>
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default GuidesListSection;
