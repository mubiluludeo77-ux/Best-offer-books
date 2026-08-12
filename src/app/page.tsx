import type { Metadata } from 'next';

import Accueil from '@/components/home/Accueil';

export const metadata: Metadata = {
  title: 'Best OfferBook',

  description:
    'Librairie en ligne - Trouvez votre prochain livre au meilleur prix',

  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <Accueil />;
}