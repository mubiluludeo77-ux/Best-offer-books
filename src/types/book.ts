// définit la structure d'un livre
export type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
  category: string;
  description: string;
  featured: boolean;
  variants: string[];
};