'use client';

import { useTranslation } from 'react-i18next';

import { useTheme } from '@/providers/ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation('header');

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex min-h-11 items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm font-semibold text-[var(--color-primary)] shadow-sm transition hover:bg-[var(--color-hover)]"
      aria-label={isDark ? t('theme.goLight') : t('theme.goDark')}
    >
      <span aria-hidden="true">{isDark ? '☀' : '☾'}</span>

      <span className="hidden sm:inline">
        {isDark ? t('theme.light') : t('theme.dark')}
      </span>
    </button>
  );
}