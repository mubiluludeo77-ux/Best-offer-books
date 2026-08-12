'use client';

import { useEffect, useState } from 'react';

import { useInstalledDate } from '@/providers/InstalledDateProvider';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;

  userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
  }>;
}

function DownloadIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m9 9 6 6" />
      <path d="m15 9-6 6" />
    </svg>
  );
}

export default function InstallPrompt() {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(
      null
    );

  const [installDate, setInstallDate] =
    useInstalledDate();

  const [currentDate] = useState(() =>
    Math.floor(Date.now() / 1000)
  );

  useEffect(() => {
    const getInstallPrompt = (
      event: Event
    ) => {
      event.preventDefault();

      setInstallPrompt(
        event as BeforeInstallPromptEvent
      );
    };

    const handleAppInstalled = () => {
      setInstallPrompt(null);
    };

    window.addEventListener(
      'beforeinstallprompt',
      getInstallPrompt
    );

    window.addEventListener(
      'appinstalled',
      handleAppInstalled
    );

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        getInstallPrompt
      );

      window.removeEventListener(
        'appinstalled',
        handleAppInstalled
      );
    };
  }, []);

  const handleClose = () => {
    setInstallDate(currentDate);
  };

  const handleInstall = async () => {
    if (!installPrompt) {
      return;
    }

    await installPrompt.prompt();

    const { outcome } =
      await installPrompt.userChoice;

    if (outcome === 'accepted') {
      setInstallPrompt(null);
    }
  };

  if (!installPrompt) {
    return null;
  }

  const showBanner =
    currentDate - installDate >= 86400;

  return (
    <>
      {showBanner && (
        <div className="flex w-full justify-center px-4">
          <div className="mt-2 flex w-full max-w-5xl items-center justify-between rounded-xl border-2 border-slate-300 bg-slate-100 px-3 py-2">
            <button
              type="button"
              onClick={handleInstall}
              className="flex min-h-11 items-center gap-2 text-base font-medium text-slate-900 hover:text-slate-700"
            >
              <DownloadIcon />

              Cliquez ici pour installer
              l&apos;application !
            </button>

            <button
              type="button"
              onClick={handleClose}
              className="flex min-h-11 min-w-11 items-center justify-center text-slate-700 hover:text-slate-900"
              aria-label="Fermer la proposition d'installation"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={handleInstall}
        className="fixed bottom-5 right-5 z-50 flex min-h-12 items-center gap-2 rounded-full bg-slate-900 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
        aria-label="Installer Best OfferBook"
      >
        <DownloadIcon />

        Installer
      </button>
    </>
  );
}