"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon, Globe, Menu } from "lucide-react";
import { useAuth } from "@/components/providers/AuthProvider";
import { Button } from "@/components/ui/button";
import NavLinkItem from "@/components/header/navlink";
import UserAuthActions from "./UserAuthActions";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, openLoginModal, openSignupModal, logout } = useAuth();

  return (
    <header className="bg-white/50 dark:bg-black/50 dark:backdrop-blur-xl backdrop-blur-xl shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-black">Safari Guides</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLinkItem href="/" label="Home" />
          <NavLinkItem href="/safari-guides" label="Find Guides" />
          <NavLinkItem href="/safari-itineraries" label="Find Experiences" />
          <NavLinkItem href="/photo-gallery" label="Safari Photos" />
          <NavLinkItem href="/gift-shop" label="Gift Shop" />
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <UserAuthActions user={user} logout={logout} />
          ) : (
            <>
              <Button variant="outline" onClick={openLoginModal}>
                Log in
              </Button>
              <Button onClick={openSignupModal}>Become a Guide</Button>
              <Button variant="ghost" size="icon" className="text-stone-700 hover:bg-stone-100">
                <Globe className="size-6" />
                <span className="sr-only">Language</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-stone-700 hover:bg-stone-100">
                <Menu className="size-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <MobileMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isAuthenticated={isAuthenticated}
          user={user}
          openLoginModal={openLoginModal}
          openSignupModal={openSignupModal}
          logout={logout}
        />
      </div>
    </header>
  );
};
export default Header;
