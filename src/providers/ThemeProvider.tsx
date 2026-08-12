'use client';

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
} from 'react';

type Theme = 'light' | 'dark';

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext =
  createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = 'best-offerbook-theme';
const THEME_UPDATE_EVENT = 'best-offerbook-theme-update';

function isTheme(value: string | null): value is Theme {
  return value === 'light' || value === 'dark';
}

function getThemeSnapshot(): Theme {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const savedTheme = localStorage.getItem(STORAGE_KEY);

  return isTheme(savedTheme) ? savedTheme : 'light';
}

function getServerThemeSnapshot(): Theme {
  return 'light';
}

function subscribeToTheme(onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      onStoreChange();
    }
  };

  const handleThemeUpdate = () => {
    onStoreChange();
  };

  window.addEventListener('storage', handleStorage);
  window.addEventListener(
    THEME_UPDATE_EVENT,
    handleThemeUpdate
  );

  return () => {
    window.removeEventListener('storage', handleStorage);
    window.removeEventListener(
      THEME_UPDATE_EVENT,
      handleThemeUpdate
    );
  };
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle(
    'dark',
    theme === 'dark'
  );
}

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function setTheme(nextTheme: Theme) {
    localStorage.setItem(STORAGE_KEY, nextTheme);

    applyTheme(nextTheme);

    window.dispatchEvent(
      new Event(THEME_UPDATE_EVENT)
    );
  }

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useTheme doit être utilisé dans ThemeProvider'
    );
  }

  return context;
}