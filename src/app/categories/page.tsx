import type { Metadata } from 'next';

import CategoriesPage from '@/components/categories/CategoriesPage';

export const metadata: Metadata = {
  title: 'Catégories | Best OfferBook',
  description:
    'Explorez notre collection de livres par catégorie.',
};

export default function Page() {
  return <CategoriesPage />;
}