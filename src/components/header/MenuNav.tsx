'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { navItems } from '@/data/navItems';
import { useCart } from '@/context/CartContext';

type MenuNavProps = {
  className?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
};

function CartIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="9" cy="20" r="1" />
      <circle cx="19" cy="20" r="1" />

      <path d="M3 4h2l2.4 10.3a2 2 0 0 0 2 1.7h7.7a2 2 0 0 0 2-1.6L21 7H6" />
    </svg>
  );
}

export default function MenuNav({
  className = '',
  linkClassName = '',
  onLinkClick,
}: MenuNavProps) {
  const pathname = usePathname();

  const { t } = useTranslation('header');

  const { cartItemsCount } = useCart();

  return (
    <nav className={className}>
      {navItems.map((item) => {
        const isActive =
          pathname === item.href;

        const isCart =
          item.page === 'panier';

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onLinkClick}
            className={`${linkClassName} relative flex items-center gap-2 transition ${
              isActive
                ? 'text-[var(--color-secondary)]'
                : 'text-[var(--color-primary)] hover:text-[var(--color-secondary)]'
            }`}
          >
            {isCart && (
              <span className="relative inline-flex">
                <CartIcon />

                {cartItemsCount > 0 && (
                  <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--color-secondary)] px-1 text-xs font-bold text-white">
                    {cartItemsCount}
                  </span>
                )}
              </span>
            )}

            <span>
              {t(item.translationKey)}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}