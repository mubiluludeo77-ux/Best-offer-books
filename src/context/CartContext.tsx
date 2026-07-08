'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Book, BookVariant } from '@/types/book';
import { CartItem } from '@/types/cart';

type CartContextType = {
  cartItems: CartItem[];
  cartItemsCount: number;
  addToCart: (book: Book, variant: BookVariant) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartItemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  function addToCart(book: Book, variant: BookVariant) {
    const cartItemId = `${book.id}-${variant.id}`;
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === cartItemId);
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
  }

  function increaseQuantity(id: string) {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(id: string) {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id: string) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartItemsCount,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart doit être utilisé dans un CartProvider');
  }
  return context;
}