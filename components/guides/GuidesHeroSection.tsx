"use client";
import React from "react";
const GuidesHeroSection = () => {
  return (
    <div
      className="py-16 h-[35vh]"
      style={{
        backgroundImage: `url('/images/img12.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
    </div>
  );
};

export default GuidesHeroSection;
