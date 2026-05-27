import Hero from '@/components/home/Hero';
import FeaturedBooks from '@/components/home/FeaturedBooks';
import Categories from '@/components/home/Categories';
import PromoSection from '@/components/home/PromoSection';
import Newsletter from '@/components/home/Newsletter';
import { Book } from '@/types/book';
import { PageName } from '@/data/navItems';

type AccueilProps = {
  onChangePage: (page: PageName) => void;
  onSelectBook: (book: Book) => void;
};

export default function Accueil({ onChangePage, onSelectBook }: AccueilProps) {
  return (
    <main>
      <Hero onChangePage={onChangePage} />
      <FeaturedBooks onSelectBook={onSelectBook} />
      <Categories onChangePage={onChangePage} />
      <PromoSection />
      <Newsletter />
    </main>
  );
}