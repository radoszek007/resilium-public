import { SectionHeading } from "./SectionHeading";

const outcomes = [
  "jednoduchý postup pro první sekundy stresu",
  "schopnost lépe pracovat s dechem a napětím",
  "větší přehled v konfliktních a náročných situacích",
  "jasnější komunikaci vlastních hranic",
  "praktický rámec pro rozhodování pod tlakem",
  "větší důvěru ve vlastní reakce",
  "zkušenost, že nepohodlí se dá zvládnout",
  "konkrétní kroky pro přenos do práce, vztahů a každodenního života"
];

export function OutcomesSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading title="Co si z tréninku odnesete" />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {outcomes.map((item) => (
            <div key={item} className="flex items-start gap-4 rounded-2xl border border-resilium-border bg-resilium-light p-5">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-resilium-orange text-xs font-black text-white">
                ✓
              </span>
              <p className="font-semibold leading-7 text-resilium-ink">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
