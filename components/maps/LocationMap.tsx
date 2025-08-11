"use client";
import { GoogleMapsEmbed } from "@next/third-parties/google";
export default function LocationMap({
  latitude,
  longitude,
}: {
  latitude: string;
  longitude: string;
}) {
  return (
    <div className="rounded-3xl overflow-hidden">
      <GoogleMapsEmbed
        apiKey="AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao"
        height={400}
        width="100%"
        mode="place"
        zoom="7"
        q={`${latitude},${longitude}`}
      />
    </div>
  );
}
