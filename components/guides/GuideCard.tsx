import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Guide } from "@/interfaces/guide";
import RatingBadge from "../RatingBadge";
import VerifiedBadge from "./VerifiedBadge";

const GuideCard = ({ guide }: { guide: Guide }) => {
  return (
    <Link href={`/safari-guides/${guide.id}`} className="block group">
      <div className="overflow-hidden">
        <div className="relative aspect-square">
          <Image
            src={guide.image}
            alt={`Guide ${guide.name}`}
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Verified badge */}
          {guide.verified && <VerifiedBadge verified={guide.verified} />}

          {/* Rating overlay */}
          <RatingBadge rating={guide.rating} />
        </div>

        {/* Guide info below image */}
        <div className="mt-3 px-1">
          <h3 className="font-semibold line-clamp-1">{guide.name}</h3>
          <div className="flex items-center gap-x-1 text-sm text-muted-foreground">
            Languages {" - "}
            {guide.languages.map((language) => (
              <span key={language} className="">
                {language}
              </span>
            ))}
            {/* <span className="truncate">{guide.location}</span> */}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default GuideCard;
