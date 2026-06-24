'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';

type DonneesFormulaire = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  acceptTerms: boolean;
};

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DonneesFormulaire>({
    defaultValues: {
      fullName: '',
      email: '',
      subject: '',
      message: '',
      acceptTerms: false,
    },
  });

  const onSubmit: SubmitHandler<DonneesFormulaire> = (data) => {
    console.log('Formulaire validé :', data);
    setIsSubmitted(true);
    reset();
  };

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
          eyebrow="Contact"
          title="Contactez Best OfferBook"
          description="Une question sur nos livres, nos offres ou notre librairie ? Envoyez-nous un message."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--color-primary)]">
              Nos informations
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-6 text-[var(--color-muted)]">
              <p>
                <span className="font-semibold text-[var(--color-primary)]">
                  Adresse :
                </span>{' '}
                Ottawa, Canada
              </p>

              <p>
                <span className="font-semibold text-[var(--color-primary)]">
                  Courriel :
                </span>{' '}
                support@bestofferbook.com
              </p>

              <p>
                <span className="font-semibold text-[var(--color-primary)]">
                  Disponibilité :
                </span>{' '}
                Lundi au vendredi, de 9h à 17h
              </p>
            </div>
          </section>

          <form
            className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-sm"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="grid gap-5">
              <div>
                <label
                  htmlFor="fullName"
                  className="text-sm font-semibold text-[var(--color-primary)]"
                >
                  Nom complet
                </label>

                <input
                  id="fullName"
                  type="text"
                  placeholder="Votre nom complet"
                  className={inputClass(Boolean(errors.fullName))}
                  {...register('fullName', {
                    required: 'Le nom complet est obligatoire.',
                    minLength: {
                      value: 2,
                      message: 'Le nom doit contenir au moins 2 caractères.',
                    },
                  })}
                />

                {errors.fullName && (
                  <p className="mt-1 text-sm text-[var(--color-danger)]">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-[var(--color-primary)]"
                >
                  Adresse courriel
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  className={inputClass(Boolean(errors.email))}
                  {...register('email', {
                    required: 'L’adresse courriel est obligatoire.',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Veuillez entrer une adresse courriel valide.',
                    },
                  })}
                />

                {errors.email && (
                  <p className="mt-1 text-sm text-[var(--color-danger)]">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-sm font-semibold text-[var(--color-primary)]"
                >
                  Sujet
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="Sujet du message"
                  className={inputClass(Boolean(errors.subject))}
                  {...register('subject', {
                    required: 'Le sujet est obligatoire.',
                    minLength: {
                      value: 3,
                      message: 'Le sujet doit contenir au moins 3 caractères.',
                    },
                  })}
                />

                {errors.subject && (
                  <p className="mt-1 text-sm text-[var(--color-danger)]">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-[var(--color-primary)]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Votre message"
                  maxLength={500}
                  className={inputClass(Boolean(errors.message))}
                  {...register('message', {
                    required: 'Le message est obligatoire.',
                    minLength: {
                      value: 10,
                      message:
                        'Le message doit contenir au moins 10 caractères.',
                    },
                    maxLength: {
                      value: 500,
                      message:
                        'Le message ne doit pas dépasser 500 caractères.',
                    },
                  })}
                />

                {errors.message && (
                  <p className="mt-1 text-sm text-[var(--color-danger)]">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div>
                <label className="flex items-start gap-3 text-sm text-[var(--color-muted)]">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 accent-[var(--color-secondary)]"
                    {...register('acceptTerms', {
                      required:
                        'Vous devez accepter avant d’envoyer le formulaire.',
                    })}
                  />

                  <span>
                    J’accepte que Best OfferBook utilise ces informations pour
                    répondre à mon message.
                  </span>
                </label>

                {errors.acceptTerms && (
                  <p className="mt-1 text-sm text-[var(--color-danger)]">
                    {errors.acceptTerms.message}
                  </p>
                )}
              </div>

              {isSubmitted && (
                <p className="rounded-xl border border-[var(--color-border)] bg-[var(--color-hover)] p-4 text-sm font-semibold text-[var(--color-primary)]">
                  Votre formulaire a été validé avec succès.
                </p>
              )}

              <button
                type="submit"
                className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-surface)] transition hover:opacity-90"
              >
                Envoyer le message
              </button>
            </div>
          </form>
        </div>
      </Container>
    </main>
  );
}