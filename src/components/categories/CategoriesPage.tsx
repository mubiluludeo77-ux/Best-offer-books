'use client';
 
import { useTranslation } from 'react-i18next';
 
import { books } from '@/data/books';

import { categories } from '@/data/categories';

import BookCard from '@/components/books/BookCard';

import Container from '@/components/common/Container';

import SectionTitle from '@/components/common/SectionTitle';
 
export default function CategoriesPage() {

  const { t } = useTranslation('categories');
 
  function scrollBooksRow(categoryId: number, direction: 'left' | 'right') {

    const row = document.getElementById(`category-row-${categoryId}`);
 
    if (!row) {

      return;

    }
 
    row.scrollBy({

      left: direction === 'right' ? row.clientWidth : -row.clientWidth,

      behavior: 'smooth',

    });

  }
 
  return (
<main className="bg-[var(--color-background)] py-20">
<Container>
<SectionTitle

          eyebrow={t('page.eyebrow')}

          title={t('page.title')}

          description={t('page.description')}

        />
 
        <div className="mt-12 space-y-16">

          {categories.map((category) => {

            const categoryBooks = books.filter(

              (book) => book.category === category.bookCategory

            );
 
            const categoryName = t(`items.${category.id}.name`, {

              defaultValue: category.name,

            });
 
            const categoryDescription = t(`items.${category.id}.description`, {

              defaultValue: category.description,

            });
 
            return (
<section key={category.id}>
<div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div>
<h2 className="text-2xl font-bold text-[var(--color-primary)]">

                      {categoryName}
</h2>
 
                    <p className="mt-2 text-sm text-[var(--color-muted)]">

                      {categoryDescription}
</p>
</div>
 
                  {categoryBooks.length > 1 && (
<div className="flex gap-2">
<button

                        type="button"

                        onClick={() => scrollBooksRow(category.id, 'left')}

                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-lg font-bold text-[var(--color-primary)] shadow-sm transition hover:bg-[var(--color-hover)]"

                        aria-label={`${t('scroll.left')} ${categoryName}`}
>

                        ←
</button>
 
                      <button

                        type="button"

                        onClick={() => scrollBooksRow(category.id, 'right')}

                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-lg font-bold text-[var(--color-primary)] shadow-sm transition hover:bg-[var(--color-hover)]"

                        aria-label={`${t('scroll.right')} ${categoryName}`}
>

                        →
</button>
</div>

                  )}
</div>
 
                {categoryBooks.length > 0 ? (
<div

                    id={`category-row-${category.id}`}

                    className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pb-4 sm:mx-0 sm:px-0"
>

                    {categoryBooks.map((book) => (
<div

                        key={book.id}

                        className="w-[82vw] max-w-[320px] flex-none snap-center sm:w-[280px] sm:snap-start"
>
<BookCard book={book} />
</div>

                    ))}
</div>

                ) : (
<p className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-sm text-[var(--color-muted)]">

                    {t('page.empty')}
</p>

                )}
</section>

            );

          })}
</div>
</Container>
</main>

  );

}
 