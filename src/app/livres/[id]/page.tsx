import { books } from '@/data/books';
import { notFound } from 'next/navigation';
import LivreDetailPage from '@/components/books/LivreDetailPage';

type Params = { id: string };

export default async function LivreDetailRoutePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    notFound();
  }

  return <LivreDetailPage book={book} />;
}