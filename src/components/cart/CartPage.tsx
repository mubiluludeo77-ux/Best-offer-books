'use client';
 
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
 
import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/formatPrice';
 
export default function CartPage() {
  const { t, i18n } = useTranslation('cart');
  const { t: tBooks } = useTranslation('books');
 
  const {
    cartItems,
    cartItemsCount,
    cartTotal,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();
 
  return (
<main className="bg-[var(--color-background)] py-20">
<Container>
<SectionTitle
          eyebrow={t('page.eyebrow')}
          title={t('page.title')}
          description={t('page.description')}
        />
 
        {cartItems.length === 0 ? (
<div className="mt-10 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-10 text-center shadow-sm">
<p className="text-lg font-semibold text-[var(--color-primary)]">
              {t('page.empty')}
</p>
 
            <Link
              href="/livres"
              className="mt-6 inline-flex rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-surface)] transition hover:opacity-90"
>
              {t('page.continueShopping')}
</Link>
</div>
        ) : (
<div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
<section className="space-y-5">
              {cartItems.map((item) => {
                const title = tBooks(`items.${item.book.id}.title`, {
                  defaultValue: item.book.title,
                });
 
                const author = tBooks(`items.${item.book.id}.author`, {
                  defaultValue: item.book.author,
                });
 
                const variantLabel = tBooks(
                  `items.${item.book.id}.variants.${item.variant.id}`,
                  {
                    defaultValue: tBooks(`variants.${item.variant.id}`, {
                      defaultValue: item.variant.label,
                    }),
                  }
                );
 
                return (
<article
                    key={item.id}
                    className="grid gap-5 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-sm sm:grid-cols-[120px_1fr]"
>
<div className="relative h-40 overflow-hidden rounded-2xl bg-[var(--color-background)] sm:h-full">
<Image
                        src={item.book.image}
                        alt={title}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
</div>
 
                    <div>
<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
<div>
<h2 className="text-xl font-bold text-[var(--color-primary)]">
                            {title}
</h2>
 
                          <p className="mt-1 text-sm text-[var(--color-muted)]">
                            {author}
</p>
 
                          <p className="mt-2 text-sm text-[var(--color-muted)]">
                            {t('item.format')} : {variantLabel}
</p>
</div>
 
                        <p className="text-lg font-bold text-[var(--color-primary)]">
                          {formatPrice(
                            item.variant.price * item.quantity,
                            i18n.language
                          )}
</p>
</div>
 
                      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="text-sm font-semibold text-[var(--color-muted)]">
                            {t('item.quantity')}
</span>
 
                          <div className="flex items-center overflow-hidden rounded-full border border-[var(--color-border)]">
<button
                              type="button"
                              onClick={() => decreaseQuantity(item.id)}
                              aria-label={t('item.decrease')}
                              className="px-4 py-2 text-[var(--color-primary)] transition hover:bg-[var(--color-hover)]"
>
                              −
</button>
 
                            <span className="min-w-10 px-3 py-2 text-center text-sm font-bold text-[var(--color-primary)]">
                              {item.quantity}
</span>
 
                            <button
                              type="button"
                              onClick={() => increaseQuantity(item.id)}
                              aria-label={t('item.increase')}
                              className="px-4 py-2 text-[var(--color-primary)] transition hover:bg-[var(--color-hover)]"
>
                              +
</button>
</div>
</div>
 
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-sm font-semibold text-[var(--color-danger)] transition hover:opacity-80"
>
                          {t('item.remove')}
</button>
</div>
</div>
</article>
                );
              })}
</section>
 
            <aside className="h-fit rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
<h2 className="text-xl font-bold text-[var(--color-primary)]">
                {t('summary.title')}
</h2>
 
              <div className="mt-6 space-y-4 text-sm text-[var(--color-muted)]">
<div className="flex justify-between gap-4">
<span>{t('summary.items')}</span>
<span>{cartItemsCount}</span>
</div>
 
                <div className="flex justify-between gap-4">
<span>{t('summary.subtotal')}</span>
<span>{formatPrice(cartTotal, i18n.language)}</span>
</div>
 
                <div className="border-t border-[var(--color-border)] pt-4">
<div className="flex justify-between gap-4 text-lg font-bold text-[var(--color-primary)]">
<span>{t('summary.total')}</span>
<span>{formatPrice(cartTotal, i18n.language)}</span>
</div>
</div>
</div>
 
              <button
                type="button"
                className="mt-6 w-full rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-surface)] transition hover:opacity-90"
>
                {t('summary.checkout')}
</button>
 
              <button
                type="button"
                onClick={clearCart}
                className="mt-3 w-full rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-hover)]"
>
                {t('summary.clear')}
</button>
 
              <p className="mt-4 text-center text-xs leading-5 text-[var(--color-muted)]">
                {t('summary.note')}
</p>
</aside>
</div>
        )}
</Container>
</main>
  );
}