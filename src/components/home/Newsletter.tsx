'use client';
 
import { useTranslation } from 'react-i18next';
 
import Container from '@/components/common/Container';

import SectionTitle from '@/components/common/SectionTitle';
 
export default function Newsletter() {

  const { t } = useTranslation('home');
 
  return (
<section className="bg-[var(--color-surface)] py-20">
<Container>
<div className="rounded-3xl bg-[var(--color-background)] px-6 py-12 text-center">
<SectionTitle

            eyebrow={t('newsletter.eyebrow')}

            title={t('newsletter.title')}

            description={t('newsletter.description')}

            align="center"

          />
 
          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
<input

              type="email"

              placeholder={t('newsletter.placeholder')}

              className="min-h-12 flex-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 text-sm text-[var(--color-primary)] outline-none focus:border-[var(--color-primary)]"

            />
 
            <button

              type="submit"

              className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
>

              {t('newsletter.submit')}
</button>
</form>
</div>
</Container>
</section>

  );

}
 