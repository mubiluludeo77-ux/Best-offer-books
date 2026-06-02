import Image from 'next/image';
import { CartItem } from '@/types/cart';

type CartItemCardProps = {
  item: CartItem;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
};

export default function CartItemCard({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemCardProps) {
  return (
    <article className="grid gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-sm sm:grid-cols-[120px_1fr]">
      <div className="relative h-40 overflow-hidden rounded-xl bg-[var(--color-background)] sm:h-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="120px"
          className="object-cover"
        />
      </div>

      <div>
        <h3 className="text-lg font-bold text-[var(--color-primary)]">
          {item.title}
        </h3>

        <p className="mt-1 text-sm text-[var(--color-muted)]">
          {item.variantLabel}
        </p>

        <p className="mt-3 font-semibold text-[var(--color-primary)]">
          {item.unitPrice.toFixed(2)} $
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => onDecrease(item.id)}
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 font-bold text-[var(--color-primary)] transition hover:bg-[var(--color-hover)]"
          >
            -
          </button>

          <span className="min-w-8 text-center font-semibold text-[var(--color-primary)]">
            {item.quantity}
          </span>

          <button
            type="button"
            onClick={() => onIncrease(item.id)}
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 font-bold text-[var(--color-primary)] transition hover:bg-[var(--color-hover)]"
          >
            +
          </button>

          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className="ml-auto text-sm font-semibold text-[var(--color-danger)] transition hover:opacity-80"
          >
            Supprimer
          </button>
        </div>
      </div>
    </article>
  );
}