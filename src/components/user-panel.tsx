import { Button } from '@/components/ui/button';
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {
    User,
    SlidersVertical, LogOut
} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import avatarImage from "@/assets/avatars/placeholder.png";

export function UserPanel() {
    const CommandMenu = [
        <>
            <div className="pl-4 pt-2 pb-4">
                <p className="text-sm font-medium leading-none">Chrome Ronin</p>
                <p className="text-xs leading-none text-muted-foreground">
                    chromeronin@voidwarex.com
                </p>
            </div>
            <Command className="rounded-lg border shadow-md md:min-w-[450px]">
                <CommandList>
                    <CommandGroup>
                        <CommandItem>
                            <User/>
                            <span>Account</span>
                            <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <SlidersVertical/>
                            <span>Preferences</span>
                            <CommandShortcut>⌘S</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator/>
                    <CommandGroup>
                        <CommandItem>
                            <User/>
                            <span>Help</span>
                            <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <LogOut/>
                            <span>Logout</span>
                            <CommandShortcut>⌘S</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command></>
    ]

  return (
      <DropdownMenu>
          <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={avatarImage} alt="@Chrome Ronin" />
                      <AvatarFallback className="rounded-lg">CR</AvatarFallback>
                  </Avatar>
              </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80 pb-0" align="end" forceMount>
              {CommandMenu}
          </DropdownMenuContent>
      </DropdownMenu>
  );
}