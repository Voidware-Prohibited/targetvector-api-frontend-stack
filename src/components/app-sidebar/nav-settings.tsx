import { Settings } from 'lucide-react';
import { NavLink } from 'react-router';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '../ui/sidebar';

export function NavSettings() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Settings</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem key="preferences">
          <NavLink to="/settings/preferences">
            {({ isActive }) => (
              <SidebarMenuButton isActive={isActive} asChild>
                <span>
                  <Settings />
                  Settings
                </span>
              </SidebarMenuButton>
            )}
          </NavLink>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
