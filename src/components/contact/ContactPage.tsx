'use client';

import {
  useState,
  type FormEvent,
} from 'react';

import { useTranslation } from 'react-i18next';

import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';

type FormErrors = {
  nom?: string;
  courriel?: string;
  message?: string;
};

export default function ContactPage() {
  const { t } = useTranslation('contact');

  const [isSending, setIsSending] = useState(false);

  const [sendStatus, setSendStatus] =
    useState<'success' | 'error' | null>(null);

  const [errors, setErrors] =
    useState<FormErrors>({});

  async function onSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = new FormData(form);

    const nom =
      String(formData.get('nom') ?? '').trim();

    const courriel =
      String(formData.get('courriel') ?? '').trim();

    const message =
      String(formData.get('message') ?? '').trim();

    const newErrors: FormErrors = {};

    if (!nom) {
      newErrors.nom = t('form.errors.required');
    } else if (nom.length < 4) {
      newErrors.nom = t('form.errors.nameMin');
    }

    if (!courriel) {
      newErrors.courriel = t('form.errors.required');
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(courriel)
    ) {
      newErrors.courriel =
        t('form.errors.invalidEmail');
    }

    if (!message) {
      newErrors.message =
        t('form.errors.required');
    } else if (message.length < 10) {
      newErrors.message =
        t('form.errors.messageMin');
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSending(true);
    setSendStatus(null);

    const templateParams = {
      name: nom,
      email: courriel,
      message,
      title: t('email.title'),
      subject: t('email.subject'),
    };

    try {
      const emailjs =
        (await import('@emailjs/browser')).default;

      await emailjs.send(
        process.env.NEXT_PUBLIC_EJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EJS_TEMPLATE_ID!,
        templateParams,
        {
          publicKey:
            process.env.NEXT_PUBLIC_EJS_PUBLIC_KEY!,
        }
      );

      setSendStatus('success');
      setErrors({});
      form.reset();
    } catch (error) {
      console.error('Erreur EmailJS :', error);

      setSendStatus('error');
    } finally {
      setIsSending(false);
    }
  }

  function inputClass(hasError: boolean) {
    return `
      mt-2
      w-full
      rounded-xl
      border
      bg-[var(--color-surface)]
      px-4
      py-3
      text-sm
      text-[var(--color-primary)]
      outline-none
      transition
      ${
        hasError
          ? 'border-[var(--color-danger)]'
          : 'border-[var(--color-border)] focus:border-[var(--color-primary)]'
      }
    `;
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
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-sm"
          >
            {sendStatus === 'success' && (
              <p
                role="status"
                className="mb-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700"
              >
                {t('form.success')}
              </p>
            )}

            {sendStatus === 'error' && (
              <p
                role="alert"
                className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
              >
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
                  name="nom"
                  type="text"
                  autoComplete="name"
                  placeholder={t(
                    'form.namePlaceholder'
                  )}
                  aria-invalid={
                    errors.nom ? true : undefined
                  }
                  aria-describedby={
                    errors.nom
                      ? 'nom-error'
                      : undefined
                  }
                  className={inputClass(
                    Boolean(errors.nom)
                  )}
                />

                {errors.nom && (
                  <p
                    id="nom-error"
                    className="mt-1 text-xs text-[var(--color-danger)]"
                  >
                    {errors.nom}
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
                  name="courriel"
                  type="email"
                  autoComplete="email"
                  placeholder={t(
                    'form.emailPlaceholder'
                  )}
                  aria-invalid={
                    errors.courriel
                      ? true
                      : undefined
                  }
                  aria-describedby={
                    errors.courriel
                      ? 'courriel-error'
                      : undefined
                  }
                  className={inputClass(
                    Boolean(errors.courriel)
                  )}
                />

                {errors.courriel && (
                  <p
                    id="courriel-error"
                    className="mt-1 text-xs text-[var(--color-danger)]"
                  >
                    {errors.courriel}
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
                  name="message"
                  rows={5}
                  placeholder={t(
                    'form.messagePlaceholder'
                  )}
                  aria-invalid={
                    errors.message
                      ? true
                      : undefined
                  }
                  aria-describedby={
                    errors.message
                      ? 'message-error'
                      : undefined
                  }
                  className={inputClass(
                    Boolean(errors.message)
                  )}
                />

                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1 text-xs text-[var(--color-danger)]"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-background)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending
                  ? t('form.sending')
                  : t('form.submit')}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </main>
  );
}