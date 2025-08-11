"use client";
import React from "react";
import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

function CarouselNavigation() {
  return (
    <div className="absolute bottom-0 right-10 transform">
      <CarouselNext className="" />
      <span className="w-4 h-4 bg-accent text-sm rounded-full px-3 py-1">Navigation</span>
      <CarouselPrevious className="" />
    </div>
  );
}

export default CarouselNavigation;
