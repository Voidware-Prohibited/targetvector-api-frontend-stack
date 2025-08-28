import { ChevronRight, Calendar } from 'lucide-react';

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { LayoutDashboard, PersonStanding, ListTodo, Users } from 'lucide-react';
import { NavLink } from 'react-router';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuBadge,
} from '../ui/sidebar';

export function NavGeneral() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>General</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem key="overview">
            <NavLink to="/overview">
                {({ isActive }) => (
                    <SidebarMenuButton isActive={isActive} asChild>
              <span>
                <LayoutDashboard />
                Overview
              </span>
                    </SidebarMenuButton>
                )}
            </NavLink>
        </SidebarMenuItem>
        <SidebarMenuItem key="dashboard">
          <NavLink to="/">
            {({ isActive }) => (
              <SidebarMenuButton isActive={isActive} asChild>
                <span>
                  <LayoutDashboard />
                  Dashboard
                </span>
              </SidebarMenuButton>
            )}
          </NavLink>
        </SidebarMenuItem>
        <Collapsible asChild defaultOpen={true} className="group/collapsible">
            <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip="Planning">
                        <Calendar />
                        <span>Status</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <SidebarMenuSub>
                        <SidebarMenuSubItem>
                            <NavLink to="/status/cloud">
                                {({ isActive }) => (
                                    <SidebarMenuButton isActive={isActive} asChild>
                                        <span>Cloud</span>
                                    </SidebarMenuButton>
                                )}
                            </NavLink>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <NavLink to="/status/activity">
                                {({ isActive }) => (
                                    <SidebarMenuButton isActive={isActive} asChild>
                                        <span>Activity</span>
                                    </SidebarMenuButton>
                                )}
                            </NavLink>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <NavLink to="/status/performance">
                                {({ isActive }) => (
                                    <SidebarMenuButton isActive={isActive} asChild>
                                        <span>Performance</span>
                                    </SidebarMenuButton>
                                )}
                            </NavLink>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <NavLink to="/status/health">
                                {({ isActive }) => (
                                    <SidebarMenuButton isActive={isActive} asChild>
                      <span>
                        Health
                        <SidebarMenuBadge className="bg-secondary text-secondary-foreground">
                          24
                        </SidebarMenuBadge>
                      </span>
                                    </SidebarMenuButton>
                                )}
                            </NavLink>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <NavLink to="/status/services">
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
        <SidebarMenuItem key="employees">
          <NavLink to="/employees">
            {({ isActive }) => (
              <SidebarMenuButton isActive={isActive} asChild>
                <span>
                  <Users />
                  Employees
                </span>
              </SidebarMenuButton>
            )}
          </NavLink>
        </SidebarMenuItem>
        <SidebarMenuItem key="clients">
          <NavLink to="/clients">
            {({ isActive }) => (
              <SidebarMenuButton isActive={isActive} asChild>
                <span>
                  <PersonStanding />
                  Clients
                </span>
              </SidebarMenuButton>
            )}
          </NavLink>
        </SidebarMenuItem>
        <SidebarMenuItem key="tasks">
          <NavLink to="/tasks">
            {({ isActive }) => (
              <SidebarMenuButton isActive={isActive} asChild>
                <span>
                  <ListTodo />
                  Tasks
                </span>
              </SidebarMenuButton>
            )}
          </NavLink>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
