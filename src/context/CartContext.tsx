'use client';

import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
} from 'react';

import type { Book, BookVariant } from '@/types/book';

export type CartItem = {
  id: string;
  book: Book;
  variant: BookVariant;
  quantity: number;
};

type CartContextValue = {
  cartItems: CartItem[];
  cartItemsCount: number;
  cartTotal: number;
  addToCart: (book: Book, variant: BookVariant) => void;
  removeFromCart: (itemId: string) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = 'best-offerbook-cart';
const CART_UPDATE_EVENT = 'best-offerbook-cart-update';
const EMPTY_CART = '[]';

function getCartSnapshot() {
  if (typeof window === 'undefined') {
    return EMPTY_CART;
  }

  return localStorage.getItem(STORAGE_KEY) ?? EMPTY_CART;
}

function getServerCartSnapshot() {
  return EMPTY_CART;
}

function subscribeToCart(onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      onStoreChange();
    }
  };

  const handleCartUpdate = () => {
    onStoreChange();
  };

  window.addEventListener('storage', handleStorage);
  window.addEventListener(CART_UPDATE_EVENT, handleCartUpdate);

  return () => {
    window.removeEventListener('storage', handleStorage);
    window.removeEventListener(CART_UPDATE_EVENT, handleCartUpdate);
  };
}

function parseCart(value: string): CartItem[] {
  try {
    const parsedCart = JSON.parse(value);

    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch {
    return [];
  }
}

function getCurrentCart(): CartItem[] {
  return parseCart(getCartSnapshot());
}

function saveCart(items: CartItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));

  window.dispatchEvent(new Event(CART_UPDATE_EVENT));
}

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const cartSnapshot = useSyncExternalStore(
    subscribeToCart,
    getCartSnapshot,
    getServerCartSnapshot
  );

  const cartItems = useMemo(
    () => parseCart(cartSnapshot),
    [cartSnapshot]
  );

  function addToCart(book: Book, variant: BookVariant) {
    const currentItems = getCurrentCart();
    const itemId = `${book.id}-${variant.id}`;

    const existingItem = currentItems.find(
      (item) => item.id === itemId
    );

    if (existingItem) {
      const updatedItems = currentItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      saveCart(updatedItems);
      return;
    }

    saveCart([
      ...currentItems,
      {
        id: itemId,
        book,
        variant,
        quantity: 1,
      },
    ]);
  }

  function removeFromCart(itemId: string) {
    const currentItems = getCurrentCart();

    saveCart(
      currentItems.filter((item) => item.id !== itemId)
    );
  }

  function increaseQuantity(itemId: string) {
    const currentItems = getCurrentCart();

    saveCart(
      currentItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(itemId: string) {
    const currentItems = getCurrentCart();

    saveCart(
      currentItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  }

  function clearCart() {
    saveCart([]);
  }

  const cartItemsCount = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      ),
    [cartItems]
  );

  const cartTotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          total + item.variant.price * item.quantity,
        0
      ),
    [cartItems]
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartItemsCount,
        cartTotal,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      'useCart doit être utilisé dans CartProvider'
    );
  }

  return context;
}