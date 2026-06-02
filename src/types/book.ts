export type BookVariant = {
  id: string;
  label: string;
  price: number;
};

export type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
  category: string;
  description: string;
  featured: boolean;
  variants: BookVariant[];
};