import type { Metadata } from 'next';

import LivresPage from '@/components/books/LivresPage';

export const metadata: Metadata = {
  title: 'Livres | Best OfferBook',

  description:
    'Découvrez tous les livres disponibles sur Best OfferBook et trouvez votre prochaine lecture.',

  alternates: {
    canonical: '/livres',
  },
};

export default function LivresRoute() {
  return <LivresPage />;
}