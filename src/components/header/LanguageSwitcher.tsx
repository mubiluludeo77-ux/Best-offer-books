'use client';

import { useTranslation } from 'react-i18next';
import type { SupportedLanguage } from '@/i18next';

const LANGUAGE_STORAGE_KEY = 'i18nextLng';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation('header');

  const currentLanguage: SupportedLanguage = i18n.language.startsWith('en')
    ? 'en'
    : 'fr';

  function handleChangeLanguage(language: SupportedLanguage) {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    void i18n.changeLanguage(language);
  }

  return (
    <label className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
      <span className="hidden sm:inline">{t('language.label')}</span>

      <select
        value={currentLanguage}
        onChange={(event) =>
          handleChangeLanguage(event.target.value as SupportedLanguage)
        }
        className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-primary)] outline-none transition hover:bg-[var(--color-hover)]"
      >
        <option value="fr">{t('language.fr')}</option>
        <option value="en">{t('language.en')}</option>
      </select>
    </label>
  );
}