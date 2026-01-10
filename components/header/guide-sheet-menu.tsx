"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { authClient } from "@/lib/auth-client";
import {
  Bell,
  BookOpen,
  Globe,
  HelpCircle,
  LogOut,
  Menu,
  Plus,
  Settings,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function GuideSheetMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();
    setOpen(false);
    router.push("/");
    router.refresh();
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  const guideMenuItems = [
    {
      icon: Settings,
      label: "Account settings",
      href: "/settings",
    },
    {
      icon: Globe,
      label: "Languages & currency",
      href: "/settings/language",
    },
    {
      icon: BookOpen,
      label: "Guiding resources",
      href: "/resources",
    },
    {
      icon: Bell,
      label: "Notifications",
      href: "/notifications",
    },
    {
      icon: HelpCircle,
      label: "Get help",
      href: "/help",
    },
    {
      icon: UsersRound,
      label: "Find a co-guide",
      href: "/find-coguide",
    },
    {
      icon: Plus,
      label: "Create a new listing",
      href: "/listings/new",
    },
    {
      icon: UsersRound,
      label: "Refer a guide",
      href: "/refer-guide",
    },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="size-4" />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md p-5 rounded-l-md border-none overflow-y-auto"
      >
        <SheetHeader className="text-left">
          <SheetTitle className="text-xl font-bold">Menu</SheetTitle>
        </SheetHeader>

        <div className="space-y-4">
          {/* Promotional Card */}
          <div className="bg-muted rounded-md p-6 space-y-4">
            <div className="relative h-48 flex items-center justify-center">
              <div className="absolute left-8 top-1/2 -translate-y-1/2 w-44 h-32 -rotate-12 z-30">
                <div className="relative w-full h-full rounded-md overflow-hidden shadow-lg">
                  <Image src="/images/img11.jpg" alt="Guide tips" fill className="object-cover" />
                </div>
              </div>
              <div className="relative w-44 h-32 z-20 -translate-y-8">
                <div className="relative w-full h-full rounded-md overflow-hidden shadow-xl">
                  <Image
                    src="/images/img50.jpg"
                    alt="Safari guide center"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute right-8 top-1/2 -translate-y-1/2 w-44 h-32 rotate-12 z-10">
                <div className="relative w-full h-full rounded-md overflow-hidden shadow-lg">
                  <Image
                    src="/images/img33.jpg"
                    alt="Safari experience"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2 text-center">
              <h3 className="font-semibold text-lg">New to Safari Guides?</h3>
              <p className="text-sm text-muted-foreground">
                Discover tips and best practices shared by top-rated guides.
              </p>
            </div>
            <Button className="w-full" variant="outline">
              Get started
            </Button>
          </div>

          {/* Menu Items */}
          <nav className="space-y-1">
            {guideMenuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="flex items-center gap-4 px-4 py-3 hover:bg-muted rounded-lg transition-colors"
              >
                <item.icon className="size-6" />
                <span className="text-base font-normal">{item.label}</span>
              </Link>
            ))}

            <Separator className="my-4" />

            <button
              onClick={handleSignOut}
              className="flex items-center gap-4 px-4 py-3 hover:bg-muted rounded-lg transition-colors w-full text-left"
            >
              <LogOut className="size-6" />
              <span className="text-base font-normal">Log out</span>
            </button>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
