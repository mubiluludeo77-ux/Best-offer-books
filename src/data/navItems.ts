export type PageName = 'accueil' | 'livres' | 'categories' | 'contact';
 
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

] satisfies {

  label: string;

  page: PageName;

  href: string;

}[];
 