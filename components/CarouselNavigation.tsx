"use client";
import React from "react";
import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

function CarouselNavigation() {
  return (
    <div className="absolute -top-8 right-16 transform">
      <CarouselNext className="" />
      <CarouselPrevious className="" />
    </div>
  );
}

export default CarouselNavigation;
