'use client';

import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '@/providers/ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm font-semibold text-[var(--color-primary)] shadow-sm transition hover:bg-[var(--color-hover)]"
      aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
    >
      {isDark ? <FaSun /> : <FaMoon />}

      <span className="hidden sm:inline">
        {isDark ? 'Clair' : 'Sombre'}
      </span>
    </button>
  );
}