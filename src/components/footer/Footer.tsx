import Link from 'next/link';
import Logo from '@/components/common/Logo';
import { navItems } from '@/data/navItems';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
            Best OfferBook vous aide à découvrir des livres inspirants,
            accessibles et adaptés à vos envies de lecture.
          </p>
        </div>

        <nav aria-label="Navigation du pied de page">
          <ul className="flex flex-wrap gap-4 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-slate-600 transition hover:text-slate-950"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-500">
        © 2026 Best OfferBook. Tous droits réservés.
      </div>
    </footer>
  );
}