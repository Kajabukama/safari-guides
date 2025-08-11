import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { BrandFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Africa Guides",
  description: "Africa Guides",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider>
              <Header />
              <div className={cn("min-h-screen", BrandFont.className)}>{children}</div>
              <Footer />
            </AuthProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
