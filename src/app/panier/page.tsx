import type { Metadata } from 'next';

import CartPage from '@/components/cart/CartPage';

export const metadata: Metadata = {
  title: 'Panier | Best OfferBook',

  description:
    'Consultez les livres ajoutés à votre panier Best OfferBook.',

  alternates: {
    canonical: '/panier',
  },
};

export default function PanierRoute() {
  return <CartPage />;
}