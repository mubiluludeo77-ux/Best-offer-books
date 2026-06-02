import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';

export default function Newsletter() {
  return (
    <section className="bg-[var(--color-surface)] py-20">
      <Container>
        <div className="rounded-3xl bg-[var(--color-background)] px-6 py-12 text-center">
          <SectionTitle
            eyebrow="Newsletter"
            title="Recevez nos nouvelles offres"
            description="Inscrivez-vous pour recevoir les nouveautés, les livres populaires et les meilleures offres."
            align="center"
          />

          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Votre adresse courriel"
              className="min-h-12 flex-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 text-sm text-[var(--color-primary)] outline-none focus:border-[var(--color-primary)]"
            />

            <button
              type="submit"
              className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              S’inscrire
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}