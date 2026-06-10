import { Book } from '@/types/book';

// Liste des livres affichés dans le site
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
    description: "Un ouvrage inspirant pour apprendre à mieux s'accepter.",
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
  {
    id: 5,
    title: 'One Piece',
    author: 'Eiichiro Oda',
    price: 16.99,
    image: '/images/books/one-piece.webp',
    category: 'Manga',
    description:
      "Un manga d'aventure incontournable qui suit Luffy et son équipage dans leur quête du trésor ultime.",
    featured: true,
    variants: [
      {
        id: 'papier',
        label: 'Format papier',
        price: 16.99,
      },
      {
        id: 'collector',
        label: 'Édition collector',
        price: 24.99,
      },
    ],
  },

  // ── Nouveaux livres ──────────────────────────────────────────────────────────

  // Mangas
  {
    id: 6,
    title: 'Death Note',
    author: 'Tsugumi Ohba',
    price: 14.99,
    image: '/images/books/Death_Note_manga.webp',
    category: 'Manga',
    description:
      'Un thriller psychologique haletant où un lycéen obtient un cahier capable de tuer quiconque dont il écrit le nom.',
    featured: false,
    variants: [
      {
        id: 'papier',
        label: 'Format papier',
        price: 14.99,
      },
      {
        id: 'collector',
        label: 'Édition collector',
        price: 22.99,
      },
    ],
  },
  {
    id: 7,
    title: 'Jujutsu Kaisen',
    author: 'Gege Akutami',
    price: 13.99,
    image: '/images/books/Jujutsu_Kaisen_manga.webp',
    category: 'Manga',
    description:
      "Un shōnen d'action intense où des sorciers affrontent des esprits maléfiques dans un monde caché du grand public.",
    featured: false,
    variants: [
      {
        id: 'papier',
        label: 'Format papier',
        price: 13.99,
      },
    ],
  },
  {
    id: 8,
    title: 'My Hero Academia',
    author: 'Kōhei Horikoshi',
    price: 13.99,
    image: '/images/books/My_hero_academia_manga.webp',
    category: 'Manga',
    description:
      "Dans un monde où presque tout le monde possède un super-pouvoir, un jeune garçon sans don rêve de devenir le plus grand héros.",
    featured: false,
    variants: [
      {
        id: 'papier',
        label: 'Format papier',
        price: 13.99,
      },
    ],
  },
  {
    id: 9,
    title: 'Nana',
    author: 'Ai Yazawa',
    price: 12.99,
    image: '/images/books/Nana_manga.webp',
    category: 'Manga',
    description:
      "L'histoire croisée de deux jeunes femmes prénommées Nana qui se rencontrent par hasard et partagent un appartement à Tokyo.",
    featured: false,
    variants: [
      {
        id: 'papier',
        label: 'Format papier',
        price: 12.99,
      },
    ],
  },
  {
    id: 10,
    title: 'Fullmetal Alchemist',
    author: 'Hiromu Arakawa',
    price: 15.99,
    image: '/images/books/Fullmetal_Alchemist_manga.webp',
    category: 'Manga',
    description:
      "Deux frères alchimistes cherchent la Pierre Philosophale pour retrouver leurs corps perdus lors d'un rituel interdit.",
    featured: false,
    variants: [
      {
        id: 'papier',
        label: 'Format papier',
        price: 15.99,
      },
      {
        id: 'collector',
        label: 'Édition Fullmetal',
        price: 27.99,
      },
    ],
  },

  // Romans
  {
    id: 11,
    title: 'Le mariage parfait',
    author: 'Jeneva Rose',
    price: 22.99,
    image: '/images/books/Le_mariage_parfait.webp',
    category: 'Roman',
    description:
      "Sa maîtresse a été assassinée. Sa femme est son seul espoir. Un thriller conjugal à couper le souffle.",
    featured: false,
    variants: [
      {
        id: 'papier',
        label: 'Format papier',
        price: 22.99,
      },
      {
        id: 'numerique',
        label: 'Format numérique',
        price: 13.99,
      },
    ],
  },
  {
    id: 12,
    title: '14 ans et portée disparue',
    author: 'Arielle Desabysses',
    price: 19.99,
    image: '/images/books/14_ans_et_portee_disparue.webp',
    category: 'Roman',
    description:
      "Le récit poignant d'une adolescente portée disparue et des conséquences dévastatrices sur sa famille et ses proches.",
    featured: false,
    variants: [
      {
        id: 'papier',
        label: 'Format papier',
        price: 19.99,
      },
      {
        id: 'numerique',
        label: 'Format numérique',
        price: 11.99,
      },
    ],
  },
  {
    id: 13,
    title: 'La fin est révélée',
    author: 'Auteur inconnu',
    price: 18.99,
    image: '/images/books/La_fin_est_revelee.webp',
    category: 'Roman',
    description:
      "Un roman aux multiples rebondissements où la vérité éclate dans les dernières pages de façon totalement inattendue.",
    featured: false,
    variants: [
      {
        id: 'papier',
        label: 'Format papier',
        price: 18.99,
      },
    ],
  },

  // Développement personnel
  {
    id: 14,
    title: "L'ego est l'ennemi",
    author: 'Ryan Holiday',
    price: 21.99,
    image: '/images/books/L_ego_est_l_ennemi.webp',
    category: 'Développement personnel',
    description:
      "Un guide incisif pour comprendre comment l'ego sabote nos ambitions, nos succès et nos relations.",
    featured: false,
    variants: [
      {
        id: 'papier',
        label: 'Format papier',
        price: 21.99,
      },
      {
        id: 'numerique',
        label: 'Format numérique',
        price: 13.99,
      },
    ],
  },
  {
    id: 15,
    title: 'La femme puissante',
    author: 'Auteur inconnu',
    price: 20.99,
    image: '/images/books/La_femme_puissante.webp',
    category: 'Développement personnel',
    description:
      "Un livre inspirant dédié aux femmes qui souhaitent libérer leur plein potentiel et s'affirmer dans tous les domaines de leur vie.",
    featured: false,
    variants: [
      {
        id: 'papier',
        label: 'Format papier',
        price: 20.99,
      },
    ],
  },

  // Finance
  {
    id: 16,
    title: "L'autoroute du millionnaire",
    author: 'MJ DeMarco',
    price: 26.99,
    image: '/images/books/L_autoroute_du_millionnaire.webp',
    category: 'Finance personnelle',
    description:
      "Une approche radicale de la création de richesse qui remet en question la sagesse financière conventionnelle.",
    featured: false,
    variants: [
      {
        id: 'papier',
        label: 'Format papier',
        price: 26.99,
      },
      {
        id: 'audio',
        label: 'Format audio',
        price: 17.99,
      },
    ],
  },
  {
    id: 17,
    title: 'Penser comme un millionnaire',
    author: 'Dean Graziosi',
    price: 24.99,
    image: '/images/books/Penser_comme_un_millionnaire.webp',
    category: 'Finance personnelle',
    description:
      "Changer ses habitudes pour réussir et être heureux — les secrets mentaux des personnes qui ont bâti leur fortune.",
    featured: false,
    variants: [
      {
        id: 'papier',
        label: 'Format papier',
        price: 24.99,
      },
      {
        id: 'numerique',
        label: 'Format numérique',
        price: 15.99,
      },
    ],
  },
  {
    id: 18,
    title: '100 conseils pour mieux gérer votre argent',
    author: 'Olivier Decarre',
    price: 19.99,
    image: '/images/books/100_conseils_pour_mieux_gerer_votre_argent.webp',
    category: 'Finance personnelle',
    description:
      "Un guide pratique couvrant immobilier, épargne, impôts, assurance vie et gestion familiale des finances.",
    featured: false,
    variants: [
      {
        id: 'papier',
        label: 'Format papier',
        price: 19.99,
      },
    ],
  },
  {
    id: 19,
    title: 'Become Your Own Financial Advisor',
    author: 'Warren Ingram',
    price: 27.99,
    image: '/images/books/Become_your_own_financial_advisor.webp',
    category: 'Finance personnelle',
    description:
      "The real secrets to becoming financially independent — a no-nonsense guide to taking control of your financial future.",
    featured: false,
    variants: [
      {
        id: 'papier',
        label: 'Format papier',
        price: 27.99,
      },
      {
        id: 'numerique',
        label: 'Format numérique',
        price: 16.99,
      },
    ],
  },
  {
    id: 20,
    title: 'Money Is Everything',
    author: 'Amanda Holden',
    price: 28.99,
    image: '/images/books/Money_Is_Everything_Personal_Finance_For_The_Brave_Economy.webp',
    category: 'Finance personnelle',
    description:
      "Personal finance for the brave economy — un guide moderne et accessible pour naviguer les finances personnelles avec audace.",
    featured: false,
    variants: [
      {
        id: 'papier',
        label: 'Format papier',
        price: 28.99,
      },
      {
        id: 'audio',
        label: 'Format audio',
        price: 18.99,
      },
    ],
  },

  // Relations
  {
    id: 21,
    title: 'Qui épouser',
    author: 'Magloire K. Agbegnido',
    price: 17.99,
    image: '/images/books/Qui_epouser.webp',
    category: 'Relation',
    description:
      "10 clés essentielles pour faire un bon choix de conjoint et bâtir une relation amoureuse solide et durable.",
    featured: false,
    variants: [
      {
        id: 'papier',
        label: 'Format papier',
        price: 17.99,
      },
      {
        id: 'numerique',
        label: 'Format numérique',
        price: 10.99,
      },
    ],
  },
  {
    id: 22,
    title: "L'art de faire l'amour à un homme",
    author: 'Linda Lou Paget',
    price: 18.99,
    image: '/images/books/L_art_de_faire_l_amour_a_un_homme.webp',
    category: 'Relation',
    description:
      "Découvrez les multiples facettes du plaisir masculin dans ce guide intime et bienveillant signé Linda Lou Paget.",
    featured: false,
    variants: [
      {
        id: 'papier',
        label: 'Format papier',
        price: 18.99,
      },
    ],
  },
  {
    id: 23,
    title: 'Coaching pour les humanitaires, expatriés et conjoints accompagnants',
    author: 'Nancy Bonamy',
    price: 23.99,
    image: '/images/books/Coaching_pour_les_humanitaires_expatries_et_conjoints_accompagnants.webp',
    category: 'Développement personnel',
    description:
      "Un accompagnement sur mesure pour les personnes vivant à l'étranger : trouver sa place, surmonter les défis et s'épanouir.",
    featured: false,
    variants: [
      {
        id: 'papier',
        label: 'Format papier',
        price: 23.99,
      },
      {
        id: 'numerique',
        label: 'Format numérique',
        price: 14.99,
      },
    ],
  },
];

export const featuredBooks = books.filter((book) => book.featured);