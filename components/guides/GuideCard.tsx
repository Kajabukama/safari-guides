import React from "react";
import { StarIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Guide } from "@/interfaces/guide";

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
          {guide.verified && (
            <Badge className="absolute top-3 right-3 bg-white text-primary hover:bg-white">
              Verified
            </Badge>
          )}

          {/* Rating overlay */}
          <div className="absolute bottom-3 left-3 flex items-center bg-white backdrop-blur-sm rounded-full px-3 py-1.5">
            <StarIcon size={16} className="text-yellow-500 fill-current mr-1" />
            <span className="font-semibold text-sm text-gray-900">{guide.rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Guide info below image */}
        <div className="mt-3 px-1">
          <h3 className="font-semibold text-gray-900 line-clamp-1">{guide.name}</h3>
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
