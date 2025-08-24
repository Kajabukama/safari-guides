"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import DestinationCard from "@/components/destinations/DestinationCard";
import CarouselNavigation from "@/components/CarouselNavigation";
import HeadingSection from "@/components/HeadingSection";

interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  guideCount: number;
}

interface DestinationsSectionProps {
  destinations: Destination[];
}

const DestinationsSection = ({ destinations }: DestinationsSectionProps) => {
  return (
    <div className="container mx-auto">
      <HeadingSection
        title="Popular Destinations"
        description="Discover Africa's most breathtaking locations with our expert local guides"
        linkLabel="View all"
        url="/destinations"
        showLink={false}
      />

      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 4,
          }}
          className="w-full relative"
        >
          <CarouselContent className="">
            {destinations.map((destination) => (
              <CarouselItem key={destination.id} className="md:basis-2/2 lg:basis-1/6 basis-1/6">
                <DestinationCard
                  name={destination.name}
                  image={destination.image}
                  description={destination.description}
                  guideCount={destination.guideCount}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNavigation />
        </Carousel>
      </div>
    </div>
  );
};

export default DestinationsSection;
