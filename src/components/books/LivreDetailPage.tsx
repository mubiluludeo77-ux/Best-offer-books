'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Book } from '@/types/book';
import Container from '@/components/common/Container';

type LivreDetailPageProps = {
  book: Book;
  onBack: () => void;
};

export default function LivreDetailPage({ book, onBack }: LivreDetailPageProps) {
  const [selectedVariantId, setSelectedVariantId] = useState(
    book.variants[0].id
  );

  const selectedVariant =
    book.variants.find((variant) => variant.id === selectedVariantId) ||
    book.variants[0];

  return (
    <main className="bg-[var(--color-background)] py-20">
      <Container className="grid gap-10 lg:grid-cols-2">
        <div className="relative h-[380px] overflow-hidden rounded-3xl bg-[var(--color-surface)] shadow-sm sm:h-[520px]">
          <Image
            src={book.image}
            alt={book.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <button
            type="button"
            onClick={onBack}
            className="mb-6 text-sm font-semibold text-[var(--color-secondary)]"
          >
            ← Retour aux livres
          </button>

          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-secondary)]">
            {book.category}
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-primary)]">
            {book.title}
          </h1>

          <p className="mt-2 text-lg text-[var(--color-muted)]">
            {book.author}
          </p>

          <p className="mt-6 text-base leading-7 text-[var(--color-muted)]">
            {book.description}
          </p>

          <p className="mt-6 text-2xl font-bold text-[var(--color-primary)]">
            {selectedVariant.price.toFixed(2)} $
          </p>

          <div className="mt-8">
            <h2 className="text-lg font-bold text-[var(--color-primary)]">
              Variantes disponibles
            </h2>

            <div className="mt-4 flex flex-wrap gap-3">
              {book.variants.map((variant) => (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => setSelectedVariantId(variant.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    selectedVariant.id === variant.id
                      ? 'border-[var(--color-secondary)] bg-[var(--color-background)] text-[var(--color-secondary)]'
                      : 'border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] hover:bg-[var(--color-background)]'
                  }`}
                >
                  {variant.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}