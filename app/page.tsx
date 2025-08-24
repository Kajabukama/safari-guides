import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ItinerariesSection from "@/components/itineraries/ItinerariesSection";
import ServicesSection from "@/components/services/ServicesSection";
import { featuredItineraries, featuredServices, destinations } from "@/mock/data";
import EventsSection from "@/components/events/EventsSection";
import DestinationsSection from "@/components/destinations/DestinationsSection";
import GuidesSection from "@/components/guides/GuidesSection";
import { events } from "@/mock/events";

export default function Home() {
  return (
    <div className="mb-20">
      <HeroSection />
      <div className="px-5 space-y-10">
        <GuidesSection />
        <ItinerariesSection itineraries={featuredItineraries} />
        <EventsSection events={events} />
        <DestinationsSection destinations={destinations} />
        <ServicesSection services={featuredServices} />
      </div>
    </div>
  );
}
