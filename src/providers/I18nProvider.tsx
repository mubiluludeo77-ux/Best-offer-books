'use client';

import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18next';

type I18nProviderProps = {
  children: ReactNode;
};

export function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    function updateHtmlLanguage(language: string) {
      document.documentElement.lang = language.startsWith('en') ? 'en' : 'fr';
    }

    updateHtmlLanguage(i18n.language);

    i18n.on('languageChanged', updateHtmlLanguage);

    return () => {
      i18n.off('languageChanged', updateHtmlLanguage);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}