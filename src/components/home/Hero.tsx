'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import { heroSlides } from '@/data/heroSlides';

export default function Hero() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlideIndex((currentIndex) =>
        currentIndex === heroSlides.length - 1 ? 0 : currentIndex + 1
      );
    }, 3000);
    return () => window.clearInterval(intervalId);
  }, []);

  const activeSlide = heroSlides[activeSlideIndex];

  return (
    <section className="relative min-h-[620px] overflow-hidden">
      <Image
        src={activeSlide.src}
        alt={activeSlide.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[var(--color-hero-overlay)]" />

      <Container className="relative z-10 flex min-h-[620px] items-center">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-secondary)]">
            Librairie en ligne
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-hero-text)] sm:text-5xl lg:text-6xl">
            Trouvez votre prochain livre au meilleur prix
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-hero-muted)]">
            Best OfferBook vous propose une sélection de livres modernes,
            inspirants et accessibles pour accompagner vos moments de lecture.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/livres">
              <Button>Découvrir les livres</Button>
            </Link>
            <Link href="/categories">
              <Button variant="secondary">Voir les catégories</Button>
            </Link>
          </div>
          <div className="mt-10 flex gap-2">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Afficher l'image ${index + 1}`}
                onClick={() => setActiveSlideIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  activeSlideIndex === index
                    ? 'w-8 bg-[var(--color-secondary)]'
                    : 'w-2.5 bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}