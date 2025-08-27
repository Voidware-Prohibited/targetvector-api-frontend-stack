import * as React from 'react';

import { NavSchedule } from '@/components/app-sidebar/nav-schedule';
import { ServiceSwitcher } from '@/components/app-sidebar/service-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { NavGeneral } from './nav-general';
import { NavSettings } from './nav-settings';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <ServiceSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavGeneral />
        <NavSchedule />
      </SidebarContent>
      <SidebarFooter>
        <NavSettings />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
