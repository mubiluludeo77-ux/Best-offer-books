'use client';
 
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { FaShoppingCart } from 'react-icons/fa';
 
import { navItems } from '@/data/navItems';
import { useCart } from '@/context/CartContext';
 
type MenuNavProps = {
  className?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
};
 
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
        const isActive = pathname === item.href;
        const isCart = item.page === 'panier';
 
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
<FaShoppingCart className="text-lg" />
 
                {cartItemsCount > 0 && (
<span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--color-secondary)] px-1 text-xs font-bold text-white">
                    {cartItemsCount}
</span>
                )}
</span>
            )}
 
            <span>{t(item.translationKey)}</span>
</Link>
        );
      })}
</nav>
  );
}