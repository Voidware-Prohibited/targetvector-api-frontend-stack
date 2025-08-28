import { OverviewCards } from './overview-cards';
import {CurrentMapHeroOverview} from './current-map-hero-overview';

export function OverviewPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <OverviewCards />
          <CurrentMapHeroOverview />
          <CurrentMapHeroOverview />
          <CurrentMapHeroOverview />
        </div>
      </div>
    </div>
  );
}
