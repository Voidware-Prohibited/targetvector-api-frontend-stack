import { ChevronRight, Puzzle } from 'lucide-react';

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

export function NavGameplay() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Gameplay</SidebarGroupLabel>
      <SidebarMenu>
          <Collapsible asChild defaultOpen={true} className="group/collapsible">
              <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip="Planning">
                          <Puzzle />
                          <span>Game</span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                      <SidebarMenuSub>
                          <SidebarMenuSubItem>
                              <NavLink to="/schedule/calendar">
                                  {({ isActive }) => (
                                      <SidebarMenuButton isActive={isActive} asChild>
                                          <span>Parameters</span>
                                      </SidebarMenuButton>
                                  )}
                              </NavLink>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem>
                              <NavLink to="/schedule/calendar">
                                  {({ isActive }) => (
                                      <SidebarMenuButton isActive={isActive} asChild>
                                          <span>Events</span>
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
                          <SidebarMenuSubItem>
                              <NavLink to="/schedule/pto-requests">
                                  {({ isActive }) => (
                                      <SidebarMenuButton isActive={isActive} asChild>
                                    <span>
                                      Services
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
