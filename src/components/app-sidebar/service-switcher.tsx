import * as React from 'react';
import {
  Gauge,
  AudioWaveform,
  ChevronsUpDown,
  Command,
  GalleryVerticalEnd,
} from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

const data = {
  services: [
    {
      name: 'Overview',
      logo: Gauge,
      logocolor: 'fuchsia',
      logobgcolor: 'chartreuse',
      plan: 'All Servers',
    },
    {
      name: 'Game Server 1',
      logo: GalleryVerticalEnd,
      logocolor: 'red',
      logobgcolor: 'blueviolet',
      plan: 'GS1',
    },
    {
      name: 'Game Server 2',
      logo: AudioWaveform,
      logocolor: 'white',
      logobgcolor: 'deepskyblue',
      plan: 'GS2',
    },
    {
      name: 'Game Server 3',
      logo: Command,
      logocolor: 'aqua',
      logobgcolor: 'darkorange',
      plan: 'GS3',
    },
  ],
};

export function ServiceSwitcher() {
  const { isMobile } = useSidebar();
  const [activeService, setActiveService] = React.useState(data.services[0]);

  if (!activeService) {
    return null;
  }

  const baseBgClass = "bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg";

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className={`${baseBgClass} ${activeService.logocolor}`} style={{ backgroundColor: activeService.logobgcolor }}>
                <activeService.logo className="size-4" color={activeService.logocolor}/>
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {activeService.name}
                </span>
                <span className="truncate text-xs">{activeService.plan}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Services
            </DropdownMenuLabel>
            {data.services.map((service, index) => (
              <DropdownMenuItem
                key={service.name}
                onClick={() => setActiveService(service)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-md border">
                  <service.logo className="size-3.5 shrink-0" />
                </div>
                {service.name}
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
