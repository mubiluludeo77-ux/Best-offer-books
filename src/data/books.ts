import { Book } from '@/types/book';

export const books: Book[] = [
  {
    id: 1,
    title: 'La femme de ménage',
    author: 'Freida McFadden',
    price: 24.99,
    image: '/images/books/femme-menage-series.webp',
    category: 'Roman',
    description:
      'Un roman captivant rempli de secrets, de tension et de rebondissements.',
    featured: true,
    variants: [
      {
        id: 'papier',
        label: 'Format papier',
        price: 24.99,
      },
      {
        id: 'numerique',
        label: 'Format numérique',
        price: 14.99,
      },
    ],
  },

  {
    id: 2,
    title: "La psychologie de l'argent",
    author: 'Morgan Housel',
    price: 29.99,
    image: '/images/books/psychologie-argent.webp',
    category: 'Finance personnelle',
    description:
      "Un livre essentiel pour mieux comprendre notre rapport à l'argent.",
    featured: true,
    variants: [
      {
        id: 'papier',
        label: 'Format papier',
        price: 29.99,
      },
      {
        id: 'audio',
        label: 'Format audio',
        price: 18.99,
      },
    ],
  },

  {
    id: 3,
    title: "Aime-toi et la vie t'aimera",
    author: 'Catherine Bensaid',
    price: 22.99,
    image: '/images/books/aime-toi-vie-aimera.webp',
    category: 'Développement personnel',
    description:
      "Un ouvrage inspirant pour apprendre à mieux s'accepter.",
    featured: true,
    variants: [
      {
        id: 'papier',
        label: 'Format papier',
        price: 22.99,
      },
      {
        id: 'numerique',
        label: 'Format numérique',
        price: 12.99,
      },
    ],
  },

  {
    id: 4,
    title: "Pourquoi on ne se dit plus je t'aime",
    author: 'Auteur inconnu',
    price: 19.99,
    image: '/images/books/pourquoi-plus-dire-je-taime.webp',
    category: 'Relation',
    description:
      'Un livre autour des émotions, du silence et des relations humaines.',
    featured: true,
    variants: [
      {
        id: 'papier',
        label: 'Format papier',
        price: 19.99,
      },
    ],
  },
];

export const featuredBooks = books.filter((book) => book.featured);