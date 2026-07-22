'use client';
 
import { createContext, useContext, useEffect, useState } from 'react';
 
type Theme = 'light' | 'dark';
 
type ThemeContextValue = {

  theme: Theme;

  setTheme: (theme: Theme) => void;

  toggleTheme: () => void;

};
 
const ThemeContext = createContext<ThemeContextValue | null>(null);
 
const STORAGE_KEY = 'best-offerbook-theme';
 
function isTheme(value: string | null): value is Theme {

  return value === 'light' || value === 'dark';

}
 
function applyTheme(theme: Theme) {

  document.documentElement.classList.toggle('dark', theme === 'dark');

}
 
export function ThemeProvider({ children }: { children: React.ReactNode }) {

  const [theme, setThemeState] = useState<Theme>('light');
 
  useEffect(() => {

    const savedTheme = localStorage.getItem(STORAGE_KEY);
 
    if (isTheme(savedTheme)) {

      setThemeState(savedTheme);

      applyTheme(savedTheme);

      return;

    }
 
    applyTheme('light');

  }, []);
 
  function setTheme(nextTheme: Theme) {

    setThemeState(nextTheme);

    localStorage.setItem(STORAGE_KEY, nextTheme);

    applyTheme(nextTheme);

  }
 
  function toggleTheme() {

    setTheme(theme === 'light' ? 'dark' : 'light');

  }
 
  return (
<ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>

      {children}
</ThemeContext.Provider>

  );

}
 
export function useTheme() {

  const context = useContext(ThemeContext);
 
  if (!context) {

    throw new Error('useTheme doit être utilisé dans ThemeProvider');

  }
 
  return context;

}
 