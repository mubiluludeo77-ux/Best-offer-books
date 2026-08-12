import type { Metadata } from 'next';

import CategoriesPage from '@/components/categories/CategoriesPage';

export const metadata: Metadata = {
  title: 'Catégories | Best OfferBook',

  description:
    'Explorez les différentes catégories de livres disponibles sur Best OfferBook.',

  alternates: {
    canonical: '/categories',
  },
};

export default function CategoriesRoute() {
  return <CategoriesPage />;
}