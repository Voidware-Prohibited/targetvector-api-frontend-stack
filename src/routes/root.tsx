import { Outlet } from 'react-router';
import { AppSidebar } from '../components/app-sidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Breadcrumbs } from './breadcrums';
// import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { LanguageSelect } from '@/components/language-select';
import { ModeToggle } from '@/components/theme-toggle';
import { UserPanel } from '@/components/user-panel';
import {NotificationsPanel} from "@/components/notifications-panel.tsx";
import {MessagesPanel} from "@/components/messages-panel.tsx";

export function Root() {
  return (
    <>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
          <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mx-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumbs />
            <div className="ml-auto flex items-center gap-2">
              <LanguageSelect />
              <ModeToggle />
              <MessagesPanel />
              <NotificationsPanel />
              <UserPanel />
            </div>
          </div>
        </header>
        <div className="size-full">
          <Outlet />
        </div>
      </SidebarInset>
    </>
  );
}
