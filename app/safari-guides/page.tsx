"use client";
import React, { useState, useMemo } from "react";
import GuidesHeroSection from "@/components/guides/GuidesHeroSection";
import GuidesFilterSidebar from "@/components/guides/GuidesFilterSidebar";
import GuidesListSection from "@/components/guides/GuidesListSection";
import { guides } from "@/mock/guides-list";

const Guides = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([50, 200]);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedTourType, setSelectedTourType] = useState("");
  const [selectedGroupSize, setSelectedGroupSize] = useState("");
  const [availableOnly, setAvailableOnly] = useState(false);
  const [sortBy, setSortBy] = useState("rating");

  // Filter guides based on search and filters
  const filteredGuides = useMemo(() => {
    let filtered = guides.filter((guide) => {
      const matchesSearch =
        guide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        guide.specialties.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesLocation = selectedLocation === "" || guide.location === selectedLocation;
      const matchesSpecialty =
        selectedSpecialty === "" ||
        guide.specialties.some((s) => s.toLowerCase() === selectedSpecialty.toLowerCase());
      const matchesPrice =
        parseInt(guide.price.replace("$", "")) >= priceRange[0] &&
        parseInt(guide.price.replace("$", "")) <= priceRange[1];
      const matchesVerified = !verifiedOnly || guide.verified;

      return (
        matchesSearch && matchesLocation && matchesSpecialty && matchesPrice && matchesVerified
      );
    });

    // Sort guides
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "price-low":
          return parseInt(a.price.replace("$", "")) - parseInt(b.price.replace("$", ""));
        case "price-high":
          return parseInt(b.price.replace("$", "")) - parseInt(a.price.replace("$", ""));
        default:
          return 0;
      }
    });

    return filtered;
  }, [
    searchTerm,
    selectedLocation,
    selectedSpecialty,
    priceRange,
    verifiedOnly,
    selectedExperience,
    selectedLanguage,
    selectedTourType,
    selectedGroupSize,
    availableOnly,
    sortBy,
  ]);

  const handleSearch = () => {
    // Search functionality is handled by the filter
  };

  const handleFilters = () => {
    // Filter functionality is handled by the sidebar
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedLocation("");
    setSelectedSpecialty("");
    setPriceRange([50, 200]);
    setVerifiedOnly(false);
    setSelectedExperience("");
    setSelectedLanguage("");
    setSelectedTourType("");
    setSelectedGroupSize("");
    setAvailableOnly(false);
  };

  return (
    <div className="min-h-screen relative">
      <GuidesHeroSection
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onSearch={handleSearch}
        onFilters={handleFilters}
      />

      <div className="container mx-auto px-4 py-12 relative">
        <div className="flex flex-col lg:flex-row gap-8">
          <GuidesFilterSidebar
            guides={guides}
            selectedLocation={selectedLocation}
            selectedSpecialty={selectedSpecialty}
            priceRange={priceRange}
            verifiedOnly={verifiedOnly}
            selectedExperience={selectedExperience}
            selectedLanguage={selectedLanguage}
            selectedTourType={selectedTourType}
            selectedGroupSize={selectedGroupSize}
            availableOnly={availableOnly}
            onLocationChange={setSelectedLocation}
            onSpecialtyChange={setSelectedSpecialty}
            onPriceRangeChange={setPriceRange}
            onVerifiedChange={setVerifiedOnly}
            onExperienceChange={setSelectedExperience}
            onLanguageChange={setSelectedLanguage}
            onTourTypeChange={setSelectedTourType}
            onGroupSizeChange={setSelectedGroupSize}
            onAvailableChange={setAvailableOnly}
            onApplyFilters={handleSearch}
          />

          <GuidesListSection
            colSize={4}
            guides={filteredGuides}
            onSortChange={setSortBy}
            onClearFilters={handleClearFilters}
          />
        </div>
      </div>
    </div>
  );
};

export default Guides;
