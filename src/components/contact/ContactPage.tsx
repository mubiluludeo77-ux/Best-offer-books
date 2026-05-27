import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';

export default function ContactPage() {
  return (
    <main className="bg-slate-50 py-20">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Contactez Best OfferBook"
          description="Une question sur nos livres, nos offres ou notre librairie ? Envoyez-nous un message."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <section className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Nos informations
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-6 text-slate-600">
              <p>
                <span className="font-semibold text-slate-900">Adresse :</span>{' '}
                Ottawa, Canada
              </p>

              <p>
                <span className="font-semibold text-slate-900">Courriel :</span>{' '}
                support@bestofferbook.com
              </p>

              <p>
                <span className="font-semibold text-slate-900">Disponibilité :</span>{' '}
                Lundi au vendredi, de 9h à 17h
              </p>
            </div>
          </section>

          <form className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="grid gap-5">
              <div>
                <label className="text-sm font-semibold text-slate-900">
                  Nom complet
                </label>

                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-900">
                  Adresse courriel
                </label>

                <input
                  type="email"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-900">
                  Message
                </label>

                <textarea
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
                  placeholder="Votre message"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
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