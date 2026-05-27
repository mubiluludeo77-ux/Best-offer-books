'use client';

import { useState } from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Accueil from '@/components/home/Accueil';
import LivresPage from '@/components/books/LivresPage';
import LivreDetailPage from '@/components/books/LivreDetailPage';
import CategoriesPage from '@/components/categories/CategoriesPage';
import ContactPage from '@/components/contact/ContactPage';
import { PageName } from '@/data/navItems';
import { Book } from '@/types/book';

export default function Home() {
  const [activePage, setActivePage] = useState<PageName>('accueil');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  function handleChangePage(page: PageName) {
    setActivePage(page);

    if (page !== 'detailLivre') {
      setSelectedBook(null);
    }
  }

  function handleSelectBook(book: Book) {
    setSelectedBook(book);
    setActivePage('detailLivre');
  }

  function renderPage() {
    if (activePage === 'accueil') {
      return (
        <Accueil
          onChangePage={handleChangePage}
          onSelectBook={handleSelectBook}
        />
      );
    }

    if (activePage === 'livres') {
      return <LivresPage onSelectBook={handleSelectBook} />;
    }

    if (activePage === 'categories') {
      return <CategoriesPage onSelectBook={handleSelectBook} />;
    }

    if (activePage === 'contact') {
      return <ContactPage />;
    }

    if (activePage === 'detailLivre' && selectedBook) {
      return (
        <LivreDetailPage
          book={selectedBook}
          onBack={() => handleChangePage('livres')}
        />
      );
    }

    return <Accueil onChangePage={handleChangePage} onSelectBook={handleSelectBook} />;
  }

  return (
    <>
      <Header activePage={activePage} onChangePage={handleChangePage} />

      {renderPage()}

      <Footer />
    </>
  );
}