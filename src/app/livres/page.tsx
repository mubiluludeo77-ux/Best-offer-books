import type { Metadata } from 'next';

import LivresPage from '@/components/books/LivresPage';

export const metadata: Metadata = {
  title: 'Livres | Best OfferBook',
  description:
    'Parcourez notre catalogue complet de livres.',
};

export default function Page() {
  return <LivresPage />;
}