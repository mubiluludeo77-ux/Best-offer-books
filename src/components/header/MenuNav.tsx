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
              className={`transition-colors hover:text-slate-950 ${
                activePage === item.page
                  ? 'font-semibold text-slate-950'
                  : 'text-slate-700'
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