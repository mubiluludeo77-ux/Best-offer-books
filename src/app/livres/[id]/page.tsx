import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import LivreDetailPage from '@/components/books/LivreDetailPage';
import { books } from '@/data/books';

type LivreDetailRouteProps = {
  params: Promise<{
    id: string;
  }>;
};

function findBookById(id: string) {
  return books.find((book) => String(book.id) === id);
}

export function generateStaticParams() {
  return books.map((book) => ({
    id: String(book.id),
  }));
}

export async function generateMetadata({
  params,
}: LivreDetailRouteProps): Promise<Metadata> {
  const { id } = await params;

  const book = findBookById(id);

  if (!book) {
    return {
      title: 'Livre introuvable | Best OfferBook',

      description:
        'Le livre demandé est introuvable dans le catalogue Best OfferBook.',

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${book.title} | Best OfferBook`,

    description: book.description,

    alternates: {
      canonical: `/livres/${id}`,
    },

    keywords: [
      book.title,
      book.author,
      book.category,
      'livre',
      'librairie en ligne',
      'Best OfferBook',
    ],

    openGraph: {
      title: `${book.title} | Best OfferBook`,
      description: book.description,
      type: 'book',

      images: [
        {
          url: book.image,
          alt: `Couverture du livre ${book.title}`,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: `${book.title} | Best OfferBook`,
      description: book.description,
      images: [book.image],
    },
  };
}

export default async function LivreDetailRoute({
  params,
}: LivreDetailRouteProps) {
  const { id } = await params;

  const book = findBookById(id);

  if (!book) {
    notFound();
  }

  return <LivreDetailPage book={book} />;
}