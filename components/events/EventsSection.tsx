"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowRightIcon } from "lucide-react";
import EventCard from "@/components/events/EventCard";
import Link from "next/link";
import CarouselNavigation from "@/components/CarouselNavigation";
import { Event } from "@/interfaces/event";

const EventsSection = ({ events }: { events: Event[] }) => {
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
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="relative mb-10">
              {events.map((event) => (
                <CarouselItem key={event.id} className="pl-4 md:basis-1/2 lg:basis-1/5">
                  <EventCard event={event} />
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

export default EventsSection;
