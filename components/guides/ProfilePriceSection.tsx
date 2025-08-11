"use client";
import React from "react";

function ProfilePriceSection({ price }: { price: string }) {
  return (
    <div>
      <div className="text-muted-foreground mb-2">Starting from</div>
      <div className="text-2xl font-bold text-primary mb-3">
        {price} <span className="text-muted-foreground text-lg font-normal">/ day</span>
      </div>
    </div>
  );
}

export default ProfilePriceSection;
