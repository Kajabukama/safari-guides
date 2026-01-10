"use client";

import { GuideSheetMenu } from "@/components/header/guide-sheet-menu";
import { TravelerDropdownMenuTrigger } from "@/components/header/traveler-dropdown-menu-trigger";
import { UserMenu } from "@/components/header/user-menu";

interface HeaderMenuWrapperProps {
  user: {
    id: string;
    name: string;
    email: string;
    image?: string | null;
    userType?: string;
  };
}

export function HeaderMenuWrapper({ user }: HeaderMenuWrapperProps) {
  return (
    <>
      <UserMenu user={user} />
      {user.userType === "traveler" ? (
        <TravelerDropdownMenuTrigger user={user} />
      ) : (
        <GuideSheetMenu />
      )}
    </>
  );
}
