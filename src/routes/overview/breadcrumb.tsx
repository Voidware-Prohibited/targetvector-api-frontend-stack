import { BreadcrumbItem, BreadcrumbLink } from '@/components/ui/breadcrumb';
import { Link } from 'react-router';

export function OverviewBreadcrumb() {
  return (
    <BreadcrumbItem className="hidden md:block">
      <BreadcrumbLink asChild>
        <Link to="/">Overview</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
}
