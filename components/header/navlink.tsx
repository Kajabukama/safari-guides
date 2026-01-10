"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLinkItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        "font-normal text-base transition-colors hover:text-primary",
        isActive ? "text-primary font-medium" : "text-foreground"
      )}
    >
      {label}
    </Link>
  );
}

export default NavLinkItem;
