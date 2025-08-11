import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { MenuIcon, XIcon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { User } from "@/interfaces";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isAuthenticated: boolean;
  user: User | null;
  openLoginModal: () => void;
  openSignupModal: () => void;
  logout: () => void;
}

function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
  isAuthenticated,
  user,
  openLoginModal,
  openSignupModal,
  logout,
}: MobileMenuProps) {
  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden h-12 w-12">
          {isMenuOpen ? (
            <XIcon className="h-7 w-7 text-stone-900" />
          ) : (
            <MenuIcon className="h-7 w-7 text-stone-900" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[85vw] max-w-sm p-0">
        <SheetHeader className="p-6 pb-4 border-b border-stone-200">
          <SheetTitle className="text-left text-xl font-bold text-stone-900">
            {isAuthenticated ? `Hi, ${user?.name?.split(" ")[0] || "there"}` : "Menu"}
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col py-2 px-1">
          <SheetClose asChild>
            <Link
              href="/"
              className="font-medium text-stone-700 hover:bg-stone-100 hover:text-stone-900 transition-colors py-3 px-5 rounded-lg mx-2 block"
            >
              Home
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/guides"
              className="font-medium text-stone-700 hover:text-stone-900 transition-colors py-2 block"
            >
              Find Guides
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/safari-itineraries"
              className="font-medium text-stone-700 hover:text-stone-900 transition-colors py-2 block"
            >
              Experiences
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/photo-gallery"
              className="font-medium text-stone-700 hover:text-stone-900 transition-colors py-2 block"
            >
              Safari Photos
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/gift-shop"
              className="font-medium text-stone-700 hover:text-stone-900 transition-colors py-2 block"
            >
              Gift Shop
            </Link>
          </SheetClose>

          {isAuthenticated ? (
            <>
              <div className="border-t border-gray-200 my-2"></div>
              <SheetClose asChild>
                <Link
                  href="/profile"
                  className="font-medium text-stone-700 hover:text-stone-900 transition-colors py-2 block"
                >
                  Your Profile
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/bookings"
                  className="font-medium text-stone-700 hover:text-stone-900 transition-colors py-2 block"
                >
                  Your Bookings
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/favorites"
                  className="font-medium text-stone-700 hover:text-stone-900 transition-colors py-2 block"
                >
                  Saved Itineraries
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <button
                  className="w-full text-left font-medium text-stone-700 hover:text-stone-900 transition-colors py-2"
                  onClick={logout}
                >
                  Log out
                </button>
              </SheetClose>
            </>
          ) : (
            <div className="flex flex-col space-y-3 pt-2 px-2 pb-4">
              <SheetClose asChild>
                <Button
                  variant="outline"
                  onClick={openLoginModal}
                  className="w-full h-12 text-base font-medium"
                >
                  Log in
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button onClick={openSignupModal} className="w-full h-12 text-base font-medium">
                  Sign up
                </Button>
              </SheetClose>
            </div>
          )}

          <div className="pt-2 pb-6 px-2 mt-2">
            <SheetClose asChild>
              <button
                className="flex items-center space-x-3 text-stone-700 hover:bg-stone-100 hover:text-stone-900 transition-colors w-full py-3 px-5 rounded-lg"
                onClick={() => {
                  // Handle language change
                  console.log("Change language");
                }}
              >
                <div className="p-1.5 bg-stone-100 rounded-lg">
                  <Globe className="h-5 w-5 text-stone-600" />
                </div>
                <span className="font-medium">Change Language</span>
              </button>
            </SheetClose>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
