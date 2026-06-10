import Logo from '@/components/common/Logo';
import MenuNav from '@/components/header/MenuNav';
import MobileMenu from '@/components/header/MobileMenu';
import { PageName } from '@/data/navItems';

type HeaderProps = {
  activePage?: PageName;
  onChangePage?: (page: PageName) => void;
  cartItemsCount: number;
};

export default function Header({
  activePage,
  onChangePage,
  cartItemsCount,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo onClick={() => onChangePage?.('accueil')} />

        <div className="hidden md:block">
          <MenuNav
            activePage={activePage}
            onChangePage={onChangePage}
            cartItemsCount={cartItemsCount}
            className="flex items-center gap-6 text-sm font-medium"
          />
        </div>

        <MobileMenu
          activePage={activePage}
          onChangePage={onChangePage}
          cartItemsCount={cartItemsCount}
        />
      </div>
    </header>
  );
}