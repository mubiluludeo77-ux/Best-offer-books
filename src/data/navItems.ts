// Pages disponibles dans la navigation SPA
export type PageName =
  | 'accueil'
  | 'livres'
  | 'categories'
  | 'contact'
  | 'panier'
  | 'detailLivre';

// Liens affichés dans le menu de navigation
export const navItems = [
  {
    label: 'Accueil',
    page: 'accueil',
    href: '/',
  },
  {
    label: 'Livres',
    page: 'livres',
    href: '/livres',
  },
  {
    label: 'Catégories',
    page: 'categories',
    href: '/categories',
  },
  {
    label: 'Contact',
    page: 'contact',
    href: '/contact',
  },
  {
    label: 'Panier',
    page: 'panier',
    href: '/panier',
  },
] satisfies {
  label: string;
  page: PageName;
  href: string;
}[];