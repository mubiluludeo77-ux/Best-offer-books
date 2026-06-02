import { featuredBooks } from '@/data/books';
import { Book } from '@/types/book';
import BookCard from '@/components/books/BookCard';
import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';

type FeaturedBooksProps = {
  onSelectBook: (book: Book) => void;
};

export default function FeaturedBooks({ onSelectBook }: FeaturedBooksProps) {
  return (
    <section className="bg-[var(--color-background)] py-20">
      <Container>
        <SectionTitle
          eyebrow="Sélection"
          title="Livres populaires"
          description="Découvrez une sélection de livres choisis pour inspirer, divertir et accompagner votre lecture."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onSelectBook={onSelectBook}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}