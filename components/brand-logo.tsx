import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  width?: number;
  height?: number;
  showLabel?: boolean;
  size?: "small" | "medium" | "large";
}

export const BrandLogo = ({
  width = 80,
  height = 80,
  showLabel = true,
  size = "small",
}: BrandLogoProps) => {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 self-center font-black text-3xl ", {
        "text-lg": size === "small",
        "text-2xl": size === "medium",
        "text-3xl": size === "large",
      })}
    >
      <div className="flex items-center justify-center rounded-md">
        <Image width={width} height={height} src={"/logo.svg"} alt="Guides.africa" priority />
      </div>
      {showLabel && "guides"}
    </Link>
  );
};
