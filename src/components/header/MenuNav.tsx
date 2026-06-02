import { navItems, PageName } from '@/data/navItems';

type MenuNavProps = {
  activePage?: PageName;
  onChangePage?: (page: PageName) => void;
  className?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
};

export default function MenuNav({
  activePage,
  onChangePage,
  className = '',
  linkClassName = '',
  onLinkClick,
}: MenuNavProps) {
  return (
    <nav aria-label="Navigation principale">
      <ul className={className}>
        {navItems.map((item) => (
          <li key={item.page}>
            <button
              type="button"
              onClick={() => {
                onChangePage?.(item.page);
                onLinkClick?.();
              }}
              className={`transition hover:text-[var(--color-primary)] ${
                activePage === item.page
                  ? 'font-semibold text-[var(--color-primary)]'
                  : 'text-[var(--color-muted)]'
              } ${linkClassName}`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}