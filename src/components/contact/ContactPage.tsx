import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';

export default function ContactPage() {
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

          <form className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-sm">
            <div className="grid gap-5">
              <div>
                <label className="text-sm font-semibold text-[var(--color-primary)]">
                  Nom complet
                </label>

                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-primary)] outline-none focus:border-[var(--color-primary)]"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-[var(--color-primary)]">
                  Adresse courriel
                </label>

                <input
                  type="email"
                  className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-primary)] outline-none focus:border-[var(--color-primary)]"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-[var(--color-primary)]">
                  Message
                </label>

                <textarea
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-primary)] outline-none focus:border-[var(--color-primary)]"
                  placeholder="Votre message"
                />
              </div>

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