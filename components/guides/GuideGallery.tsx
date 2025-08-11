"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CameraIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface GalleryPhoto {
  image: string;
  caption: string;
  category: string;
}

interface GuideGalleryProps {
  gallery: GalleryPhoto[];
  guideName: string;
}

const GuideGallery: React.FC<GuideGalleryProps> = ({ gallery, guideName }) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Photos");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemFade = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // Get unique categories
  const categories = ["All Photos", ...new Set(gallery.map((photo) => photo.category))];

  // Filter photos by category
  const filteredPhotos =
    selectedCategory === "All Photos"
      ? gallery
      : gallery.filter((photo) => photo.category === selectedCategory);

  // Limit photos shown
  const photosToShow = showAllPhotos ? filteredPhotos : filteredPhotos.slice(0, 6);

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Photo Gallery</h2>
            <p className="text-muted-foreground">
              Explore {guideName}'s collection of travel moments and destinations
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {photosToShow.map((photo, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg h-52"
              variants={itemFade}
            >
              <Image
                src={photo.image}
                alt={photo.caption}
                width={400}
                height={256}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 flex items-center justify-center transition-all duration-300 rounded-lg">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  <CameraIcon size={24} className="text-white mx-auto mb-2" />
                  <p className="text-white text-sm font-medium mb-2">{photo.caption}</p>
                  <Badge variant="default" className="text-xs">
                    {photo.category}
                  </Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredPhotos.length > 6 && (
          <div className="mt-6 text-center">
            <Button variant="outline" onClick={() => setShowAllPhotos(!showAllPhotos)}>
              {showAllPhotos ? "Show Less" : `View All ${filteredPhotos.length} Photos`}
            </Button>
          </div>
        )}

        {filteredPhotos.length === 0 && selectedCategory !== "All Photos" && (
          <div className="text-center py-12">
            <CameraIcon size={48} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">
              No photos found in the "{selectedCategory}" category.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setSelectedCategory("All Photos")}
            >
              View All Photos
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default GuideGallery;
