import { SectionHeading } from "./SectionHeading";

const steps = [
  ["Stabilizuj", "Zklidnění těla, dechu a postoje. Tělo je první vstupní brána k návratu kontroly."],
  ["Zorientuj se", "Co se děje? Co je riziko? Co je teď nejdůležitější?"],
  ["Rozhodni", "Vyberte další krok podle situace, hodnot a reálných možností."],
  ["Jednej", "Proměňte rozhodnutí v konkrétní akci: slovo, hranici, pohyb, volbu nebo ukončení situace."]
];

export function HowItWorksSection() {
  return (
    <section id="jak-to-funguje" className="bg-white py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          title="Jednoduchý proces pro složité chvíle"
          description="Resilium trénuje reakci postupně. Nejdříve v jednoduchých cvičeních, poté v modelových situacích a nakonec ve scénářích, které se podobají běžnému životu."
        />
        <div className="mt-16 grid gap-5 lg:grid-cols-4">
          {steps.map(([title, text], index) => (
            <article key={title} className="relative rounded-[28px] border border-resilium-border bg-resilium-light p-7 shadow-soft">
              <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-resilium-orange text-sm font-black text-white">
                {index + 1}
              </div>
              <h3 className="text-2xl font-black text-resilium-ink">{title}</h3>
              <p className="mt-4 leading-7 text-resilium-body">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
