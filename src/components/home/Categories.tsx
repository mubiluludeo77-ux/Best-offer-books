import { categories } from '@/data/categories';
import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';
import { PageName } from '@/data/navItems';

type CategoriesProps = {
  onChangePage: (page: PageName) => void;
};

export default function Categories({ onChangePage }: CategoriesProps) {
  return (
    <section className="bg-[var(--color-surface)] py-20">
      <Container>
        <SectionTitle
          eyebrow="Catégories"
          title="Trouvez votre prochaine lecture"
          description="Explorez nos catégories principales et découvrez des livres adaptés à vos envies."
          align="center"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => onChangePage('categories')}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 text-left transition hover:-translate-y-1 hover:bg-[var(--color-hover)] hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-[var(--color-primary)]">
                {category.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                {category.description}
              </p>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}