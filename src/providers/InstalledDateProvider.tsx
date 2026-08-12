'use client';

import { createContext, useContext, useState } from 'react';

type InstalledDateContextValue = [
  number,
  (date: number) => void
];

const InstalledDateContext =
  createContext<InstalledDateContextValue | null>(null);

const STORAGE_KEY = 'installedDate';

export function InstalledDateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [installedDate, setInstalledDate] = useState(() => {
    if (typeof window === 'undefined') {
      return 0;
    }

    const saved = localStorage.getItem(STORAGE_KEY);

    return saved ? Number(saved) : 0;
  });

  return (
    <InstalledDateContext.Provider
      value={[installedDate, setInstalledDate]}
    >
      {children}
    </InstalledDateContext.Provider>
  );
}

export function useInstalledDate() {
  const context = useContext(InstalledDateContext);

  if (!context) {
    throw new Error(
      'useInstalledDate doit être utilisé dans InstalledDateProvider'
    );
  }

  const [installedDate, setInstalledDate] = context;

  const setInstalledDateWithStorage = (date: number) => {
    localStorage.setItem(STORAGE_KEY, String(date));
    setInstalledDate(date);
  };

  return [installedDate, setInstalledDateWithStorage] as const;
}