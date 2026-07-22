import type { Metadata } from 'next';

import Accueil from '@/components/home/Accueil';

export const metadata: Metadata = {
  title: 'Accueil | Best OfferBook',
  description:
    'Découvrez les meilleurs livres au meilleur prix chez Best OfferBook.',
};

export default function Home() {
  return <Accueil />;
}