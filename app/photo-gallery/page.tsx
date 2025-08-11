"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/components/providers/AuthProvider";
import { photos } from "@/mock/photos";
import type { Photo } from "@/interfaces";
import { CategoryTabs, TagsFilter, PhotoGrid } from "@/components/photo-gallery";
import { Button } from "@/components/ui/button";
import { CameraIcon } from "lucide-react";
import GalleryHero from "@/components/photo-gallery/GalleryHero";

export default function PhotoGallery() {
  const { openLoginModal } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Filter photos based on search term and category
  useEffect(() => {
    const filtered = photos.filter((photo: Photo) => {
      const matchesSearch =
        searchTerm === "" ||
        photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        photo.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        photo.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory =
        selectedCategory === "all" ||
        (selectedCategory === "wildlife" && photo.tags.includes("wildlife")) ||
        (selectedCategory === "landscape" && photo.tags.includes("landscape")) ||
        (selectedCategory === "people" && photo.tags.includes("culture")) ||
        (selectedCategory === "guides" && photo.photographer.type === "guide") ||
        (selectedCategory === "tourists" && photo.photographer.type === "tourist");

      return matchesSearch && matchesCategory;
    });

    // Get unique tags from all photos
    const uniqueTags: string[] = Array.from(new Set(photos.flatMap((photo: Photo) => photo.tags)));

    setFilteredPhotos(filtered);
    setAllTags(uniqueTags);
  }, [searchTerm, selectedCategory]);

  // Handle search
  const handleSearch = useCallback(() => {
    console.log("Searching for:", searchTerm);
  }, [searchTerm]);

  // Handle tag click
  const handleTagClick = useCallback((tag: string) => {
    setSearchTerm(tag);
  }, []);

  // Handle photo click
  const handlePhotoClick = useCallback((photoId: number) => {
    console.log(`Photo clicked: ${photoId}`);
    // In a real app, you would navigate to a detail page or open a modal
  }, []);

  // Handle show more tags
  const handleShowMoreTags = useCallback(() => {
    console.log("Show more tags clicked");
    // Show all available tags
    setAllTags(Array.from(new Set(photos.flatMap((photo) => photo.tags))));
  }, []);

  // Handle filter click
  const handleFilterClick = useCallback(() => {
    console.log("Filter button clicked");
    // In a real app, you might want to show advanced filters
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="w-16 h-16 bg-stone-100 rounded-full mx-auto mb-4"></div>
          <div className="text-stone-900 font-medium">Loading gallery...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <GalleryHero coverImage={photos[20].image} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Category Tabs */}
        <CategoryTabs selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

        {/* Filter Options */}
        <TagsFilter
          tags={allTags.slice(0, 8)}
          onTagClick={handleTagClick}
          onShowMore={handleShowMoreTags}
        />

        {/* Photo Grid */}
        {filteredPhotos.length > 0 ? (
          <PhotoGrid photos={filteredPhotos} onPhotoClick={handlePhotoClick} />
        ) : (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center">
              <CameraIcon size={48} className="text-stone-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-stone-800">No photos found</h3>
              <p className="text-stone-600 mb-6 max-w-md">
                We couldn't find any photos matching your search criteria
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="text-stone-800 hover:bg-stone-100"
              >
                Clear all filters
              </Button>
            </div>
          </motion.div>
        )}

        {/* Load More Button */}
        {filteredPhotos.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Load More Photos
            </Button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="bg-stone-50 py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
          >
            <h2 className="text-3xl font-bold mb-4 text-stone-900">Share Your Safari Experience</h2>
            <p className="text-stone-600 text-lg mb-8 max-w-2xl mx-auto">
              Have amazing photos from your Safari adventure? Join our community and share them with
              fellow travelers
            </p>
            <Button
              size="lg"
              className="px-8 bg-stone-900 hover:bg-stone-800"
              onClick={openLoginModal}
            >
              <CameraIcon size={18} className="mr-2" />
              Upload Your Photos
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
