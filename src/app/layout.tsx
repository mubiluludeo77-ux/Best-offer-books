import type { Metadata } from 'next';

import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import InstallPrompt from '@/components/common/InstallPrompt';

import { I18nProvider } from '@/providers/I18nProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { InstalledDateProvider } from '@/providers/InstalledDateProvider';

import { CartProvider } from '@/context/CartContext';

import { siteUrl } from '@/lib/siteUrl';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: 'Best OfferBook',

  description:
    'Librairie en ligne - Trouvez votre prochain livre au meilleur prix',

  manifest: '/manifest.json',

  openGraph: {
    title: 'Best OfferBook',
    description:
      'Librairie en ligne - Trouvez votre prochain livre au meilleur prix',
    type: 'website',
    locale: 'fr_CA',
    siteName: 'Best OfferBook',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Best OfferBook',
    description:
      'Librairie en ligne - Trouvez votre prochain livre au meilleur prix',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-full text-[var(--color-primary)]">
        <I18nProvider>
          <ThemeProvider>
            <InstalledDateProvider>
              <CartProvider>
                <Header />

                <InstallPrompt />

                {children}

                <Footer />
              </CartProvider>
            </InstalledDateProvider>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}