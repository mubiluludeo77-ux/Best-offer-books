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
  // Page actuellement affichée dans l'application.
  // Cela permet de simuler une navigation single page application avec useState.
  const [activePage, setActivePage] = useState<PageName>('accueil');

  // Page précédente utilisée pour le bouton retour.
  const [previousPage, setPreviousPage] = useState<PageName | null>(null);

  // Livre actuellement sélectionné pour afficher sa page de détail.
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  // Livre précédent gardé en mémoire pour le retour.
  const [previousBook, setPreviousBook] = useState<Book | null>(null);

  // Articles actuellement ajoutés au panier.
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Change la page affichée sans recharger le site.
  function handleChangePage(page: PageName) {
    setPreviousPage(activePage);
    setPreviousBook(selectedBook);

    setActivePage(page);

    // Quand on quitte la page détail, on retire le livre sélectionné.
    if (page !== 'detailLivre') {
      setSelectedBook(null);
    }
  }

  // Sélectionne un livre et affiche sa page de détail.
  function handleSelectBook(book: Book) {
    setPreviousPage(activePage);
    setPreviousBook(selectedBook);

    setSelectedBook(book);
    setActivePage('detailLivre');
  }

  // Retourne à la page précédente.
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

  // Ajoute un livre au panier selon la variante choisie.
  function handleAddToCart(book: Book, variant: BookVariant) {
    const cartItemId = `${book.id}-${variant.id}`;

    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === cartItemId
      );

      // Si le même livre avec la même variante existe déjà,
      // on augmente seulement la quantité.
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Sinon, on ajoute un nouvel article au panier.
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
  }

  // Augmente la quantité d'un article du panier.
  function handleIncreaseQuantity(id: string) {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  // Diminue la quantité d'un article du panier.
  // Si la quantité arrive à 0, l'article est retiré.
  function handleDecreaseQuantity(id: string) {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // Supprime complètement un article du panier.
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
      <body className="min-h-full bg-[var(--color-background)] text-[var(--color-primary)]">
        <Header activePage={activePage} onChangePage={handleChangePage} />

        {activePage !== 'accueil' && activePage !== 'detailLivre' && (
          <BackButton onClick={handleGoBack} />
        )}

        {/* Affichage conditionnel des pages selon la valeur de activePage */}
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