import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
 
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
 
import { I18nProvider } from '@/providers/I18nProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { CartProvider } from '@/context/CartContext';
 
import './globals.css';
 
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
 
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
 
export const metadata: Metadata = {
  title: 'Best OfferBook',
  description: 'Librairie en ligne - Trouvez votre prochain livre au meilleur prix',
  manifest: "/manifest.json"
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
>
<body className="min-h-full text-[var(--color-primary)]">
<I18nProvider>
<ThemeProvider>
<CartProvider>
<Header />
              {children}
<Footer />
</CartProvider>
</ThemeProvider>
</I18nProvider>
</body>
</html>
  );
}