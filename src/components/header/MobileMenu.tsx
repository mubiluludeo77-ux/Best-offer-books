'use client';

import { useState } from 'react';
import MenuNav from '@/components/header/MenuNav';
import { PageName } from '@/data/navItems';

type MobileMenuProps = {
  activePage?: PageName;
  onChangePage?: (page: PageName) => void;
};

export default function MobileMenu({
  activePage,
  onChangePage,
}: MobileMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative z-50 md:hidden">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] p-2 text-[var(--color-primary)] shadow-sm"
        aria-label="Ouvrir ou fermer le menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="text-2xl leading-none">
          {isMenuOpen ? '×' : '☰'}
        </span>
      </button>

      {isMenuOpen && (
        <>
          <button
            type="button"
            aria-label="Fermer le menu"
            className="fixed inset-0 z-40 bg-transparent"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="absolute right-0 top-12 z-50 w-56 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-xl">
            <MenuNav
              activePage={activePage}
              onChangePage={onChangePage}
              className="flex flex-col gap-1 text-sm font-semibold"
              linkClassName="block w-full rounded-xl px-4 py-3 text-left hover:bg-[var(--color-hover)]"
              onLinkClick={() => setIsMenuOpen(false)}
            />
          </div>
        </>
      )}
    </div>
  );
}