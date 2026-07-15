export type PageName =
  | 'accueil'
  | 'livres'
  | 'categories'
  | 'contact'
  | 'panier'
  | 'detailLivre';

export const navItems = [
  {
    label: 'Accueil',
    translationKey: 'nav.home',
    page: 'accueil',
    href: '/',
  },
  {
    label: 'Livres',
    translationKey: 'nav.books',
    page: 'livres',
    href: '/livres',
  },
  {
    label: 'Catégories',
    translationKey: 'nav.categories',
    page: 'categories',
    href: '/categories',
  },
  {
    label: 'Contact',
    translationKey: 'nav.contact',
    page: 'contact',
    href: '/contact',
  },
  {
    label: 'Panier',
    translationKey: 'nav.cart',
    page: 'panier',
    href: '/panier',
  },
] satisfies {
  label: string;
  translationKey: string;
  page: PageName;
  href: string;
}[];