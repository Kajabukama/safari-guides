"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Globe, HelpCircle, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function GuestSheetMenu() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="size-6" />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md p-5 rounded-l-md border-none">
        <SheetHeader className="text-left mb-8">
          <SheetTitle className="text-3xl font-bold">Menu</SheetTitle>
        </SheetHeader>

        <div className="space-y-3">
          <Link href="/auth/signin" onClick={handleLinkClick}>
            <Button variant="outline" className="w-full" size="lg">
              Log in
            </Button>
          </Link>
          <Link href="/auth/signup" onClick={handleLinkClick}>
            <Button className="w-full" size="lg">
              Become a Guide
            </Button>
          </Link>
        </div>

        <Separator className="my-6" />

        <nav className="space-y-1">
          <Link
            href="/help"
            onClick={handleLinkClick}
            className="flex items-center gap-4 px-4 py-3 hover:bg-muted rounded-lg transition-colors"
          >
            <HelpCircle className="size-6" />
            <span className="text-base font-normal">Help Center</span>
          </Link>
          <Link
            href="/settings/language"
            onClick={handleLinkClick}
            className="flex items-center gap-4 px-4 py-3 hover:bg-muted rounded-lg transition-colors"
          >
            <Globe className="size-6" />
            <span className="text-base font-normal">Languages & currency</span>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
