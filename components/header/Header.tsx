"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Globe, Menu, ShoppingBagIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavLinkItem from "@/components/header/navlink";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/50 dark:bg-black/50 dark:backdrop-blur-xl backdrop-blur-xl shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-3xl font-black">guides</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLinkItem href="/" label="Home" />
          <NavLinkItem href="/safari-guides" label="Find Guides" />
          <NavLinkItem href="/safari-itineraries" label="Find Itineraries" />
          <NavLinkItem href="/photo-gallery" label="Safari Photos" />
          <NavLinkItem href="/gift-shop" label="Gift Shop" />
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <>
            <Button size="lg" variant="outline" asChild>
              <Link href="/auth/signin">Log in</Link>
            </Button>
            <Button size="lg" asChild>
              <Link href="/auth/signup">Become a Guide</Link>
            </Button>
            <Button variant="ghost" size="icon" className="">
              <Globe className="size-6" />
              <span className="sr-only">Language</span>
            </Button>
            <Button variant="ghost" size="icon" className="">
              <Menu className="size-6" />
              <span className="sr-only">Menu</span>
            </Button>
            <Link href="/gift-shop/cart" className="relative">
              <Button variant="outline" size="icon">
                <ShoppingBagIcon size={20} />
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>
          </>
        </div>
      </div>
    </header>
  );
};
export default Header;
