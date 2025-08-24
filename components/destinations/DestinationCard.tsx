import React from "react";
import Image from "next/image";

interface DestinationCardProps {
  name: string;
  image: string;
  description?: string;
  guideCount: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ name, image, guideCount }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl aspect-square w-full">
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute inset-0 p-4 flex flex-col justify-end">
          <div className="text-white">
            <h3 className="text-lg font-medium mb-1">{name}</h3>
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/80">
                {guideCount} {guideCount === 1 ? "Guide" : "Guides"}
              </span>
              <button
                className="text-base font-medium text-white hover:text-stone-200 transition-colors"
                aria-label={`Explore ${name}`}
              >
                View →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DestinationCard);
