import React from "react";
import Image from "next/image";

interface SliderThumbnailProps {
  image: string;
  index: number;
  activeImageIndex: number;
  setActiveImageIndex: (index: number) => void;
}

function SliderThumbnail({
  image,
  index,
  activeImageIndex,
  setActiveImageIndex,
}: SliderThumbnailProps) {
  return (
    <div
      key={index}
      className={`size-16 rounded-full overflow-hidden border-4 ${
        activeImageIndex === index ? "border-white" : "border-transparent opacity-70"
      }`}
      onClick={() => setActiveImageIndex(index)}
    >
      <Image
        src={image}
        alt={`Thumbnail ${index + 1}`}
        width={1920}
        height={1920}
        className="w-full h-full object-cover"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

export default SliderThumbnail;
