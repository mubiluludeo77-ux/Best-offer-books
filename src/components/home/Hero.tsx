import Image from 'next/image';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import { PageName } from '@/data/navItems';

type HeroProps = {
  onChangePage: (page: PageName) => void;
};

export default function Hero({ onChangePage }: HeroProps) {
  return (
    <section className="bg-[#f8f6f2] py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-700">
            Librairie en ligne
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Trouvez votre prochain livre au meilleur prix
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            Best OfferBook vous propose une sélection de livres modernes,
            inspirants et accessibles pour accompagner vos moments de lecture.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button onClick={() => onChangePage('livres')}>
              Découvrir les livres
            </Button>

            <Button
              variant="secondary"
              onClick={() => onChangePage('categories')}
            >
              Voir les catégories
            </Button>
          </div>
        </div>

        <div className="relative h-[360px] overflow-hidden rounded-3xl bg-white shadow-sm">
          <Image
            src="/images/hero/hero-books.webp"
            alt="Livres présentés sur Best OfferBook"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}