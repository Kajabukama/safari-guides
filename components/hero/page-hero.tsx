"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

interface PageHeroProps {
  image?: string;
  images?: string[];
  title: string;
  description?: string;
  height?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  children?: React.ReactNode;
}

export function PageHero({
  image,
  images,
  title,
  description,
  height = "60vh",
  overlay = true,
  overlayOpacity = 0.4,
  children,
}: PageHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Determine which images to use
  const imageList = images || (image ? [image] : []);
  const [activeIndex, setActiveIndex] = useState(0);
  const currentImage = imageList[activeIndex] || "/images/placeholder.jpg";

  // Navigation handlers
  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  // Parallax effect for the image
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9] as const,
      },
    },
  };

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: overlayOpacity,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ height }}>
      {/* Parallax Background Image with Fade Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="absolute inset-0"
          style={{ y, opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <Image
            src={currentImage}
            alt={title}
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls - Only show if multiple images */}
      {imageList.length > 1 && (
        <>
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
            aria-label="Next image"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-800" />
          </button>

          {/* Thumbnails */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {imageList.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-16 h-16 rounded-full overflow-hidden border-2 transition-all ${
                  activeIndex === index
                    ? "border-white scale-110"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </>
      )}

      {/* Overlay */}
      {overlay && (
        <motion.div
          className="absolute inset-0 bg-black"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
        />
      )}

      {/* Content */}
      <motion.div
        className="relative h-full flex flex-col justify-end pb-12 md:pb-16 lg:pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={titleVariants}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
              {title}
            </h1>
          </motion.div>

          {description && (
            <motion.p
              className="text-lg md:text-xl text-white/90 max-w-2xl mb-6"
              variants={descriptionVariants}
            >
              {description}
            </motion.p>
          )}

          {children && <motion.div variants={descriptionVariants}>{children}</motion.div>}
        </div>
      </motion.div>

      {/* Gradient overlay at bottom for better text readability */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
    </div>
  );
}
