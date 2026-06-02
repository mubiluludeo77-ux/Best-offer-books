'use client';

import { useState } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import BackButton from '@/components/common/BackButton';
import Accueil from '@/components/home/Accueil';
import LivresPage from '@/components/books/LivresPage';
import LivreDetailPage from '@/components/books/LivreDetailPage';
import CategoriesPage from '@/components/categories/CategoriesPage';
import ContactPage from '@/components/contact/ContactPage';
import { PageName } from '@/data/navItems';
import { Book } from '@/types/book';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout() {
  const [activePage, setActivePage] = useState<PageName>('accueil');
  const [previousPage, setPreviousPage] = useState<PageName | null>(null);

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [previousBook, setPreviousBook] = useState<Book | null>(null);

  function handleChangePage(page: PageName) {
    setPreviousPage(activePage);
    setPreviousBook(selectedBook);

    setActivePage(page);

    if (page !== 'detailLivre') {
      setSelectedBook(null);
    }
  }

  function handleSelectBook(book: Book) {
    setPreviousPage(activePage);
    setPreviousBook(selectedBook);

    setSelectedBook(book);
    setActivePage('detailLivre');
  }

  function handleGoBack() {
    if (previousPage) {
      setActivePage(previousPage);
      setSelectedBook(previousBook);
      setPreviousPage(null);
      setPreviousBook(null);
    } else {
      setActivePage('accueil');
      setSelectedBook(null);
    }
  }

  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--color-background)] text-[var(--color-primary)]">
        <Header activePage={activePage} onChangePage={handleChangePage} />

        {activePage !== 'accueil' && activePage !== 'detailLivre' && (
          <BackButton onClick={handleGoBack} />
        )}

        {activePage === 'accueil' && (
          <Accueil
            onChangePage={handleChangePage}
            onSelectBook={handleSelectBook}
          />
        )}

        {activePage === 'livres' && (
          <LivresPage onSelectBook={handleSelectBook} />
        )}

        {activePage === 'categories' && (
          <CategoriesPage onSelectBook={handleSelectBook} />
        )}

        {activePage === 'contact' && <ContactPage />}

        {activePage === 'detailLivre' && selectedBook && (
          <LivreDetailPage book={selectedBook} onBack={handleGoBack} />
        )}

        <Footer />
      </body>
    </html>
  );
}