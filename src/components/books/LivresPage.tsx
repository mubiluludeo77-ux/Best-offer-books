import { books } from '@/data/books';
import BookCard from '@/components/books/BookCard';
import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';

export default function LivresPage() {
  return (
    <main className="bg-[var(--color-background)] py-20">
      <Container>
        <SectionTitle
          eyebrow="Catalogue"
          title="Tous nos livres"
          description="Découvrez notre sélection complète de livres disponibles."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </Container>
    </main>
  );
}