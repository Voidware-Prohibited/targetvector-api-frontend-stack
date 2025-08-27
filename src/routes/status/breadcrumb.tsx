import { BreadcrumbItem, BreadcrumbLink } from '@/components/ui/breadcrumb';
import { Link } from 'react-router';

export function StatusBreadcrumb() {
  return (
    <BreadcrumbItem className="hidden md:block">
      <BreadcrumbLink asChild>
        <Link to="/schedule">Schedule</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
}
