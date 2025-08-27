import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

export function NotificationsPanel() {
    const notifications = [
        { id: 1, message: "New message from John." },
        { id: 2, message: "Your order has shipped!" },
    ];
    const notificationCount = notifications.length;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="relative">
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <Bell className="h-5 w-5" />
                    </Button>
                    {notificationCount > 0 && (
                        <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 rounded-full">
                            {notificationCount}
                        </Badge>
                    )}
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifications.length > 0 ? (
                    notifications.map((notification) => (
                        <DropdownMenuItem key={notification.id}>
                            {notification.message}
                        </DropdownMenuItem>
                    ))
                ) : (
                    <DropdownMenuItem className="text-gray-500">No new notifications</DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem>View all notifications</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}