'use client';
 
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
 
import { featuredBooks } from '@/data/books';
import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';
import { formatPrice } from '@/utils/formatPrice';
 
export default function FeaturedBooks() {
  const router = useRouter();
  const { t, i18n } = useTranslation('home');
  const { t: tBooks } = useTranslation('books');
 
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentBook = featuredBooks[currentIndex];
 
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
 
  const translatedTitle = tBooks(`items.${currentBook.id}.title`, {
    defaultValue: currentBook.title,
  });
 
  const translatedAuthor = tBooks(`items.${currentBook.id}.author`, {
    defaultValue: currentBook.author,
  });
 
  const translatedDescription = tBooks(`items.${currentBook.id}.description`, {
    defaultValue: currentBook.description,
  });
 
  const translatedCategory = tBooks(`categoryNames.${currentBook.category}`, {
    defaultValue: currentBook.category,
  });
 
  return (
<section className="bg-[var(--color-background)] py-20">
<Container>
<SectionTitle
          eyebrow={t('featured.eyebrow')}
          title={t('featured.title')}
          description={t('featured.description')}
          align="center"
        />
 
        <div className="mx-auto mt-10 w-full overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-lg">
<div className="relative min-h-[520px] overflow-hidden">
<Image
              src={currentBook.image}
              alt={translatedTitle}
              fill
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover"
            />
 
            <div className="absolute inset-0 bg-[var(--color-slider-overlay)]" />
 
            <button
              type="button"
              onClick={() => router.push(`/livres/${currentBook.id}`)}
              className="absolute inset-0 z-10 cursor-pointer"
              aria-label={`${t('featured.viewBook')} ${translatedTitle}`}
            />
 
            <div className="pointer-events-none relative z-20 flex min-h-[520px] flex-col justify-end p-6 sm:p-10">
<p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-secondary)]">
                {translatedCategory}
</p>
 
              <h3 className="mt-3 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
                {translatedTitle}
</h3>
 
              <p className="mt-2 text-base text-slate-200">
                {translatedAuthor}
</p>
 
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-200">
                {translatedDescription}
</p>
 
              <div className="mt-6 flex flex-wrap items-center gap-4">
<span className="rounded-full bg-white/90 px-5 py-2 text-sm font-bold text-[var(--color-primary)]">
                  {formatPrice(currentBook.price, i18n.language)}
</span>
 
                <span className="rounded-full bg-[var(--color-secondary)] px-6 py-3 text-sm font-semibold text-white">
                  {t('featured.viewBook')}
</span>
</div>
 
              <div className="pointer-events-auto mt-8 flex flex-wrap items-center justify-between gap-4">
<button
                  type="button"
                  onClick={showPreviousBook}
                  className="rounded-full border border-white/40 bg-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/25"
>
                  {t('featured.previous')}
</button>
 
                <div className="flex gap-2">
                  {featuredBooks.map((book, index) => (
<button
                      key={book.id}
                      type="button"
                      aria-label={`${t('featured.showBook')} ${book.title}`}
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
                  {t('featured.next')}
</button>
</div>
</div>
</div>
</div>
</Container>
</section>
  );
}