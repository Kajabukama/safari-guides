import { Logout } from "@/components/logout";
import { ModeSwitcher } from "@/components/mode-switcher";
import { OrganizationSwitcher } from "@/components/organization-switcher";
import { getOrganizations } from "@/server/organizations";

export async function DashboardHeader() {
  const organizations = await getOrganizations();

  return (
    <header className="absolute top-0 right-0 flex justify-between items-center p-4 w-full">
      <OrganizationSwitcher organizations={organizations} />
      <div className="flex items-center gap-2">
        <Logout />
        <ModeSwitcher />
      </div>
    </header>
  );
}
