import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from '@/utils/loadResources';

export const supportedLanguages = [
  'fr',
  'en',
] as const;

export type SupportedLanguage =
  (typeof supportedLanguages)[number];

if (!i18n.isInitialized) {
  void i18n
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

      react: {
        useSuspense: false,
      },
    });
}

export default i18n;