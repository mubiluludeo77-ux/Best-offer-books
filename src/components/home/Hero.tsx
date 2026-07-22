'use client';
 
import { useEffect, useState } from 'react';
import Image from 'next/image';
 
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import { heroSlides } from '@/data/heroSlides';
import { useTranslation } from 'react-i18next';
 
export default function Hero() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const { t } = useTranslation('home');
 
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
            {t('hero.eyebrow')}
</p>
 
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-hero-text)] sm:text-5xl lg:text-6xl">
            {t('hero.title')}
</h1>
 
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-hero-muted)]">
            {t('hero.description')}
</p>
 
          <div className="mt-8 flex flex-wrap gap-4">
<Button href="/livres">{t('hero.discoverBooks')}</Button>
 
            <Button href="/categories" variant="secondary">
              {t('hero.viewCategories')}
</Button>
</div>
 
          <div className="mt-10 flex gap-2">
            {heroSlides.map((slide, index) => (
<button
                key={slide.id}
                type="button"
                aria-label={`${t('hero.showImage')} ${index + 1}`}
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