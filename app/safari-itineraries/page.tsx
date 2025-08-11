"use client";
import React, { useState, useMemo } from "react";
import ItinerariesHeroSection from "@/components/itineraries/ItinerariesHeroSection";
import ItinerariesListSection from "@/components/itineraries/ItinerariesListSection";
import ItinerariesTipsSection from "@/components/itineraries/ItinerariesTipsSection";
import ItinerariesCTASection from "@/components/itineraries/ItinerariesCTASection";
import { itineraries } from "@/mock/itineraries";

const SafariItineraries = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedGroupSize, setSelectedGroupSize] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  // Filter itineraries based on search and filters
  const filteredItineraries = useMemo(() => {
    let filtered = itineraries.filter((itinerary) => {
      const matchesSearch =
        itinerary.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        itinerary.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (itinerary.description &&
          itinerary.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesDuration = selectedDuration === "" || itinerary.duration === selectedDuration;
      const matchesLocation = selectedLocation === "" || itinerary.location === selectedLocation;
      const matchesGroupSize =
        selectedGroupSize === "" ||
        (selectedGroupSize === "1-2" && itinerary.maxGuests <= 2) ||
        (selectedGroupSize === "3-5" && itinerary.maxGuests >= 3 && itinerary.maxGuests <= 5) ||
        (selectedGroupSize === "6-10" && itinerary.maxGuests >= 6 && itinerary.maxGuests <= 10) ||
        (selectedGroupSize === "10+" && itinerary.maxGuests > 10);

      return matchesSearch && matchesDuration && matchesLocation && matchesGroupSize;
    });

    // Sort itineraries
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return b.reviewCount - a.reviewCount;
        case "price-low":
          return (
            parseInt(a.price.replace("$", "").replace(",", "")) -
            parseInt(b.price.replace("$", "").replace(",", ""))
          );
        case "price-high":
          return (
            parseInt(b.price.replace("$", "").replace(",", "")) -
            parseInt(a.price.replace("$", "").replace(",", ""))
          );
        case "duration":
          return parseInt(a.duration.split(" ")[0]) - parseInt(b.duration.split(" ")[0]);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedDuration, selectedLocation, selectedGroupSize, sortBy]);

  const handleSearch = () => {
    // Search functionality is handled by the filter
  };

  const handleFilters = () => {
    // Filter functionality is handled by the hero section
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedDuration("");
    setSelectedLocation("");
    setSelectedGroupSize("");
  };

  return (
    <div className="min-h-screen">
      <ItinerariesHeroSection
        searchTerm={searchTerm}
        selectedLocation={selectedLocation}
        selectedDuration={selectedDuration}
        selectedGroupSize={selectedGroupSize}
        onSearchChange={setSearchTerm}
        onLocationChange={setSelectedLocation}
        onDurationChange={setSelectedDuration}
        onGroupSizeChange={setSelectedGroupSize}
        onSearch={handleSearch}
        onFilters={handleFilters}
      />

      <ItinerariesListSection
        itineraries={filteredItineraries}
        onSortChange={setSortBy}
        onClearFilters={handleClearFilters}
      />

      <div className="container mx-auto px-4">
        <ItinerariesTipsSection />
      </div>

      <ItinerariesCTASection />
    </div>
  );
};

export default SafariItineraries;
