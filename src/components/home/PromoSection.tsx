import { benefits } from '@/data/benefits';
import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';

export default function PromoSection() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <Container>
        <SectionTitle
          eyebrow="Pourquoi nous choisir"
          title="Une librairie simple, moderne et accessible"
          description="Best OfferBook vous aide à découvrir des livres intéressants avec une présentation claire et agréable."
          align="center"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-bold">
                {benefit.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}