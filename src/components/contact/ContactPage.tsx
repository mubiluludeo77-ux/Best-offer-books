'use client';
 
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
 
import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';
 
type DonneesFormulaire = {
  nom: string;
  courriel: string;
  message: string;
};
 
export default function ContactPage() {
  const { t } = useTranslation('contact');
 
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'success' | 'error' | null>(
    null
  );
 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DonneesFormulaire>({
    defaultValues: {
      nom: '',
      courriel: '',
      message: '',
    },
    mode: 'onBlur',
  });
 
  async function onSubmit(donnees: DonneesFormulaire) {
    setIsSending(true);
    setSendStatus(null);
 
    const templateParams = {
      name: donnees.nom,
      email: donnees.courriel,
      message: donnees.message,
      title: t('email.title'),
      subject: t('email.subject'),
    };
 
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EJS_TEMPLATE_ID!,
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_EJS_PUBLIC_KEY!,
        }
      );
 
      setSendStatus('success');
      reset();
    } catch (error) {
      console.log('Erreur EmailJS :', error);
      setSendStatus('error');
    } finally {
      setIsSending(false);
    }
  }
 
  function inputClass(hasError: boolean) {
    return `mt-2 w-full rounded-xl border bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-primary)] outline-none transition ${
      hasError
        ? 'border-[var(--color-danger)]'
        : 'border-[var(--color-border)] focus:border-[var(--color-primary)]'
    }`;
  }
 
  return (
<main className="bg-[var(--color-background)] py-20">
<Container>
<SectionTitle
          eyebrow={t('page.eyebrow')}
          title={t('page.title')}
          description={t('page.description')}
        />
 
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
<section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-sm">
<h2 className="text-2xl font-bold text-[var(--color-primary)]">
              {t('info.title')}
</h2>
 
            <div className="mt-6 space-y-4 text-sm leading-6 text-[var(--color-muted)]">
<p>
<span className="font-semibold text-[var(--color-primary)]">
                  {t('info.addressLabel')}
</span>{' '}
                {t('info.address')}
</p>
 
              <p>
<span className="font-semibold text-[var(--color-primary)]">
                  {t('info.emailLabel')}
</span>{' '}
                {t('info.email')}
</p>
 
              <p>
<span className="font-semibold text-[var(--color-primary)]">
                  {t('info.availabilityLabel')}
</span>{' '}
                {t('info.availability')}
</p>
</div>
</section>
 
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-sm"
>
            {sendStatus === 'success' && (
<p className="mb-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                {t('form.success')}
</p>
            )}
 
            {sendStatus === 'error' && (
<p className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                {t('form.error')}
</p>
            )}
 
            <div className="grid gap-5">
<div>
<label
                  htmlFor="nom"
                  className="text-sm font-semibold text-[var(--color-primary)]"
>
                  {t('form.nameLabel')}
</label>
 
                <input
                  id="nom"
                  type="text"
                  placeholder={t('form.namePlaceholder')}
                  className={inputClass(Boolean(errors.nom))}
                  {...register('nom', {
                    required: t('form.errors.required'),
                    minLength: {
                      value: 4,
                      message: t('form.errors.nameMin'),
                    },
                  })}
                />
 
                {errors.nom && (
<p className="mt-1 text-xs text-[var(--color-danger)]">
                    {errors.nom.message}
</p>
                )}
</div>
 
              <div>
<label
                  htmlFor="courriel"
                  className="text-sm font-semibold text-[var(--color-primary)]"
>
                  {t('form.emailLabel')}
</label>
 
                <input
                  id="courriel"
                  type="email"
                  placeholder={t('form.emailPlaceholder')}
                  className={inputClass(Boolean(errors.courriel))}
                  {...register('courriel', {
                    required: t('form.errors.required'),
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: t('form.errors.invalidEmail'),
                    },
                  })}
                />
 
                {errors.courriel && (
<p className="mt-1 text-xs text-[var(--color-danger)]">
                    {errors.courriel.message}
</p>
                )}
</div>
 
              <div>
<label
                  htmlFor="message"
                  className="text-sm font-semibold text-[var(--color-primary)]"
>
                  {t('form.messageLabel')}
</label>
 
                <textarea
                  id="message"
                  rows={5}
                  placeholder={t('form.messagePlaceholder')}
                  className={inputClass(Boolean(errors.message))}
                  {...register('message', {
                    required: t('form.errors.required'),
                    minLength: {
                      value: 10,
                      message: t('form.errors.messageMin'),
                    },
                  })}
                />
 
                {errors.message && (
<p className="mt-1 text-xs text-[var(--color-danger)]">
                    {errors.message.message}
</p>
                )}
</div>
 
              <button
                type="submit"
                disabled={isSending}
                className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-surface)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
>
                {isSending ? t('form.sending') : t('form.submit')}
</button>
</div>
</form>
</div>
</Container>
</main>
  );
}