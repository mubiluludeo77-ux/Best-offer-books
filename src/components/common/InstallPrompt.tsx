'use client';

import { useEffect, useState } from 'react';
import { HiDownload } from 'react-icons/hi';
import { IoIosCloseCircle } from 'react-icons/io';

import { useInstalledDate } from '@/providers/InstalledDateProvider';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;

  userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
  }>;
}

export default function InstallPrompt() {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const [installDate, setInstallDate] = useInstalledDate();

  const [currentDate] = useState(() =>
    Math.floor(Date.now() / 1000)
  );

  useEffect(() => {
    const getInstallPrompt = (event: Event) => {
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
    // On mémorise seulement la fermeture de la grande bannière.
    // On garde installPrompt pour permettre une installation plus tard.
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
              <HiDownload
                className="text-xl"
                aria-hidden="true"
              />

              Cliquez ici pour installer l&apos;application !
            </button>

            <button
              type="button"
              onClick={handleClose}
              className="flex min-h-11 min-w-11 items-center justify-center text-2xl text-slate-700 hover:text-slate-900"
              aria-label="Fermer la proposition d'installation"
            >
              <IoIosCloseCircle aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={handleInstall}
        className="
          fixed bottom-5 right-5 z-50
          flex min-h-12 items-center gap-2
          rounded-full
          bg-slate-900 px-5 py-3
          font-semibold text-white
          shadow-lg
          transition
          hover:scale-105
          hover:bg-slate-700
          focus:outline-none
          focus:ring-2
          focus:ring-slate-500
          focus:ring-offset-2
        "
        aria-label="Installer Best OfferBook"
      >
        <HiDownload
          className="text-xl"
          aria-hidden="true"
        />

        Installer
      </button>
    </>
  );
}