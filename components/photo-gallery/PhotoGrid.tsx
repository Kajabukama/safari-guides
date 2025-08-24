import { motion } from "framer-motion";
import { PhotoCard, Photo as PhotoType } from "@/components/photo-gallery/PhotoCard";

export const PhotoGrid = ({
  photos,
  onPhotoClick,
}: {
  photos: PhotoType[];
  onPhotoClick: (id: number) => void;
}) => {
  // Calculate the number of columns based on viewport width
  const getGridCols = () => {
    if (typeof window === "undefined") return "md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7";

    const width = window.innerWidth;
    if (width < 640) return "grid-cols-2";
    if (width < 1024) return "grid-cols-3";
    if (width < 1280) return "grid-cols-4";
    if (width < 1536) return "grid-cols-5";
    return "grid-cols-7";
  };

  return (
    <motion.div
      className={`grid gap-0.5 sm:gap-0.5 ${getGridCols()}`}
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
            when: "beforeChildren",
          },
        },
      }}
    >
      {photos.map((photo, index) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
          viewport={{ once: true, margin: "100px" }}
          className="w-full"
        >
          <PhotoCard
            photo={photo}
            onClick={onPhotoClick}
            index={index % 20} // Limit to 20 different animation delays
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
