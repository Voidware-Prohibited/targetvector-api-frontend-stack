import { Languages } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
// import i18nResources from '../i18n';

const languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
];
// i18nResources.getResource(i18nResources.language, )


export function LanguageSelect() {
    const { i18n } = useTranslation();
    // const currentLanguage = i18n.options.lng;

    // const lang = i18nResources.options.resources.{currentLanguage}.;

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };


    const currentLanguageLabel = languages.find(
        (l) => l.value === i18n.language
    )?.label;

  return (
      <DropdownMenu>
          <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full" size="icon" aria-description={currentLanguageLabel}>
                  <Languages className="h-5 w-5"/>
              </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
              {languages.map((lng) => (
                  <DropdownMenuItem
                      key={lng.value}
                      onClick={() => changeLanguage(lng.value)}
                  >
                      {lng.label}
                  </DropdownMenuItem>
              ))}
          </DropdownMenuContent>
      </DropdownMenu>
  );
}