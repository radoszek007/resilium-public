import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

const cards = [
  {
    title: "Klid pod tlakem",
    text: "Naučíte se rychle stabilizovat dech, postoj a pozornost ve chvíli, kdy přichází napětí, konflikt nebo zahlcení.",
    icon: "01"
  },
  {
    title: "Jasnější rozhodování",
    text: "Získáte jednoduchý rámec, jak se zorientovat v náročné situaci a zvolit další krok bez zbytečné paniky.",
    icon: "02"
  },
  {
    title: "Více sebedůvěry",
    text: "Sebedůvěra nevzniká z pozitivních vět. Vzniká ze zkušenosti, že dokážete jednat i ve chvíli, kdy to není pohodlné.",
    icon: "03"
  }
];

export function WhySection() {
  return (
    <section id="prinosy" className="bg-resilium-light py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading title="V životě nerozhoduje jen to, co víte. Rozhoduje, k čemu máte přístup pod tlakem." />
        <div className="mt-8 grid gap-8 text-base leading-8 text-resilium-body lg:grid-cols-2">
          <p>
            V běžném klidu většina lidí ví, co by měli dělat. Dýchat, mluvit rozumně,
            rozhodnout se, nevybouchnout, neustoupit ze svých hranic, dokončit důležitou věc.
            Jenže ve stresu se tělo zrychlí, pozornost se zúží a člověk začne reagovat automaticky.
          </p>
          <p>
            Resilium Public pomáhá tyto automatické reakce postupně nahrazovat trénovanými
            postupy. Nejde o teorii. Jde o praktickou zkušenost, kterou si tělo i mysl dokážou
            vybavit v reálném životě.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="rounded-[28px] border border-resilium-border bg-white p-7 shadow-soft">
              <Icon>{card.icon}</Icon>
              <h3 className="mt-8 text-xl font-black text-resilium-ink">{card.title}</h3>
              <p className="mt-4 leading-7 text-resilium-body">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
