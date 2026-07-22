'use client';
 
import Link from 'next/link';

import { useTranslation } from 'react-i18next';
 
import Logo from '@/components/common/Logo';
 
export default function Footer() {

  const { t } = useTranslation('footer');
 
  return (
<footer className="border-t border-[var(--color-border)] bg-[var(--color-footer)] text-[var(--color-footer-text)]">
<div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
<div className="md:col-span-2">
<Logo variant="light" />
 
          <p className="mt-4 max-w-md text-sm leading-6 text-[var(--color-footer-muted)]">

            {t('description')}
</p>
</div>
 
        <div>
<h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-footer-text)]">

            {t('categoriesTitle')}
</h3>
 
          <ul className="mt-4 space-y-3 text-sm text-[var(--color-footer-muted)]">
<li>{t('categories.novels')}</li>
<li>{t('categories.personalDevelopment')}</li>
<li>{t('categories.finance')}</li>
<li>{t('categories.relationships')}</li>
</ul>
</div>
 
        <div>
<h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-footer-text)]">

            {t('informationTitle')}
</h3>
 
          <ul className="mt-4 space-y-3 text-sm text-[var(--color-footer-muted)]">
<li>
<Link

                href="/contact"

                className="transition hover:text-[var(--color-footer-text)]"
>

                {t('contact')}
</Link>
</li>
<li>{t('location')}</li>
<li>{t('email')}</li>
<li>{t('delivery')}</li>
</ul>
</div>
</div>
 
      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-[var(--color-footer-muted)]">

        {t('copyright')}
</div>
</footer>

  );

}
 