'use client';
 
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
 
import { Book } from '@/types/book';
import { formatPrice } from '@/utils/formatPrice';
 
type BookCardProps = {
  book: Book;
};
 
export default function BookCard({ book }: BookCardProps) {
  const { t, i18n } = useTranslation('books');
 
  const title = t(`items.${book.id}.title`, {
    defaultValue: book.title,
  });
 
  const author = t(`items.${book.id}.author`, {
    defaultValue: book.author,
  });
 
  const description = t(`items.${book.id}.description`, {
    defaultValue: book.description,
  });
 
  const category = t(`categoryNames.${book.category}`, {
    defaultValue: book.category,
  });
 
  return (
<Link
      href={`/livres/${book.id}`}
      className="block cursor-pointer rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
>
<div className="relative mb-4 h-64 overflow-hidden rounded-xl bg-[var(--color-background)]">
<Image
          src={book.image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition duration-300 hover:scale-105"
        />
</div>
 
      <p className="text-sm font-medium text-[var(--color-secondary)]">
        {category}
</p>
 
      <h3 className="mt-1 text-lg font-bold text-[var(--color-primary)]">
        {title}
</h3>
 
      <p className="mt-1 text-sm text-[var(--color-muted)]">{author}</p>
 
      <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
        {description}
</p>
 
      <div className="mt-4 flex items-center justify-between">
<span className="font-bold text-[var(--color-primary)]">
          {formatPrice(book.price, i18n.language)}
</span>
 
        <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-semibold text-[var(--color-primary)] transition">
          {t('card.view')}
</span>
</div>
</Link>
  );
}