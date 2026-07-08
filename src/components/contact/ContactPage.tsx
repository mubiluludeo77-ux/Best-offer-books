'use client';
 
import { useState } from 'react';

import { useForm } from 'react-hook-form';

import emailjs from '@emailjs/browser';
 
import Container from '@/components/common/Container';

import SectionTitle from '@/components/common/SectionTitle';
 
type DonneesFormulaire = {

  nom: string;

  courriel: string;

  message: string;

};
 
export default function ContactPage() {

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
 
  function onSubmit(donnees: DonneesFormulaire) {

    setIsSending(true);

    setSendStatus(null);
 
    const templateParams = {

      name: donnees.nom,

      email: donnees.courriel,

      message: donnees.message,

      title: 'Message depuis Best OfferBook',

      subject: 'Message depuis Best OfferBook',

    };
 
    emailjs

      .send(

        process.env.NEXT_PUBLIC_EJS_SERVICE_ID!,

        process.env.NEXT_PUBLIC_EJS_TEMPLATE_ID!,

        templateParams,

        process.env.NEXT_PUBLIC_EJS_PUBLIC_KEY!

      )

      .then(() => {

        setSendStatus('success');

        reset();

      })

      .catch(() => {

        setSendStatus('error');

      })

      .finally(() => {

        setIsSending(false);

      });

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

            onSubmit={handleSubmit(onSubmit)}

            noValidate

            className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-sm"
>

            {sendStatus === 'success' && (
<p className="mb-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">

                ✓ Message envoyé avec succès !
</p>

            )}
 
            {sendStatus === 'error' && (
<p className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">

                Une erreur est survenue. Vérifiez vos identifiants EmailJS.
</p>

            )}
 
            <div className="grid gap-5">
<div>
<label

                  htmlFor="nom"

                  className="text-sm font-semibold text-[var(--color-primary)]"
>

                  Nom complet
</label>
 
                <input

                  id="nom"

                  type="text"

                  placeholder="Votre nom"

                  className={inputClass(Boolean(errors.nom))}

                  {...register('nom', {

                    required: 'Champ obligatoire',

                    minLength: {

                      value: 4,

                      message: 'Minimum 4 caractères',

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

                  Adresse courriel
</label>
 
                <input

                  id="courriel"

                  type="email"

                  placeholder="votre@email.com"

                  className={inputClass(Boolean(errors.courriel))}

                  {...register('courriel', {

                    required: 'Champ obligatoire',

                    pattern: {

                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

                      message: 'Courriel invalide',

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

                  Message
</label>
 
                <textarea

                  id="message"

                  rows={5}

                  placeholder="Votre message"

                  className={inputClass(Boolean(errors.message))}

                  {...register('message', {

                    required: 'Champ obligatoire',

                    minLength: {

                      value: 10,

                      message: 'Minimum 10 caractères',

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

                {isSending ? 'Envoi en cours...' : 'Envoyer le message'}
</button>
</div>
</form>
</div>
</Container>
</main>

  );

}
 