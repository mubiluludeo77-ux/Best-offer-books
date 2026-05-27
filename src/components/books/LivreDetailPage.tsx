import Image from 'next/image';
import { Book } from '@/types/book';
import Container from '@/components/common/Container';
 
type LivreDetailPageProps = {
  book: Book;
  onBack: () => void;
};
 
export default function LivreDetailPage({ book, onBack }: LivreDetailPageProps) {
  return (
    <main className="bg-slate-50 py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
            <div className="relative h-[520px] overflow-hidden rounded-3xl bg-white shadow-sm">
                <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                />
            </div>
 
             <div>
                <button
                            type="button"
                            onClick={onBack}
                            className="mb-6 text-sm font-semibold text-orange-700 hover:text-orange-900"
                >
                            ← Retour aux livres
                </button>
 
                 <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">
                      {book.category}
                </p>
 
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                     {book.title}
                </h1>
 
                <p className="mt-2 text-lg text-slate-600">{book.author}</p>
 
                 <p className="mt-6 text-base leading-7 text-slate-700">
                      {book.description}
                </p>
 
                 <p className="mt-6 text-2xl font-bold text-slate-900">
                        {book.price.toFixed(2)} $
                </p>
 
                <div className="mt-8">
                    <h2 className="text-lg font-bold text-slate-900">
                        Variantes disponibles
                    </h2>
   
                <div className="mt-4 flex flex-wrap gap-3">
                         {book.variants.map((variant) => (
                    <span
                        key={variant}
                        className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                        >
                             {variant}
                     </span>
              ))}
                 </div>
            </div>
        </div>
    </Container>
</main>
  );
}