"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { guide } from "@/mock/guide-profile";
import GuideHero from "@/components/guides/GuideHero";
import GuideProfileInfo from "@/components/guides/GuideProfileInfo";
import GuideAbout from "@/components/guides/GuideAbout";
import GuideToursServices from "@/components/guides/GuideToursServices";
import GuideReviews from "@/components/guides/GuideReviews";
import GuideGallery from "@/components/guides/GuideGallery";

const GuideProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("about");
  const [isLiked, setIsLiked] = useState(false);

  // In a real app, handle loading and error states
  if (!guide) {
    return <div className="container mx-auto px-4 py-16 text-center">Loading guide profile...</div>;
  }

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    // Implement share functionality
    console.log("Share guide profile");
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <GuideHero
        coverImage={guide.coverImage}
        name={guide.name}
        isLiked={isLiked}
        onLikeToggle={handleLikeToggle}
        onShare={handleShare}
      />

      <div className="container mx-auto px-4">
        {/* Profile Info Card */}
        <GuideProfileInfo guide={guide} />

        {/* Tabs Navigation */}
        <div className="mb-8">
          <Tabs defaultValue="about" onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full flex gap-2 overflow-x-auto">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="tours">Tours & Services</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="gallery">Photo Gallery</TabsTrigger>
            </TabsList>

            {/* Tab Content */}
            <div className="mb-16 mt-8">
              <TabsContent value="about">
                <GuideAbout guide={guide} />
              </TabsContent>

              <TabsContent value="tours">
                <GuideToursServices tours={guide.tours} />
              </TabsContent>

              <TabsContent value="reviews">
                <GuideReviews
                  reviews={guide.reviews}
                  averageRating={guide.rating}
                  reviewCount={guide.reviewCount}
                  guideName={guide.name}
                />
              </TabsContent>

              <TabsContent value="gallery">
                <GuideGallery gallery={guide.gallery} guideName={guide.name} />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default GuideProfile;
