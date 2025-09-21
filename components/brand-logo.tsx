import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  width?: number;
  height?: number;
  showLabel?: boolean;
}

export const BrandLogo = ({ width = 80, height = 80, showLabel = true }: BrandLogoProps) => {
  return (
    <Link href="/" className="flex items-center gap-2 self-center font-black text-3xl uppercase">
      <div className="flex items-center justify-center rounded-md">
        <Image width={width} height={height} src={"/logo.svg"} alt="Guides.africa" priority />
      </div>
      {showLabel && "Guides.africa"}
    </Link>
  );
};
