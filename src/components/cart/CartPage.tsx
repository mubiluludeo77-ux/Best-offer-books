'use client';

import Link from 'next/link';
import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';
import CartItemCard from '@/components/cart/CartItemCard';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  return (
    <main className="bg-[var(--color-background)] py-20">
      <Container>
        <SectionTitle
          eyebrow="Panier"
          title="Votre panier"
          description="Retrouvez les livres que vous avez ajoutés avant de passer à l'achat."
        />
        {cartItems.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center shadow-sm">
            <p className="text-[var(--color-muted)]">
              Votre panier est vide pour le moment.
            </p>
            <Link
              href="/livres"
              className="mt-6 inline-block rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-surface)] transition hover:opacity-90"
            >
              Voir les livres
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="space-y-5">
              {cartItems.map((item) => (
                <CartItemCard
                  key={item.id}
                  item={item}
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </div>
            <aside className="h-fit rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[var(--color-primary)]">
                Résumé
              </h2>
              <div className="mt-6 flex justify-between text-sm">
                <span className="text-[var(--color-muted)]">Total</span>
                <span className="font-bold text-[var(--color-primary)]">
                  {total.toFixed(2)} $
                </span>
              </div>
              <button
                type="button"
                className="mt-6 w-full rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-surface)] transition hover:opacity-90"
              >
                Passer à l&apos;achat
              </button>
              <Link
                href="/livres"
                className="mt-4 block w-full rounded-full border border-[var(--color-border)] px-6 py-3 text-center text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-hover)]"
              >
                Voir d&apos;autres livres
              </Link>
            </aside>
          </div>
        )}
      </Container>
    </main>
  );
}