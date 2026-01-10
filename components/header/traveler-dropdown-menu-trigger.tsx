"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";
import {
  Gift,
  Globe,
  Heart,
  HelpCircle,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  UserRound,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface TravelerDropdownMenuTriggerProps {
  user: {
    name: string;
    email: string;
  };
}

export function TravelerDropdownMenuTrigger({ user }: TravelerDropdownMenuTriggerProps) {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="size-6" />
          <span className="sr-only">Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 shadow-2xl border-none" align="end">
        {/* User Info & Mode Switcher */}
        <div className="px-4 py-3 flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-semibold text-md">{user.name}</span>
            <span className="text-sm text-muted-foreground">{user.email}</span>
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Main Menu Items */}
        <DropdownMenuItem asChild>
          <Link href="/wishlists" className="flex items-center gap-3 py-3">
            <Heart className="size-5" />
            <span>Wishlists</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/trips" className="flex items-center gap-3 py-3">
            <Home className="size-5" />
            <span>Trips</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/messages" className="flex items-center gap-3 py-3">
            <MessageSquare className="size-5" />
            <span>Messages</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/profile" className="flex items-center gap-3 py-3">
            <UserRound className="size-5" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Settings */}
        <DropdownMenuItem asChild>
          <Link href="/settings" className="flex items-center gap-3 py-3">
            <Settings className="size-5" />
            <span>Account settings</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/settings/language" className="flex items-center gap-3 py-3">
            <Globe className="size-5" />
            <span>Languages & currency</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/help" className="flex items-center gap-3 py-3">
            <HelpCircle className="size-5" />
            <span>Help Center</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Become a host section */}
        <div className="px-5 py-3">
          <p className="text-base font-semibold">Become a Guide</p>
          <p className="text-xs text-muted-foreground">
            It's easy to start guiding and earn extra income.
          </p>
        </div>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="/refer-guide" className="flex items-center gap-3 py-2">
            <UsersRound className="size-5" />
            <span>Refer a Guide</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/find-cohost" className="flex items-center gap-3 py-2">
            <UsersRound className="size-5" />
            <span>Find a co-host</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/gift-shop" className="flex items-center gap-3 py-2">
            <Gift className="size-5" />
            <span>Gift shop</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handleSignOut} className="flex items-center gap-3 py-3">
          <LogOut className="size-5" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
