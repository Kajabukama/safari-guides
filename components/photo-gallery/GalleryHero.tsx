import React from "react";
import Image from "next/image";

function GalleryHero({ coverImage }: { coverImage: string }) {
  return (
    <div className="relative h-[500px] md:h-[500px] overflow-hidden">
      <Image
        src={coverImage}
        alt="Cover image"
        width={1920}
        height={1920}
        className="object-cover w-full h-full"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="container mx-auto text-center"></div>
    </div>
  );
}

export default GalleryHero;
