import { SectionHeading } from "./SectionHeading";

export function ContactSection() {
  return (
    <section id="poptavka" className="bg-resilium-dark py-24 text-white sm:py-32">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              dark
              title="Začněte trénovat reakci, kterou budete potřebovat v reálném životě."
              description="Klid, jistota a odolnost nevznikají náhodou. Vznikají opakováním správných postupů ve správně nastaveném tréninku."
            />
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact-form" className="btn-primary w-full sm:w-auto">
                Chci začít
              </a>
              <a href="mailto:info@resilium.cz" className="btn-secondary-dark w-full sm:w-auto">
                Mám dotaz
              </a>
            </div>
            <p className="mt-8 max-w-xl leading-8 text-white/[0.72]">
              Vyplňte krátký formulář a ozveme se vám s nejbližší možností programu.
            </p>
          </div>

          <form
            id="contact-form"
            className="rounded-[30px] border border-white/[0.14] bg-white/[0.07] p-6 shadow-dark sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-white/[0.78]">Jméno</span>
                <input className="w-full rounded-2xl border border-white/[0.14] bg-white/95 px-4 py-3 text-resilium-ink outline-none focus:border-resilium-orange" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-white/[0.78]">E-mail</span>
                <input type="email" className="w-full rounded-2xl border border-white/[0.14] bg-white/95 px-4 py-3 text-resilium-ink outline-none focus:border-resilium-orange" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-white/[0.78]">Telefon</span>
                <input type="tel" className="w-full rounded-2xl border border-white/[0.14] bg-white/95 px-4 py-3 text-resilium-ink outline-none focus:border-resilium-orange" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-white/[0.78]">Program</span>
                <select className="w-full rounded-2xl border border-white/[0.14] bg-white/95 px-4 py-3 text-resilium-ink outline-none focus:border-resilium-orange">
                  <option>Resilium Intro</option>
                  <option>Resilium Foundations</option>
                  <option>Resilium Life Practice</option>
                  <option>Nevím, potřebuji doporučení</option>
                </select>
              </label>
            </div>
            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-bold text-white/[0.78]">Zpráva</span>
              <textarea rows={5} className="w-full resize-none rounded-2xl border border-white/[0.14] bg-white/95 px-4 py-3 text-resilium-ink outline-none focus:border-resilium-orange" />
            </label>
            <button type="button" className="btn-primary mt-6 w-full">
              Odeslat poptávku
            </button>
            <p className="mt-4 text-sm leading-6 text-white/[0.58]">
              Odesláním formuláře nevzniká žádný závazek. Slouží pouze k domluvě dalšího kroku.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
