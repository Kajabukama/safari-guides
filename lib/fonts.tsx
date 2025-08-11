import localFont from "next/font/local";

const BrandFont = localFont({
  src: [
    { path: "../public/fonts/Cereal/CerealBook.otf", weight: "400" },
    { path: "../public/fonts/Cereal/CerealLight.otf", weight: "300" },
    { path: "../public/fonts/Cereal/CerealExtraBold.otf", weight: "800" },
    { path: "../public/fonts/Cereal/CerealMedium.otf", weight: "500" },
    { path: "../public/fonts/Cereal/CerealBold.otf", weight: "600" },
    { path: "../public/fonts/Cereal/CerealBlack.otf", weight: "900" },
  ],
  variable: "--font-brand",
});

export { BrandFont };
