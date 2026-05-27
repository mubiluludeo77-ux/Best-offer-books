import { books } from '@/data/books';

import { Book } from '@/types/book';

import BookCard from '@/components/books/BookCard';

import Container from '@/components/common/Container';

import SectionTitle from '@/components/common/SectionTitle';
 
type LivresPageProps = {

  onSelectBook: (book: Book) => void;

};
 
export default function LivresPage({ onSelectBook }: LivresPageProps) {

  return (
<main className="bg-slate-50 py-20">
<Container>
<SectionTitle

          eyebrow="Catalogue"

          title="Tous nos livres"

          description="Découvrez notre sélection complète de livres disponibles."

        />
 
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {books.map((book) => (
<BookCard key={book.id} book={book} onSelectBook={onSelectBook} />

          ))}
</div>
</Container>
</main>

  );

}
 