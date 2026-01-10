"use client";

import {
  BookOpen,
  Building2,
  Calendar,
  Command,
  DollarSign,
  FileText,
  LayoutDashboard,
  LifeBuoy,
  Map,
  MapPin,
  Megaphone,
  MessageSquare,
  Settings,
  ShoppingBag,
  UserRoundCog,
  UsersRound,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavProjects } from "@/components/sidebar/nav-projects";
import { NavSecondary } from "@/components/sidebar/nav-secondary";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/main",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/main/overview",
        },
        {
          title: "Analytics",
          url: "/main/analytics",
        },
        {
          title: "Reports",
          url: "/main/reports",
        },
      ],
    },
    {
      title: "Guides",
      url: "/main/guides",
      icon: UsersRound,
      items: [
        {
          title: "All Guides",
          url: "/main/guides",
        },
        {
          title: "Pending Approval",
          url: "/main/guides/pending",
        },
        {
          title: "Active Guides",
          url: "/main/guides/active",
        },
        {
          title: "Suspended",
          url: "/main/guides/suspended",
        },
      ],
    },
    {
      title: "Itineraries",
      url: "/main/itineraries",
      icon: Map,
      items: [
        {
          title: "All Itineraries",
          url: "/main/itineraries",
        },
        {
          title: "Featured",
          url: "/main/itineraries/featured",
        },
        {
          title: "Pending Review",
          url: "/main/itineraries/pending",
        },
        {
          title: "Categories",
          url: "/main/itineraries/categories",
        },
      ],
    },
    {
      title: "Bookings",
      url: "/main/bookings",
      icon: Calendar,
      items: [
        {
          title: "All Bookings",
          url: "/main/bookings",
        },
        {
          title: "Upcoming",
          url: "/main/bookings/upcoming",
        },
        {
          title: "Completed",
          url: "/main/bookings/completed",
        },
        {
          title: "Cancelled",
          url: "/main/bookings/cancelled",
        },
      ],
    },
    {
      title: "Organizations",
      url: "/main/organizations",
      icon: Building2,
      items: [
        {
          title: "All Organizations",
          url: "/main/organizations",
        },
        {
          title: "Create New",
          url: "/main/organizations/create",
        },
        {
          title: "Manage Members",
          url: "/main/organizations/members",
        },
      ],
    },
    {
      title: "Content",
      url: "/main/content",
      icon: FileText,
      items: [
        {
          title: "Photo Gallery",
          url: "/main/content/gallery",
        },
        {
          title: "Blog Posts",
          url: "/main/content/blog",
        },
        {
          title: "Reviews",
          url: "/main/content/reviews",
        },
        {
          title: "Testimonials",
          url: "/main/content/testimonials",
        },
      ],
    },
    {
      title: "Gift Shop",
      url: "/main/shop",
      icon: ShoppingBag,
      items: [
        {
          title: "Products",
          url: "/main/shop/products",
        },
        {
          title: "Orders",
          url: "/main/shop/orders",
        },
        {
          title: "Inventory",
          url: "/main/shop/inventory",
        },
        {
          title: "Categories",
          url: "/main/shop/categories",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Documentation",
      url: "/main/docs",
      icon: BookOpen,
    },
    {
      title: "Settings",
      url: "/main/settings",
      icon: Settings,
    },
    {
      title: "Support",
      url: "/main/support",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/main/feedback",
      icon: MessageSquare,
    },
  ],
  projects: [
    {
      name: "Safari Destinations",
      url: "/main/destinations",
      icon: MapPin,
    },
    {
      name: "User Management",
      url: "/main/users",
      icon: UserRoundCog,
    },
    {
      name: "Marketing Campaigns",
      url: "/main/marketing",
      icon: Megaphone,
    },
    {
      name: "Financial Reports",
      url: "/main/finance",
      icon: DollarSign,
    },
  ],
};

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  user?: {
    id: string;
    name: string;
    email: string;
    image?: string | null;
  };
}

export function AppSidebar({ user, ...props }: AppSidebarProps) {
  return (
    <Sidebar
      variant="inset"
      style={{ backgroundColor: "var(--sidebar)" } as React.CSSProperties}
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: user?.name || "Guest",
            email: user?.email || "guest@example.com",
            avatar: user?.image || "/images/placeholder.png",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
