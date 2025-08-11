import React from "react";
import Image from "next/image";
import { ItinerarySingle } from "@/interfaces";
import { HeartIcon, ShareIcon } from "lucide-react";
import SliderThumbnail from "../SliderThumbnail";

interface ItineraryImageSliderProps {
  itinerary: ItinerarySingle;
  activeImageIndex: number;
  setActiveImageIndex: (index: number) => void;
  isLiked: boolean;
  setIsLiked: (liked: boolean) => void;
}

function ItineraryImageSlider({
  itinerary,
  activeImageIndex,
  setActiveImageIndex,
  isLiked,
  setIsLiked,
}: ItineraryImageSliderProps) {
  return (
    <div className="relative">
      <div className="h-[60vh] bg-accent overflow-hidden relative">
        <Image
          priority
          width={1600}
          height={1600}
          src={itinerary.images[activeImageIndex]}
          alt={itinerary.title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Image Thumbnails */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {itinerary.images.map((image, index) => (
          <SliderThumbnail
            key={index}
            image={image}
            index={index}
            activeImageIndex={activeImageIndex}
            setActiveImageIndex={setActiveImageIndex}
          />
        ))}
      </div>
      {/* Action buttons */}
      <div className="absolute top-4 right-4 flex space-x-2">
        <div
          className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          onClick={() => setIsLiked(!isLiked)}
        >
          <HeartIcon
            size={20}
            className={isLiked ? "text-red-500 fill-red-500" : "text-gray-700"}
          />
        </div>
        <div className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors">
          <ShareIcon size={20} className="text-gray-700" />
        </div>
      </div>
    </div>
  );
}

export default ItineraryImageSlider;
