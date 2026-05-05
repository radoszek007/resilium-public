import { SectionHeading } from "./SectionHeading";

const scenarios = [
  ["Náročný pracovní den", "Když se hromadí úkoly, termíny a tlak okolí."],
  ["Konflikt s člověkem", "Když potřebujete zůstat klidní, mluvit jasně a neeskalovat situaci."],
  ["Osobní rozhodnutí", "Když je potřeba rozhodnout se, i když máte strach nebo nejistotu."],
  ["Rodinná zátěž", "Když chcete reagovat zraleji v situacích, kde vás emoce rychle vtáhnou."],
  ["Pocit zahlcení", "Když je všeho moc a potřebujete se vrátit k prvnímu zvládnutelnému kroku."],
  ["Ochrana hranic", "Když potřebujete říct ne, odejít nebo se postavit za sebe bez zbytečné agrese."]
];

export function ScenariosSection() {
  return (
    <section className="bg-resilium-light py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading title="Kde Resilium využijete" />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {scenarios.map(([title, text]) => (
            <article key={title} className="rounded-[26px] border border-resilium-border bg-white p-7">
              <h3 className="text-xl font-black text-resilium-ink">{title}</h3>
              <p className="mt-4 leading-7 text-resilium-body">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
