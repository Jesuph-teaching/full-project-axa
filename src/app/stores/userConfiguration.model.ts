export type LanguageT = 'en' | 'fr' | 'ar';
export type ThemeT = 'light' | 'dark' | 'cyberpunk';
export interface UserConfigurationI {
  firstName: string;
  lastName: string;
  theme: ThemeT;
  language: LanguageT;
}
