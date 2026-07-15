import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import frCommon from '@/locales/fr/common.json';
import enCommon from '@/locales/en/common.json';

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        fr: {
          common: frCommon,
        },
        en: {
          common: enCommon,
        },
      },
      fallbackLng: 'fr',
      supportedLngs: ['fr', 'en'],
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