"use client";
import React from "react";
import { Guide } from "@/interfaces/guide";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface GuidesFilterSidebarProps {
  guides: Guide[];
  selectedLocation: string;
  selectedSpecialty: string;
  priceRange: [number, number];
  verifiedOnly: boolean;
  selectedExperience: string;
  selectedLanguage: string;
  selectedTourType: string;
  selectedGroupSize: string;
  availableOnly: boolean;
  onLocationChange: (location: string) => void;
  onSpecialtyChange: (specialty: string) => void;
  onPriceRangeChange: (range: [number, number]) => void;
  onVerifiedChange: (verified: boolean) => void;
  onExperienceChange: (experience: string) => void;
  onLanguageChange: (language: string) => void;
  onTourTypeChange: (tourType: string) => void;
  onGroupSizeChange: (groupSize: string) => void;
  onAvailableChange: (available: boolean) => void;
  onApplyFilters: () => void;
}

const GuidesFilterSidebar: React.FC<GuidesFilterSidebarProps> = ({
  guides,
  selectedLocation,
  selectedSpecialty,
  priceRange,
  verifiedOnly,
  selectedExperience,
  selectedLanguage,
  selectedTourType,
  selectedGroupSize,
  availableOnly,
  onLocationChange,
  onSpecialtyChange,
  onPriceRangeChange,
  onVerifiedChange,
  onExperienceChange,
  onLanguageChange,
  onTourTypeChange,
  onGroupSizeChange,
  onAvailableChange,
  onApplyFilters,
}) => {
  // Get unique values for filters
  const locations = [...new Set(guides.map((guide) => guide.location))];
  const specialties = [...new Set(guides.flatMap((guide) => guide.specialties))];

  // Static filter options based on common guide attributes
  const experienceLevels = ["Beginner Friendly", "Intermediate", "Expert", "All Levels"];
  const tourTypes = [
    "Wildlife Safari",
    "Cultural Tour",
    "Photography Tour",
    "Adventure Tour",
    "Luxury Safari",
    "Budget Safari",
  ];
  const groupSizes = [
    "Solo Traveler",
    "Couple",
    "Small Group (3-6)",
    "Large Group (7+)",
    "Family Friendly",
  ];
  const languages = ["English", "Swahili", "French", "German", "Spanish", "Italian"];

  return (
    <div className="lg:w-1/4">
      <Card className="sticky top-24 shadow-none border">
        <CardHeader>
          <CardTitle>Filter Guides</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
          <div>
            <Select
              value={selectedLocation || undefined}
              onValueChange={(value) => onLocationChange(value || "")}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location, index) => (
                  <SelectItem key={index} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select
              value={selectedSpecialty || undefined}
              onValueChange={(value) => onSpecialtyChange(value || "")}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Specialties" />
              </SelectTrigger>
              <SelectContent>
                {specialties.map((specialty, index) => (
                  <SelectItem key={index} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="space-y-2">
              <input
                type="range"
                min="50"
                max="200"
                value={priceRange[1]}
                onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>

          <div>
            <Select
              value={selectedExperience || undefined}
              onValueChange={(value) => onExperienceChange(value || "")}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Experience Levels" />
              </SelectTrigger>
              <SelectContent>
                {experienceLevels.map((level, index) => (
                  <SelectItem key={index} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select
              value={selectedLanguage || undefined}
              onValueChange={(value) => onLanguageChange(value || "")}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Languages" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((language, index) => (
                  <SelectItem key={index} value={language}>
                    {language}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select
              value={selectedTourType || undefined}
              onValueChange={(value) => onTourTypeChange(value || "")}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Tour Types" />
              </SelectTrigger>
              <SelectContent>
                {tourTypes.map((type, index) => (
                  <SelectItem key={index} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select
              value={selectedGroupSize || undefined}
              onValueChange={(value) => onGroupSizeChange(value || "")}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Group Sizes" />
              </SelectTrigger>
              <SelectContent>
                {groupSizes.map((size, index) => (
                  <SelectItem key={index} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3 border-t pt-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="verified" checked={verifiedOnly} onCheckedChange={onVerifiedChange} />
              <Label htmlFor="verified" className="text-sm font-medium">
                Verified guides only
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="available"
                checked={availableOnly}
                onCheckedChange={onAvailableChange}
              />
              <Label htmlFor="available" className="text-sm font-medium">
                Available this month
              </Label>
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <Button onClick={onApplyFilters} className="flex-1">
              Apply Filters
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                onLocationChange("");
                onSpecialtyChange("");
                onExperienceChange("");
                onLanguageChange("");
                onTourTypeChange("");
                onGroupSizeChange("");
                onPriceRangeChange([50, 200]);
                onVerifiedChange(false);
                onAvailableChange(false);
              }}
              className="px-3"
            >
              Clear
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GuidesFilterSidebar;
