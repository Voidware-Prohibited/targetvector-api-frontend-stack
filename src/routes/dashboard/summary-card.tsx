import { IconTrendingUp } from '@tabler/icons-react';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function SummaryCard() {
  return (
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Summary</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            3 Game Servers Online, 1 Stopped
          </CardTitle>
          <CardAction>
            <Badge className="border-transparent bg-emerald-500 text-emerald-50 dark:bg-emerald-600">
              <IconTrendingUp /> +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            333 Players currently connected <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Voice and Text Chat Active
          </div>
        </CardFooter>
      </Card>
  );
}
