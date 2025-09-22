import { DashboardHeader } from "@/components/dashboard-header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-muted dark:bg-background">
      <DashboardHeader />
      {children}
    </div>
  );
}
