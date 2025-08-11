import React from "react";
import Image from "next/image";
import { Service } from "@/interfaces";
import { HeartIcon, ShareIcon } from "lucide-react";
import SliderThumbnail from "@/components/SliderThumbnail";

interface ServiceImageSliderProps {
  service: Service;
  activeImageIndex: number;
  setActiveImageIndex: (index: number) => void;
  isLiked: boolean;
  setIsLiked: (liked: boolean) => void;
}

function ServiceImageSlider({
  service,
  activeImageIndex,
  setActiveImageIndex,
  isLiked,
  setIsLiked,
}: ServiceImageSliderProps) {
  return (
    <div className="relative">
      <div className="h-[60vh] bg-accent overflow-hidden relative">
        <Image
          width={1920}
          height={1920}
          src={service.images?.[activeImageIndex] || ""}
          alt={service.title}
          className="w-full h-full object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      {/* Image Thumbnails */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {service.images?.map((image, index) => (
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

export default ServiceImageSlider;
