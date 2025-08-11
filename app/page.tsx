import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ItinerariesSection from "@/components/itineraries/ItinerariesSection";
import ServicesSection from "@/components/services/ServicesSection";
import { featuredItineraries, upcomingEvents, featuredServices, destinations } from "@/mock/data";
import { Service } from "@/interfaces";
import EventsSection from "@/components/events/EventsSection";
import DestinationsSection from "@/components/destinations/DestinationsSection";
import GuidesSection from "@/components/guides/GuidesSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <GuidesSection />
      <ItinerariesSection itineraries={featuredItineraries} />
      <EventsSection events={upcomingEvents} />
      <DestinationsSection destinations={destinations} />
      <ServicesSection services={featuredServices} />
    </div>
  );
}
