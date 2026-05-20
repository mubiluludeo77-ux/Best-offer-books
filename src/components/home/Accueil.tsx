import Hero from '@/components/home/Hero';
import FeaturedBooks from '@/components/home/FeaturedBooks';
import Categories from '@/components/home/Categories';
import PromoSection from '@/components/home/PromoSection';
import Newsletter from '@/components/home/Newsletter';

export default function Accueil() {
  return (
    <main>
      <Hero />
      <FeaturedBooks />
      <Categories />
      <PromoSection />
      <Newsletter />
    </main>
  );
}