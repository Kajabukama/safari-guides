import React from "react";
import Link from "next/link";
import Image from "next/image";
import RatingBadge from "../RatingBadge";
import VerifiedBadge from "./VerifiedBadge";
import { User } from "@/interfaces/auth";

const GuideCard = ({ guide }: { guide: User }) => {
  return (
    <Link href={`/safari-guides/${guide.id}`} className="block group">
      <div className="overflow-hidden">
        <div className="relative aspect-square">
          <Image
            src={guide.image!}
            alt={`Guide ${guide.name}`}
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {guide.verified && <VerifiedBadge verified={guide.verified} />}
          <RatingBadge rating={guide.rating!} />
        </div>

        {/* Guide info below image */}
        <div className="mt-3 px-1">
          <h3 className="font-semibold">{guide.name}</h3>
          <div className="flex items-center gap-x-1 text-sm text-muted-foreground">
            Languages {" - "}
            {guide.languages!.map((language) => (
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
