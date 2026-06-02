'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { featuredBooks } from '@/data/books';
import { Book } from '@/types/book';
import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';

type FeaturedBooksProps = {
  onSelectBook: (book: Book) => void;
};

export default function FeaturedBooks({ onSelectBook }: FeaturedBooksProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentBook = featuredBooks[currentIndex];

  // Change automatiquement le livre affiché toutes les 4 secondes
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentIndex((index) =>
        index === featuredBooks.length - 1 ? 0 : index + 1
      );
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  function showPreviousBook() {
    setCurrentIndex((index) =>
      index === 0 ? featuredBooks.length - 1 : index - 1
    );
  }

  function showNextBook() {
    setCurrentIndex((index) =>
      index === featuredBooks.length - 1 ? 0 : index + 1
    );
  }

  if (!currentBook) {
    return null;
  }

  return (
    <section className="bg-[var(--color-background)] py-20">
      <Container>
        <SectionTitle
          eyebrow="Sélection"
          title="Livres populaires"
          description="Découvrez une sélection de livres choisis pour inspirer, divertir et accompagner votre lecture."
          align="center"
        />

        <div className="mx-auto mt-10 w-full overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-lg lg:w-[100%]">
          <div className="relative min-h-[520px] overflow-hidden">
            <Image
              src={currentBook.image}
              alt={currentBook.title}
              fill
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10 flex min-h-[520px] flex-col justify-end p-6 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-secondary)]">
                {currentBook.category}
              </p>

              <h3 className="mt-3 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
                {currentBook.title}
              </h3>

              <p className="mt-2 text-base text-slate-200">
                {currentBook.author}
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-200">
                {currentBook.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="rounded-full bg-white/90 px-5 py-2 text-sm font-bold text-[var(--color-primary)]">
                  {currentBook.price.toFixed(2)} $
                </span>

                <button
                  type="button"
                  onClick={() => onSelectBook(currentBook)}
                  className="rounded-full bg-[var(--color-secondary)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Voir le livre
                </button>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={showPreviousBook}
                  className="rounded-full border border-white/40 bg-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/25"
                >
                  ← Précédent
                </button>

                <div className="flex gap-2">
                  {featuredBooks.map((book, index) => (
                    <button
                      key={book.id}
                      type="button"
                      aria-label={`Afficher ${book.title}`}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        currentIndex === index
                          ? 'w-8 bg-[var(--color-secondary)]'
                          : 'w-2.5 bg-white/70'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={showNextBook}
                  className="rounded-full border border-white/40 bg-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/25"
                >
                  Suivant →
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}