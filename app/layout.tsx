import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";
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
            <div className="min-h-screen flex flex-col">{children}</div>
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
