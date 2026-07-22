'use client';
 
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
 
import { categories } from '@/data/categories';
import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';
 
export default function Categories() {
  const { t } = useTranslation('home');
 
  return (
<section className="bg-[var(--color-surface)] py-20">
<Container>
<SectionTitle
          eyebrow={t('categories.eyebrow')}
          title={t('categories.title')}
          description={t('categories.description')}
          align="center"
        />
 
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
<Link
              key={category.id}
              href="/categories"
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 text-left transition hover:-translate-y-1 hover:bg-[var(--color-hover)] hover:shadow-md"
>
<h3 className="text-lg font-bold text-[var(--color-primary)]">
                {t(`categories.items.${category.id}.name`, {
                  defaultValue: category.name,
                })}
</h3>
 
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                {t(`categories.items.${category.id}.description`, {
                  defaultValue: category.description,
                })}
</p>
</Link>
          ))}
</div>
</Container>
</section>
  );
}