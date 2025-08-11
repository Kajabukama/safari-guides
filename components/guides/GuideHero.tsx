"use client";
import React from "react";
import { HeartIcon, ShareIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface GuideHeroProps {
  coverImage: string;
  name: string;
  isLiked: boolean;
  onLikeToggle: () => void;
  onShare: () => void;
}

const GuideHero: React.FC<GuideHeroProps> = ({
  coverImage,
  name,
  isLiked,
  onLikeToggle,
  onShare,
}) => {
  return (
    <div className="relative h-[300px] md:h-[400px] overflow-hidden">
      <Image src={coverImage} alt={`${name} cover`} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
      {/* Action buttons */}
      <div className="absolute top-4 right-4 flex space-x-2">
        <Button
          variant="secondary"
          size="icon"
          className="bg-white/80 dark:bg-black/80 backdrop-blur-sm dark:backdrop-blur-sm hover:bg-white dark:hover:bg-black transition-colors rounded-full"
          onClick={onLikeToggle}
        >
          <HeartIcon
            size={20}
            className={isLiked ? "text-red-500 fill-red-500" : "text-foreground"}
          />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="bg-white/80 dark:bg-black/80 backdrop-blur-sm dark:backdrop-blur-sm hover:bg-white dark:hover:bg-black transition-colors rounded-full"
          onClick={onShare}
        >
          <ShareIcon size={20} className="text-foreground" />
        </Button>
      </div>
    </div>
  );
};

export default GuideHero;
