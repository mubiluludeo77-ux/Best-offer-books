import type { Metadata } from 'next';

import ContactPage from '@/components/contact/ContactPage';

export const metadata: Metadata = {
  title: 'Contact | Best OfferBook',

  description:
    'Contactez Best OfferBook pour toute question concernant nos livres et nos services.',

  alternates: {
    canonical: '/contact',
  },
};

export default function ContactRoute() {
  return <ContactPage />;
}