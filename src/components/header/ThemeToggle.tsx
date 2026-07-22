'use client';
 
import { FaMoon, FaSun } from 'react-icons/fa';

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

      className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm font-semibold text-[var(--color-primary)] shadow-sm transition hover:bg-[var(--color-hover)]"

      aria-label={isDark ? t('theme.goLight') : t('theme.goDark')}
>

      {isDark ? <FaSun /> : <FaMoon />}
 
      <span className="hidden sm:inline">

        {isDark ? t('theme.light') : t('theme.dark')}
</span>
</button>

  );

}
 