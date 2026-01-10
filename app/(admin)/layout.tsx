import { SiteHeader } from "@/components/sidebar/app-header";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { getSession } from "@/lib/auth-server";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 78)",
          "--header-height": "calc(var(--spacing) * 17)",
        } as React.CSSProperties
      }
    >
      <AppSidebar user={session?.user} />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-col justify-center items-center h-full">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
