import Image from "next/image";
import { motion } from "framer-motion";
import { HeartIcon, MessageSquareIcon, MapPinIcon } from "lucide-react";
import type { Photo } from "@/interfaces";

export type { Photo };

interface PhotoCardProps {
  photo: Photo;
  onClick: (id: number) => void;
  index?: number;
}

export const PhotoCard = ({ photo, onClick, index = 0 }: PhotoCardProps) => {
  const animationDelay = index * 0.05;

  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden rounded-none aspect-square"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: animationDelay,
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      whileHover={{
        scale: 1,
        transition: { duration: 0.2 },
      }}
      onClick={() => onClick(photo.id)}
    >
      <Image
        src={photo.image}
        alt={photo.title}
        width={400}
        height={300}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />

      {/* Overlay with photo info */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <div className="text-white">
          <h3 className="font-semibold text-lg line-clamp-1">{photo.title}</h3>
          <div className="flex items-center text-sm text-white/80 mb-2">
            <MapPinIcon className="w-3.5 h-3.5 mr-1" />
            <span className="truncate">{photo.location}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-sm">
                <HeartIcon className="w-4 h-4 mr-1" />
                {photo.likes}
              </span>
              <span className="flex items-center text-sm">
                <MessageSquareIcon className="w-4 h-4 mr-1" />
                {photo.comments}
              </span>
            </div>
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                <Image
                  src={photo.photographer.image}
                  alt={photo.photographer.name}
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
