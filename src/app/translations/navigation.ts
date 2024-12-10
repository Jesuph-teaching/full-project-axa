import { LanguageT } from '../stores/userConfiguration.model';

export const languages: { value: LanguageT; label: string }[] = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'French',
    value: 'fr',
  },
];
export const navigationTranslations = {
  Home: {
    en: 'Home',
    fr: 'Accueil',
    ar: 'الرئيسية',
  },
  Dashboard: {
    en: 'Dashboard',
    fr: 'Dashboard',
    ar: 'لوحة التحكم',
  },
};
export type navigationTranslationsKeys = keyof typeof navigationTranslations;
