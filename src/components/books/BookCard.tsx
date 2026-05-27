import Image from 'next/image';
import { Book } from '@/types/book';
 
type BookCardProps = {
  book: Book;
  onSelectBook?: (book: Book) => void;
};
 
export default function BookCard({ book, onSelectBook }: BookCardProps) {
  return (
<article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
<div className="relative mb-4 h-64 overflow-hidden rounded-xl bg-slate-100">
<Image
          src={book.image}
          alt={book.title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover"
        />
</div>
 
      <p className="text-sm font-medium text-orange-700">{book.category}</p>
 
      <h3 className="mt-1 text-lg font-bold text-slate-900">{book.title}</h3>
 
      <p className="mt-1 text-sm text-slate-600">{book.author}</p>
 
      <p className="mt-3 text-sm leading-6 text-slate-600">
        {book.description}
</p>
 
      <div className="mt-4 flex items-center justify-between">
<span className="font-bold text-slate-900">
          {book.price.toFixed(2)} $
</span>
 
        <button
          type="button"
          onClick={() => onSelectBook?.(book)}
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
>
          Voir
</button>
</div>
</article>
  );
}