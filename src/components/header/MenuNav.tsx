import { FaShoppingCart } from 'react-icons/fa';
import { navItems, PageName } from '@/data/navItems';

type MenuNavProps = {
  activePage?: PageName;
  onChangePage?: (page: PageName) => void;
  cartItemsCount: number;
  className?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
};

export default function MenuNav({
  activePage,
  onChangePage,
  cartItemsCount,
  className = '',
  linkClassName = '',
  onLinkClick,
}: MenuNavProps) {
  function handleClick(page: PageName) {
    onChangePage?.(page);
    onLinkClick?.();
  }

  return (
    <nav className={className}>
      {navItems.map((item) => {
        const isActive = activePage === item.page;
        const isCart = item.page === 'panier';

        return (
          <button
            key={item.page}
            type="button"
            onClick={() => handleClick(item.page)}
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

            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}