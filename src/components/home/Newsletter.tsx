import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';

export default function Newsletter() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="rounded-3xl bg-[#f8f6f2] px-6 py-12 text-center">
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
              className="min-h-12 flex-1 rounded-full border border-slate-300 px-5 text-sm outline-none focus:border-slate-900"
            />

            <button
              type="submit"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              S’inscrire
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}