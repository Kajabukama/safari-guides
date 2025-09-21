import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { BrandFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className={cn("min-h-screen", BrandFont.className)}>{children}</div>
      <Footer />
    </div>
  );
}
