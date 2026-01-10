import { BrandLogo } from "@/components/brand-logo";
import { GuestSheetMenu } from "@/components/header/guest-sheet-menu";
import { HeaderMenuWrapper } from "@/components/header/header-menu-wrapper";
import NavLinkItem from "@/components/header/navlink";
import { SearchDialog } from "@/components/search/search-dialog";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/auth-server";
import { Globe, SearchIcon, ShoppingBagIcon } from "lucide-react";
import Link from "next/link";

const Header = async () => {
  const session = await getSession();

  return (
    <header className="bg-background sticky top-0 z-50 border-none shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <BrandLogo showLabel width={35} height={35} size="medium" />

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
          <SearchDialog>
            <Button variant="outline" size="icon">
              <SearchIcon className="size-5" />
              <span className="sr-only">Search</span>
            </Button>
          </SearchDialog>
          <Button variant="ghost" size="icon">
            <Globe className="size-5" />
            <span className="sr-only">Language</span>
          </Button>

          <Link href="/gift-shop/cart" className="relative">
            <Button variant="outline" size="icon">
              <ShoppingBagIcon size={20} />
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </Button>
          </Link>

          {!session ? (
            <>
              <Button size="lg" variant="outline" asChild>
                <Link href="/auth/signin">Log in</Link>
              </Button>
              <Button size="lg" asChild>
                <Link href="/auth/signup">Become a Guide</Link>
              </Button>
            </>
          ) : (
            <HeaderMenuWrapper user={session.user} />
          )}
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center space-x-2">
          {!session ? <GuestSheetMenu /> : <HeaderMenuWrapper user={session.user} />}
        </div>
      </div>
    </header>
  );
};
export default Header;
