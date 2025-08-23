import React from "react";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, TwitterIcon, GlobeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UniqueGuidesTab from "@/components/footer/UniqueGuidesTab";
import UniqueItinerariesTab from "@/components/footer/UniqueItinerariesTab";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Safety information", href: "/safety" },
    { name: "Cancellation options", href: "/cancellation" },
    { name: "Our COVID-19 Response", href: "/covid" },
    { name: "Report a concern", href: "/report" },
  ];

  const communityLinks = [
    { name: "Disaster relief", href: "/disaster-relief" },
    { name: "Support Africa", href: "/support-africa" },
    { name: "Combating discrimination", href: "/discrimination" },
    { name: "Build Africa", href: "/build-africa" },
    { name: "Educate Africa", href: "/educate-africa" },
  ];

  const hostingLinks = [
    { name: "Start guiding", href: "/start-guiding" },
    { name: "Guide resources", href: "/guide-resources" },
    { name: "Community forum", href: "/community" },
    { name: "Responsible guiding", href: "/responsible-guiding" },
  ];

  const aboutLinks = [
    { name: "Newsroom", href: "/newsroom" },
    { name: "New features", href: "/new-features" },
    { name: "Careers", href: "/careers" },
    { name: "Investors", href: "/investors" },
  ];

  const popularDestinations = [
    { name: "Arusha", href: "/destinations/arusha" },
    { name: "Zanzibar", href: "/destinations/zanzibar" },
    { name: "Serengeti", href: "/destinations/serengeti" },
    { name: "Kilimanjaro", href: "/destinations/kilimanjaro" },
    { name: "Ngorongoro", href: "/destinations/ngorongoro" },
    { name: "Tarangire", href: "/destinations/tarangire" },
  ];

  const experiences = [
    { name: "Safari Tours", href: "/experiences/safari" },
    { name: "Hiking Expeditions", href: "/experiences/hiking" },
    { name: "Beach Getaways", href: "/experiences/beach" },
    { name: "Cultural Tours", href: "/experiences/cultural" },
    { name: "Ngorgororo Crater", href: "/experiences/ngorgororo-crater" },
    { name: "Serengeti Migration", href: "/experiences/serengeti-migration" },
  ];

  const countries = [
    { name: "Tanzania", href: "/destinations/tanzania" },
    { name: "Zambia", href: "/destinations/zambia" },
    { name: "Zimbabwe", href: "/destinations/zimbabwe" },
    { name: "Uganda", href: "/destinations/uganda" },
    { name: "Kenya", href: "/destinations/kenya" },
    { name: "Ethiopia", href: "/destinations/ethiopia" },
  ];

  return (
    <footer className="bg-accent">
      <div className="container mx-auto px-4 py-12">
        {/* Inspiration for Travelers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Guides.Africa choice for Travelers</h2>
          <Tabs defaultValue="guides" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="guides">Unique Guides</TabsTrigger>
              <TabsTrigger value="itineraries">Safari Itineraries</TabsTrigger>
            </TabsList>

            <TabsContent value="guides">
              <UniqueGuidesTab />
            </TabsContent>

            <TabsContent value="itineraries">
              <UniqueItinerariesTab />
            </TabsContent>
          </Tabs>
        </div>

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase">Community</h3>
            <ul className="space-y-3">
              {communityLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase">Guiding</h3>
            <ul className="space-y-3">
              {hostingLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase">About</h3>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t my-8"></div>

        {/* Middle Section */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex flex-col lg:flex-row w-full gap-x-10 lg:gap-x-20">
            {/* Popular Destinations */}
            <div>
              <h3 className="text-sm font-semibold mb-4 uppercase">Popular Destinations</h3>
              <div className="grid grid-cols-2 gap-2">
                {popularDestinations.map((destination) => (
                  <Link key={destination.name} href={destination.href} className="text-sm">
                    {destination.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Experiences */}
            <div>
              <h3 className="text-sm font-semibold mb-4 uppercase">Experiences</h3>
              <div className="grid grid-cols-2 gap-2">
                {experiences.map((exp) => (
                  <Link key={exp.name} href={exp.href} className="text-sm">
                    {exp.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* countries */}
            <div>
              <h3 className="text-sm font-semibold mb-4 uppercase">Countries</h3>
              <div className="grid grid-cols-2 gap-2">
                {countries.map((country) => (
                  <Link key={country.name} href={country.href} className="text-sm">
                    {country.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-2">
            <div className="flex flex-col space-y-6">
              <div>
                <h3 className="text-sm font-semibold mb-4 uppercase">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <FacebookIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <TwitterIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <InstagramIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2 text-sm font-medium"
                >
                  <GlobeIcon className="h-4 w-4" />
                  <span>English (US)</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-sm">© {currentYear} SafariGuides, Inc.</span>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-sm">
                  Privacy
                </Link>
                <Link href="/terms" className="text-sm">
                  Terms
                </Link>
                <Link href="/sitemap" className="text-sm">
                  Sitemap
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <GlobeIcon className="h-4 w-4 mr-2" />
                <span className="text-sm">Safari Guides</span>
              </div>
              <div className="text-sm">
                <span className="font-medium">TZS</span> Tanzanian Shilling
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
