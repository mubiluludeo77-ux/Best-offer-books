import Link from "next/link";
import Logo from "@/components/common/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />

          <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
            Best OfferBook est une librairie en ligne qui propose des livres
            variés, accessibles et soigneusement sélectionnés pour accompagner
            vos moments de lecture.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Catégories
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>Romans</li>
            <li>Développement personnel</li>
            <li>Finance personnelle</li>
            <li>Relations humaines</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Informations
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>
              <Link href="/contact" className="hover:text-white">
                Nous contacter
              </Link>
            </li>
            <li>Ottawa, Canada</li>
            <li>support@bestofferbook.com</li>
            <li>Livraison et offres à venir</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 px-6 py-5 text-center text-sm text-slate-500">
        © 2026 Best OfferBook. Tous droits réservés.
      </div>
    </footer>
  );
}