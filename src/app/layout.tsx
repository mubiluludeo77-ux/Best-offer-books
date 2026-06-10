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
import CartPage from '@/components/cart/CartPage';

import { PageName } from '@/data/navItems';
import { Book, BookVariant } from '@/types/book';
import { CartItem } from '@/types/cart';

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

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Nombre total d'articles dans le panier
  const cartItemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function handleChangePage(page: PageName) {
    setPreviousPage(activePage);
    setPreviousBook(selectedBook);

    setActivePage(page);
    scrollToTop();

    if (page !== 'detailLivre') {
      setSelectedBook(null);
    }
  }

  function handleSelectBook(book: Book) {
    setPreviousPage(activePage);
    setPreviousBook(selectedBook);

    setSelectedBook(book);
    setActivePage('detailLivre');
    scrollToTop();
  }

  function handleGoBack() {
    if (previousPage) {
      setActivePage(previousPage);
      setSelectedBook(previousBook);
      setPreviousPage(null);
      setPreviousBook(null);
      scrollToTop();
    } else {
      setActivePage('accueil');
      setSelectedBook(null);
      scrollToTop();
    }
  }

  function handleAddToCart(book: Book, variant: BookVariant) {
    const cartItemId = `${book.id}-${variant.id}`;

    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === cartItemId
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...currentItems,
        {
          id: cartItemId,
          bookId: book.id,
          title: book.title,
          image: book.image,
          variantId: variant.id,
          variantLabel: variant.label,
          unitPrice: variant.price,
          quantity: 1,
        },
      ];
    });

    setPreviousPage(activePage);
    setPreviousBook(selectedBook);
    setActivePage('panier');
    scrollToTop();
  }

  function handleIncreaseQuantity(id: string) {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function handleDecreaseQuantity(id: string) {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function handleRemoveFromCart(id: string) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }

  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full text-[var(--color-primary)]">
        <Header
          activePage={activePage}
          onChangePage={handleChangePage}
          cartItemsCount={cartItemsCount}
        />

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

        {activePage === 'panier' && (
          <CartPage
            cartItems={cartItems}
            onIncreaseQuantity={handleIncreaseQuantity}
            onDecreaseQuantity={handleDecreaseQuantity}
            onRemoveFromCart={handleRemoveFromCart}
            onChangePage={handleChangePage}
          />
        )}

        {activePage === 'detailLivre' && selectedBook && (
          <LivreDetailPage
            book={selectedBook}
            onBack={handleGoBack}
            onAddToCart={handleAddToCart}
          />
        )}

        <Footer />
      </body>
    </html>
  );
}