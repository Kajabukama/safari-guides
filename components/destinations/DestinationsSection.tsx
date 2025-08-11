"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DestinationCard from "./DestinationCard";
import CarouselNavigation from "../CarouselNavigation";

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
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-muted-foreground">
            Discover Tanzania's most breathtaking locations with our expert local guides
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 4,
            }}
            className="w-full relative"
          >
            <CarouselContent className="mb-10">
              {destinations.map((destination) => (
                <CarouselItem key={destination.id} className="md:basis-1/2 lg:basis-1/5">
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
    </section>
  );
};

export default React.memo(DestinationsSection);
