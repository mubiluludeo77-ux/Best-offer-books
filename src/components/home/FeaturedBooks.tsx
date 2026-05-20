import { featuredBooks } from '@/data/books';

import BookCard from '@/components/books/BookCard';

import Container from '@/components/common/Container';

import SectionTitle from '@/components/common/SectionTitle';
 
export default function FeaturedBooks() {

  return (
<section className="bg-slate-50 py-20">
<Container>
<SectionTitle

          eyebrow="Sélection"

          title="Livres populaires"

          description="Découvrez une sélection de livres choisis pour inspirer, divertir et accompagner votre lecture."

        />
 
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {featuredBooks.map((book) => (
<BookCard key={book.id} book={book} />

          ))}
</div>
</Container>
</section>

  );

}
 