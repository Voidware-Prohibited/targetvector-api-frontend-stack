import * as React from 'react';

import { NavAdmin } from '@/components/app-sidebar/nav-admin.tsx';
import { ServiceSwitcher } from '@/components/app-sidebar/service-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { NavGeneral } from './nav-general';
import { NavGameplay } from './nav-gameplay';
import { NavSettings } from './nav-settings';
import { NavModeration } from './nav-moderation';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <ServiceSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavGeneral />
        <NavGameplay />
        <NavModeration />
        <NavAdmin />
      </SidebarContent>
      <SidebarFooter>
        <NavSettings />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
