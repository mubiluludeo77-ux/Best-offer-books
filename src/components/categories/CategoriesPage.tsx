import { books } from '@/data/books';
import { categories } from '@/data/categories';
import { Book } from '@/types/book';
import BookCard from '@/components/books/BookCard';
import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';

type CategoriesPageProps = {
  onSelectBook: (book: Book) => void;
};

export default function CategoriesPage({ onSelectBook }: CategoriesPageProps) {
  return (
    <main className="bg-[var(--color-background)] py-20">
      <Container>
        <SectionTitle
          eyebrow="Catégories"
          title="Explorer les livres par catégorie"
          description="Retrouvez nos livres classés selon vos centres d’intérêt."
        />

        <div className="mt-12 space-y-14">
          {categories.map((category) => {
            const categoryBooks = books.filter(
              (book) => book.category === category.bookCategory
            );

            return (
              <section key={category.id}>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[var(--color-primary)]">
                    {category.name}
                  </h2>

                  <p className="mt-2 text-sm text-[var(--color-muted)]">
                    {category.description}
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {categoryBooks.map((book) => (
                    <BookCard
                      key={book.id}
                      book={book}
                      onSelectBook={onSelectBook}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </main>
  );
}