import { SectionHeading } from "./SectionHeading";

export function ContactSection() {
  return (
    <section id="poptavka" className="bg-resilium-deep py-24 sm:py-32">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              title="Začněte trénovat reakci, kterou budete potřebovat v reálném životě."
              description="Klid, jistota a odolnost nevznikají náhodou. Vznikají opakováním správných postupů ve správně nastaveném tréninku."
            />
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact-form" className="btn-primary w-full sm:w-auto">
                Chci začít
              </a>
              <a href="mailto:info@resilium.cz" className="btn-secondary-light w-full sm:w-auto">
                Mám dotaz
              </a>
            </div>
            <p className="mt-8 max-w-xl leading-8 text-resilium-body">
              Vyplňte krátký formulář a ozveme se vám s nejbližší možností programu.
            </p>
          </div>

          <form
            id="contact-form"
            className="rounded-[30px] border border-resilium-border bg-white p-6 shadow-soft sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-resilium-ink">Jméno</span>
                <input className="w-full rounded-2xl border border-resilium-border bg-resilium-light px-4 py-3 text-resilium-ink outline-none focus:border-resilium-orange" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-resilium-ink">E-mail</span>
                <input type="email" className="w-full rounded-2xl border border-resilium-border bg-resilium-light px-4 py-3 text-resilium-ink outline-none focus:border-resilium-orange" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-resilium-ink">Telefon</span>
                <input type="tel" className="w-full rounded-2xl border border-resilium-border bg-resilium-light px-4 py-3 text-resilium-ink outline-none focus:border-resilium-orange" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-resilium-ink">Program</span>
                <select className="w-full rounded-2xl border border-resilium-border bg-resilium-light px-4 py-3 text-resilium-ink outline-none focus:border-resilium-orange">
                  <option>Resilium Intro</option>
                  <option>Resilium Foundations</option>
                  <option>Resilium Life Practice</option>
                  <option>Nevím, potřebuji doporučení</option>
                </select>
              </label>
            </div>
            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-bold text-resilium-ink">Zpráva</span>
              <textarea rows={5} className="w-full resize-none rounded-2xl border border-resilium-border bg-resilium-light px-4 py-3 text-resilium-ink outline-none focus:border-resilium-orange" />
            </label>
            <button type="button" className="btn-primary mt-6 w-full">
              Odeslat poptávku
            </button>
            <p className="mt-4 text-sm leading-6 text-resilium-muted">
              Odesláním formuláře nevzniká žádný závazek. Slouží pouze k domluvě dalšího kroku.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
