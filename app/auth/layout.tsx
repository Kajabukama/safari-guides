import { ModeSwitcher } from "@/components/mode-switcher";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-muted dark:bg-background relative">
      {children}
      <div className="absolute top-5 right-5">
        <ModeSwitcher />
      </div>
    </div>
  );
}
