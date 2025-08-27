import { ChevronRight, Users } from 'lucide-react';

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { NavLink } from 'react-router';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuBadge,
} from '../ui/sidebar';

export function NavModeration() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Moderation</SidebarGroupLabel>
      <SidebarMenu>
        <Collapsible asChild defaultOpen={true} className="group/collapsible">
            <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip="Planning">
                        <Users />
                        <span>Users</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <SidebarMenuSub>
                        <SidebarMenuSubItem>
                            <NavLink to="/schedule/calendar">
                                {({ isActive }) => (
                                    <SidebarMenuButton isActive={isActive} asChild>
                                        <span>Players</span>
                                    </SidebarMenuButton>
                                )}
                            </NavLink>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <NavLink to="/schedule/calendar">
                                {({ isActive }) => (
                                    <SidebarMenuButton isActive={isActive} asChild>
                                        <span>Roles</span>
                                    </SidebarMenuButton>
                                )}
                            </NavLink>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <NavLink to="/schedule/availability">
                                {({ isActive }) => (
                                    <SidebarMenuButton isActive={isActive} asChild>
                                        <span>Reports</span>
                                    </SidebarMenuButton>
                                )}
                            </NavLink>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <NavLink to="/schedule/pto-requests">
                                {({ isActive }) => (
                                    <SidebarMenuButton isActive={isActive} asChild>
                    <span>
                      Sanctions
                      <SidebarMenuBadge className="bg-secondary text-secondary-foreground">
                        24
                      </SidebarMenuBadge>
                    </span>
                                    </SidebarMenuButton>
                                )}
                            </NavLink>
                        </SidebarMenuSubItem>
                    </SidebarMenuSub>
                </CollapsibleContent>
            </SidebarMenuItem>
        </Collapsible>
        <Collapsible asChild defaultOpen={true} className="group/collapsible">
            <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip="Planning">
                        <Users />
                        <span>Logs</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <SidebarMenuSub>
                        <SidebarMenuSubItem>
                            <NavLink to="/schedule/calendar">
                                {({ isActive }) => (
                                    <SidebarMenuButton isActive={isActive} asChild>
                                        <span>Players</span>
                                    </SidebarMenuButton>
                                )}
                            </NavLink>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <NavLink to="/schedule/calendar">
                                {({ isActive }) => (
                                    <SidebarMenuButton isActive={isActive} asChild>
                                        <span>Roles</span>
                                    </SidebarMenuButton>
                                )}
                            </NavLink>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <NavLink to="/schedule/availability">
                                {({ isActive }) => (
                                    <SidebarMenuButton isActive={isActive} asChild>
                                        <span>Reports</span>
                                    </SidebarMenuButton>
                                )}
                            </NavLink>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <NavLink to="/schedule/pto-requests">
                                {({ isActive }) => (
                                    <SidebarMenuButton isActive={isActive} asChild>
                  <span>
                    Sanctions
                    <SidebarMenuBadge className="bg-secondary text-secondary-foreground">
                      24
                    </SidebarMenuBadge>
                  </span>
                                    </SidebarMenuButton>
                                )}
                            </NavLink>
                        </SidebarMenuSubItem>
                    </SidebarMenuSub>
                </CollapsibleContent>
            </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  );
}
