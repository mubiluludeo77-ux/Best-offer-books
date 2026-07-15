'use client';

import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language.startsWith('en') ? 'en' : 'fr';

  function handleChangeLanguage(language: string) {
    i18n.changeLanguage(language);
  }

  return (
    <label className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
      <span className="hidden sm:inline">{t('language.label')}</span>

      <select
        value={currentLanguage}
        onChange={(event) => handleChangeLanguage(event.target.value)}
        className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-primary)] outline-none transition hover:bg-[var(--color-hover)]"
      >
        <option value="fr">FR</option>
        <option value="en">EN</option>
      </select>
    </label>
  );
}