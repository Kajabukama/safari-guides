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
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY!}
        height={400}
        width="100%"
        mode="place"
        zoom="7"
        q={`${latitude},${longitude}`}
      />
    </div>
  );
}
