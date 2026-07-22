'use client';
 
import { useEffect } from 'react';

import type { ReactNode } from 'react';

import { I18nextProvider } from 'react-i18next';
 
import i18n, { SupportedLanguage } from '@/i18next';
 
type I18nProviderProps = {

  children: ReactNode;

};
 
const LANGUAGE_STORAGE_KEY = 'i18nextLng';
 
function isSupportedLanguage(language: string | null): language is SupportedLanguage {

  return language === 'fr' || language === 'en';

}
 
function getBrowserLanguage(): SupportedLanguage {

  const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
 
  if (isSupportedLanguage(savedLanguage)) {

    return savedLanguage;

  }
 
  return navigator.language.startsWith('en') ? 'en' : 'fr';

}
 
function updateHtmlLanguage(language: string) {

  document.documentElement.lang = language.startsWith('en') ? 'en' : 'fr';

}
 
export function I18nProvider({ children }: I18nProviderProps) {

  useEffect(() => {

    const browserLanguage = getBrowserLanguage();
 
    updateHtmlLanguage(browserLanguage);

    void i18n.changeLanguage(browserLanguage);
 
    i18n.on('languageChanged', updateHtmlLanguage);
 
    return () => {

      i18n.off('languageChanged', updateHtmlLanguage);

    };

  }, []);
 
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;

}
 