import Link from 'next/link';
import Logo from '@/components/common/Logo';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-footer)] text-[var(--color-footer-text)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo variant="light" />

          <p className="mt-4 max-w-md text-sm leading-6 text-[var(--color-footer-muted)]">
            Best OfferBook est une librairie en ligne qui propose des livres
            variés, accessibles et soigneusement sélectionnés pour accompagner
            vos moments de lecture.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-footer-text)]">
            Catégories
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-[var(--color-footer-muted)]">
            <li>Romans</li>
            <li>Développement personnel</li>
            <li>Finance personnelle</li>
            <li>Relations humaines</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-footer-text)]">
            Informations
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-[var(--color-footer-muted)]">
            <li>
              <Link
                href="/contact"
                className="transition hover:text-[var(--color-footer-text)]"
              >
                Nous contacter
              </Link>
            </li>
            <li>Ottawa, Canada</li>
            <li>support@bestofferbook.com</li>
            <li>Livraison et offres à venir</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-[var(--color-footer-muted)]">
        © 2026 Best OfferBook. Tous droits réservés.
      </div>
    </footer>
  );
}