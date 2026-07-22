import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
 
import resources from '@/utils/loadResources';
 
export const supportedLanguages = ['fr', 'en'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];
 
if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      lng: 'fr',
      fallbackLng: 'fr',
      supportedLngs: supportedLanguages,
      ns: [
        'common',
        'header',
        'footer',
        'home',
        'contact',
        'books',
        'categories',
        'cart',
      ],
      defaultNS: 'common',
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
      },
      react: {
        useSuspense: false,
      },
    });
}
 
export default i18n;