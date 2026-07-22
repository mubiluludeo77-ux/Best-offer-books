'use client';
 
import {

  createContext,

  useContext,

  useEffect,

  useMemo,

  useState,

} from 'react';
 
import { Book, BookVariant } from '@/types/book';
 
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
 
export function CartProvider({ children }: { children: React.ReactNode }) {

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);
 
  useEffect(() => {

    const savedCart = localStorage.getItem(STORAGE_KEY);
 
    if (savedCart) {

      try {

        const parsedCart = JSON.parse(savedCart);
 
        if (Array.isArray(parsedCart)) {

          setCartItems(parsedCart);

        }

      } catch {

        localStorage.removeItem(STORAGE_KEY);

      }

    }
 
    setIsLoaded(true);

  }, []);
 
  useEffect(() => {

    if (isLoaded) {

      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));

    }

  }, [cartItems, isLoaded]);
 
  function addToCart(book: Book, variant: BookVariant) {

    const itemId = `${book.id}-${variant.id}`;
 
    setCartItems((currentItems) => {

      const existingItem = currentItems.find((item) => item.id === itemId);
 
      if (existingItem) {

        return currentItems.map((item) =>

          item.id === itemId

            ? { ...item, quantity: item.quantity + 1 }

            : item

        );

      }
 
      return [

        ...currentItems,

        {

          id: itemId,

          book,

          variant,

          quantity: 1,

        },

      ];

    });

  }
 
  function removeFromCart(itemId: string) {

    setCartItems((currentItems) =>

      currentItems.filter((item) => item.id !== itemId)

    );

  }
 
  function increaseQuantity(itemId: string) {

    setCartItems((currentItems) =>

      currentItems.map((item) =>

        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item

      )

    );

  }
 
  function decreaseQuantity(itemId: string) {

    setCartItems((currentItems) =>

      currentItems

        .map((item) =>

          item.id === itemId

            ? { ...item, quantity: Math.max(1, item.quantity - 1) }

            : item

        )

    );

  }
 
  function clearCart() {

    setCartItems([]);

  }
 
  const cartItemsCount = useMemo(() => {

    return cartItems.reduce((total, item) => total + item.quantity, 0);

  }, [cartItems]);
 
  const cartTotal = useMemo(() => {

    return cartItems.reduce(

      (total, item) => total + item.variant.price * item.quantity,

      0

    );

  }, [cartItems]);
 
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

    throw new Error('useCart doit être utilisé dans CartProvider');

  }
 
  return context;

}
 