import type { Metadata } from 'next';

import CartPage from '@/components/cart/CartPage';

export const metadata: Metadata = {
  title: 'Panier | Best OfferBook',
  description:
    'Consultez les livres présents dans votre panier.',
};

export default function Page() {
  return <CartPage />;
}