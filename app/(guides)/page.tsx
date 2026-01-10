import DestinationsSection from "@/components/destinations/DestinationsSection";
import EventsSection from "@/components/events/EventsSection";
import GuidesSection from "@/components/guides/GuidesSection";
import { PageHero } from "@/components/hero/page-hero";
import ItinerariesSection from "@/components/itineraries/ItinerariesSection";
import ServicesSection from "@/components/services/ServicesSection";
import { destinations, featuredItineraries, featuredServices } from "@/mock/data";
import { events } from "@/mock/events";

export default function Home() {
  return (
    <div className="mb-20">
      <PageHero
        images={[
          "/images/img30.jpg",
          "/images/img16.jpg",
          "/images/img31.jpg",
          "/images/img14.jpg",
          "/images/img32.jpg",
        ]}
        title="Discover Authentic Africa with Local Guides"
        description="Connect with experienced local guides who will show you the authentic beauty, wildlife, and culture of Africa"
        height="70vh"
      />
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
