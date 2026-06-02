// Type utilisé pour représenter un article du panier
export type CartItem = {
  id: string;
  bookId: number;
  title: string;
  image: string;
  variantId: string;
  variantLabel: string;
  unitPrice: number;
  quantity: number;
};