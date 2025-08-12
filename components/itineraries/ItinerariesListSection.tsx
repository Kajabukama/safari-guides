"use client";
import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import ItineraryCard from "@/components/itineraries/ItineraryCard";
import { ItineraryMany } from "@/interfaces";

interface ItinerariesListSectionProps {
  itineraries: ItineraryMany[];
  onSortChange: (sortBy: string) => void;
  onClearFilters: () => void;
}

const ItinerariesListSection: React.FC<ItinerariesListSectionProps> = ({
  itineraries,
  onSortChange,
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
    <div className="container mx-auto px-4 py-12">
      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="max-w-xl mx-auto md:w-auto">
          <TabsTrigger value="all">All Safaris</TabsTrigger>
          <TabsTrigger value="wildlife">Wildlife</TabsTrigger>
          <TabsTrigger value="photography">Photography</TabsTrigger>
          <TabsTrigger value="family">Family</TabsTrigger>
          <TabsTrigger value="budget">Budget</TabsTrigger>
          <TabsTrigger value="luxury">Luxury</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <h2 className="text-xl font-semibold">{itineraries.length} itineraries available</h2>
            <div className="flex items-center gap-2">
              <Label htmlFor="sort-select" className="text-sm font-medium text-muted-foreground">
                Sort by:
              </Label>
              <Select onValueChange={onSortChange} defaultValue="popular">
                <SelectTrigger className="w-48" id="sort-select">
                  <SelectValue placeholder="Sort by..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="duration">Duration: Short to Long</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {itineraries.map((itinerary) => (
              <motion.div key={itinerary.id} variants={itemVariants}>
                <ItineraryCard itinerary={itinerary} />
              </motion.div>
            ))}
          </motion.div>

          {itineraries.length === 0 && (
            <div className="text-center py-16 bg-muted/30 rounded-lg border border-dashed border-muted-foreground/25">
              <p className="text-muted-foreground text-lg mb-4">
                No itineraries match your search criteria. Try adjusting your filters.
              </p>
              <Button variant="outline" onClick={onClearFilters}>
                Clear all filters
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="wildlife">
          <div className="text-center py-16 bg-muted/30 rounded-lg border border-dashed border-muted-foreground/25">
            <h3 className="text-lg font-semibold mb-2">Wildlife Safaris</h3>
            <p className="text-muted-foreground">
              Specialized wildlife safari itineraries coming soon!
            </p>
          </div>
        </TabsContent>

        <TabsContent value="photography">
          <div className="text-center py-16 bg-muted/30 rounded-lg border border-dashed border-muted-foreground/25">
            <h3 className="text-lg font-semibold mb-2">Photography Safaris</h3>
            <p className="text-muted-foreground">
              Professional photography safari itineraries coming soon!
            </p>
          </div>
        </TabsContent>

        <TabsContent value="family">
          <div className="text-center py-16 bg-muted/30 rounded-lg border border-dashed border-muted-foreground/25">
            <h3 className="text-lg font-semibold mb-2">Family Safaris</h3>
            <p className="text-muted-foreground">Family-friendly safari itineraries coming soon!</p>
          </div>
        </TabsContent>

        <TabsContent value="budget">
          <div className="text-center py-16 bg-muted/30 rounded-lg border border-dashed border-muted-foreground/25">
            <h3 className="text-lg font-semibold mb-2">Budget Safaris</h3>
            <p className="text-muted-foreground">Affordable safari itineraries coming soon!</p>
          </div>
        </TabsContent>

        <TabsContent value="luxury">
          <div className="text-center py-16 bg-muted/30 rounded-lg border border-dashed border-muted-foreground/25">
            <h3 className="text-lg font-semibold mb-2">Luxury Safaris</h3>
            <p className="text-muted-foreground">Premium luxury safari itineraries coming soon!</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ItinerariesListSection;
