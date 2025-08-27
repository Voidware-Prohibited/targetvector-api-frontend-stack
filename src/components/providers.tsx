import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import { queryClient } from '@/lib/query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'sonner';
import { SidebarProvider } from './ui/sidebar';
import { ThemeProvider } from './theme-provider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
            <SidebarProvider>{children}</SidebarProvider>
          </ThemeProvider>
          <Toaster />
          {import.meta.env.MODE === 'development' && (
            <>
              <ReactQueryDevtools buttonPosition="bottom-right" />
            </>
          )}
        </QueryClientProvider>
    </I18nextProvider>
  );
};
