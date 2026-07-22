'use client';
 
import { useState } from 'react';

import Image from 'next/image';

import { useRouter } from 'next/navigation';

import { useTranslation } from 'react-i18next';
 
import { Book, BookVariant } from '@/types/book';

import Container from '@/components/common/Container';

import { useCart } from '@/context/CartContext';
 
type LivreDetailPageProps = {

  book: Book;

};
 
export default function LivreDetailPage({ book }: LivreDetailPageProps) {

  const router = useRouter();

  const { addToCart } = useCart();

  const { t } = useTranslation('books');
 
  const [selectedVariantId, setSelectedVariantId] = useState(

    book.variants[0].id

  );
 
  const selectedVariant =

    book.variants.find((variant) => variant.id === selectedVariantId) ||

    book.variants[0];
 
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
 
  function getVariantLabel(variant: BookVariant) {

    return t(`items.${book.id}.variants.${variant.id}`, {

      defaultValue: t(`variants.${variant.id}`, {

        defaultValue: variant.label,

      }),

    });

  }
 
  function handleAddToCart(variant: BookVariant) {

    addToCart(book, variant);

    router.push('/panier');

  }
 
  return (
<main className="bg-[var(--color-background)] py-20">
<Container className="grid gap-10 lg:grid-cols-2">
<div className="relative h-[380px] overflow-hidden rounded-3xl bg-[var(--color-surface)] shadow-sm sm:h-[520px]">
<Image

            src={book.image}

            alt={title}

            fill

            sizes="(max-width: 1024px) 100vw, 50vw"

            className="object-cover"

          />
</div>
 
        <div>
<button

            type="button"

            onClick={() => router.back()}

            className="mb-6 text-sm font-semibold text-[var(--color-secondary)] transition hover:opacity-80"
>

            {t('detail.back')}
</button>
 
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-secondary)]">

            {category}
</p>
 
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-primary)]">

            {title}
</h1>
 
          <p className="mt-2 text-lg text-[var(--color-muted)]">{author}</p>
 
          <p className="mt-6 text-base leading-7 text-[var(--color-muted)]">

            {description}
</p>
 
          <p className="mt-6 text-2xl font-bold text-[var(--color-primary)]">

            {selectedVariant.price.toFixed(2)} $
</p>
 
          <div className="mt-8">
<h2 className="text-lg font-bold text-[var(--color-primary)]">

              {t('detail.variantsTitle')}
</h2>
 
            <div className="mt-4 flex flex-wrap gap-3">

              {book.variants.map((variant) => {

                const isSelected = selectedVariant.id === variant.id;
 
                return (
<button

                    key={variant.id}

                    type="button"

                    onClick={() => setSelectedVariantId(variant.id)}

                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${

                      isSelected

                        ? 'border-[var(--color-secondary)] bg-[var(--color-secondary)] text-white shadow-md'

                        : 'border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] hover:bg-[var(--color-hover)]'

                    }`}
>

                    {isSelected ? '✓ ' : ''}

                    {getVariantLabel(variant)}
</button>

                );

              })}
</div>
</div>
 
          <button

            type="button"

            onClick={() => handleAddToCart(selectedVariant)}

            className="mt-8 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-surface)] transition hover:opacity-90"
>

            {t('detail.addToCart')}
</button>
</div>
</Container>
</main>

  );

}
 