
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, SlidersVertical, LogOut } from 'lucide-react';
import avatarImage from "@/assets/avatars/placeholder.png";

export function UserPanel() {
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
          <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">Chrome Ronin</p>
                      <p className="text-xs leading-none text-muted-foreground">
                          chromeronin@voidwarex.com
                      </p>
                  </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Account <User className="mt-auto ml-auto size-4 cursor-pointer" /></DropdownMenuItem>
              <DropdownMenuItem>Preferences <SlidersVertical className="mt-auto ml-auto size-4 cursor-pointer" /></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out <LogOut className="mt-auto ml-auto size-4 cursor-pointer" /></DropdownMenuItem>

          </DropdownMenuContent>
      </DropdownMenu>
  );
}