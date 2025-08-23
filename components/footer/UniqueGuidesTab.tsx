import React from "react";
import Image from "next/image";
import { guides } from "@/mock/guides-list";
import Link from "next/link";

function UniqueGuidesTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {Array.from({ length: 4 }).map((_, colIndex) => (
        <div key={colIndex} className="space-y-6">
          {guides
            .slice(colIndex * 3, colIndex * 3 + 3)
            .slice(0, 3)
            .map((guide) => (
              <Link
                href={`/safari-guides/${guide.id}`}
                key={guide.id}
                className="flex items-center space-x-2"
              >
                <div className="relative w-12 h-12 overflow-hidden rounded-full">
                  <Image
                    src={guide.image!}
                    alt={guide.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <h4 className="font-medium">{guide.name}</h4>
                  <div className="text-sm text-muted-foreground">
                    {guide.location} - {guide.specialties![0]}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      ))}
    </div>
  );
}

export default UniqueGuidesTab;
