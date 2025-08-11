"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ArrowRightIcon } from "lucide-react";
import EventCard from "./EventCard";
import Link from "next/link";
import CarouselNavigation from "../CarouselNavigation";

interface Event {
  id: number;
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  price: string;
  guideId: number;
  guideName: string;
  guideImage: string;
  description: string;
}

interface EventsSectionProps {
  events: Event[];
}

const EventsSection: React.FC<EventsSectionProps> = ({ events }) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 640px)");

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Join Upcoming Events</h2>
            <p className="text-muted-foreground">
              Join our expert-led tours and experience Tanzania like never before
            </p>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center font-medium text-primary transition-colors mx-auto md:mx-0"
          >
            View all events
            <ArrowRightIcon size={18} className="ml-1" />
          </Link>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: isDesktop ? 4 : isTablet ? 2 : 1,
            }}
            className="w-full"
          >
            <CarouselContent className="relative mb-10">
              {events.map((event) => (
                <CarouselItem key={event.id} className="pl-4 md:basis-1/2 lg:basis-1/5">
                  <EventCard
                    id={event.id}
                    title={event.title}
                    image={event.image}
                    date={event.date}
                    time={event.time}
                    location={event.location}
                    price={event.price}
                    guideId={event.guideId}
                    guideName={event.guideName}
                    guideImage={event.guideImage}
                    description={event.description}
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

export default React.memo(EventsSection);
