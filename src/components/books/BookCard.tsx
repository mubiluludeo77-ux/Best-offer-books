import Image from 'next/image';
import { Book } from '@/types/book';

type BookCardProps = {
  book: Book;
  onSelectBook?: (book: Book) => void;
};

export default function BookCard({ book, onSelectBook }: BookCardProps) {
  function handleOpenBook() {
    onSelectBook?.(book);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleOpenBook();
    }
  }

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={handleOpenBook}
      onKeyDown={handleKeyDown}
      className="cursor-pointer rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
    >
      <div className="relative mb-4 h-64 overflow-hidden rounded-xl bg-[var(--color-background)]">
        <Image
          src={book.image}
          alt={book.title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition duration-300 hover:scale-105"
        />
      </div>

      <p className="text-sm font-medium text-[var(--color-secondary)]">
        {book.category}
      </p>

      <h3 className="mt-1 text-lg font-bold text-[var(--color-primary)]">
        {book.title}
      </h3>

      <p className="mt-1 text-sm text-[var(--color-muted)]">
        {book.author}
      </p>

      <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
        {book.description}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-bold text-[var(--color-primary)]">
          {book.price.toFixed(2)} $
        </span>

        <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-semibold text-[var(--color-primary)] transition">
          Voir
        </span>
      </div>
    </article>
  );
}