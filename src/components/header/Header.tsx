import Logo from '@/components/common/Logo';
import MenuNav from '@/components/header/MenuNav';
import MobileMenu from '@/components/header/MobileMenu';
import ThemeToggle from '@/components/header/ThemeToggle';
import LanguageSwitcher from '@/components/header/LanguageSwitcher';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <MenuNav className="flex items-center gap-6 text-sm font-medium" />
          </div>

          <LanguageSwitcher />
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}