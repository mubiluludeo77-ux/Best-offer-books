import Link from 'next/link';
import { categories } from '@/data/categories';
import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';

export default function Categories() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionTitle
          eyebrow="Catégories"
          title="Trouvez votre prochaine lecture"
          description="Explorez nos catégories principales et découvrez des livres adaptés à vos envies."
          align="center"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-slate-900">
                {category.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}