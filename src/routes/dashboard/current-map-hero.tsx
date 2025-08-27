import { IconTrendingUp } from '@tabler/icons-react';
import cardBackground from '@/assets/map-hero/neon-city.jpg';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function CurrentMapHero() {

    const cardStyle = {
        backgroundImage: `url(${cardBackground})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundOrigin: 'bottom right',
        backgroundPosition: 'center top', // Centers the image
        backgroundRepeat: 'no-repeat',
        height: '250px',
        overflow: 'hidden'
    };

  return (
    <div className="*:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-1 @5xl/main:grid-cols-1">
      {/* Total Revenue */}
      <Card className="@container/card backdrop-blur-lg bg-black/30" style={cardStyle}>
        <CardHeader>
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            $1,250.00
          </CardTitle>
          <CardAction>
            <Badge className="border-transparent bg-emerald-500 text-emerald-50 dark:bg-emerald-600">
              <IconTrendingUp /> +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}