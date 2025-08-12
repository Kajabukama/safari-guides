"use client";
import React from "react";
import GuideCard from "@/components/guides/GuideCard";
import { guides } from "@/mock/guides-list";

const GuideList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {guides.slice(0, 10).map((guide) => (
        <GuideCard key={guide.id} guide={guide} />
      ))}
    </div>
  );
};
export default GuideList;
