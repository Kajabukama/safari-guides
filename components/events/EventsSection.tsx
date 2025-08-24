"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import EventCard from "@/components/events/EventCard";
import CarouselNavigation from "@/components/CarouselNavigation";
import { Event } from "@/interfaces/event";
import HeadingSection from "@/components/HeadingSection";

const EventsSection = ({ events }: { events: Event[] }) => {
  return (
    <div className="container mx-auto">
      <HeadingSection
        title="Join Upcoming Events"
        description="Join our expert-led tours and experience Tanzania like never before"
        linkLabel="View all"
        url="/events"
        showLink={false}
      />

      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 1,
          }}
          className="w-full relative"
        >
          <CarouselContent className="relative">
            {events.map((event) => (
              <CarouselItem key={event.id} className="md:basis-2/2 lg:basis-1/6 basis-1/6">
                <EventCard event={event} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNavigation />
        </Carousel>
      </div>
    </div>
  );
};

export default EventsSection;
