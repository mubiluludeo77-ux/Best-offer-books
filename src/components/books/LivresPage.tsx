'use client';
 
import { useTranslation } from 'react-i18next';
 
import { books } from '@/data/books';
import BookCard from '@/components/books/BookCard';
import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';
 
export default function LivresPage() {
  const { t } = useTranslation('books');
 
  return (
<main className="bg-[var(--color-background)] py-20">
<Container>
<SectionTitle
          eyebrow={t('page.eyebrow')}
          title={t('page.title')}
          description={t('page.description')}
        />
 
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
<BookCard key={book.id} book={book} />
          ))}
</div>
</Container>
</main>
  );
}