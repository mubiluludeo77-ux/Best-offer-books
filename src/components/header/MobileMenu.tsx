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
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md border border-slate-300 p-2 text-slate-700"
        aria-label="Ouvrir ou fermer le menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="text-2xl leading-none">
          {isMenuOpen ? '×' : '☰'}
        </span>
      </button>

      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-slate-200 bg-white px-6 py-4 shadow-sm">
          <MenuNav
            activePage={activePage}
            onChangePage={onChangePage}
            className="flex flex-col gap-4 text-sm font-medium"
            linkClassName="block text-left"
            onLinkClick={() => setIsMenuOpen(false)}
          />
        </div>
      )}
    </div>
  );
}