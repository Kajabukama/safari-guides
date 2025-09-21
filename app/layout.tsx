import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";
export const metadata: Metadata = {
  title: "Guides.Africa",
  description: "Authentic African safari guides",
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
            {children}
            <Analytics />
            <Toaster
              position="top-center"
              className="rounded-full"
              expand={true}
              duration={5000}
              richColors
              closeButton={false}
            />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
