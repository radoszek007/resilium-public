import { SectionHeading } from "./SectionHeading";

const programs = [
  {
    name: "Resilium Intro",
    subtitle: "Úvodní praktický workshop",
    length: "2-3 hodiny",
    text: "Seznámení se základními principy práce s tlakem, dechem, postojem a rozhodováním. Vhodné jako první zkušenost.",
    output: "Pochopíte, jak vaše tělo reaguje na stres a naučíte se první jednoduché techniky pro každodenní použití.",
    cta: "Chci úvodní workshop"
  },
  {
    name: "Resilium Foundations",
    subtitle: "Základní trénink osobní stability",
    length: "1 den",
    text: "Praktický den zaměřený na stabilizaci pod tlakem, práci s pozorností, hranicemi, komunikací a základními modelovými situacemi.",
    output: "Získáte konkrétní protokoly pro stres, konflikt, zahlcení a rozhodování.",
    cta: "Chci základní program"
  },
  {
    name: "Resilium Life Practice",
    subtitle: "Hlubší práce s odolností v běžném životě",
    length: "víkend nebo navazující cyklus",
    text: "Program pro ty, kteří chtějí principy Resilia integrovat do práce, vztahů, osobní disciplíny a dlouhodobé životní změny.",
    output: "Vytvoříte si osobní systém pro tlak, rozhodování, hranice a návrat k vnitřní stabilitě.",
    cta: "Chci hlubší program"
  }
];

export function ProgramsSection() {
  return (
    <section id="programy" className="bg-resilium-deep py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading align="center" title="Vyberte si vstup do systému Resilium" />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {programs.map((program) => (
            <article key={program.name} className="flex h-full flex-col rounded-[30px] border border-resilium-border bg-white p-7 shadow-soft">
              <div className="mb-6 inline-flex w-fit rounded-full border border-resilium-border bg-resilium-light px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-resilium-muted">
                {program.length}
              </div>
              <h3 className="text-2xl font-black text-resilium-ink">{program.name}</h3>
              <p className="mt-2 font-bold text-resilium-orange">{program.subtitle}</p>
              <div className="flex flex-1 flex-col">
                <p className="mt-6 leading-7 text-resilium-body">{program.text}</p>
                <p className="mt-6 rounded-2xl border border-resilium-border bg-resilium-light p-4 text-sm leading-7 text-resilium-body">
                  <span className="font-black text-resilium-ink">Výstup: </span>
                  {program.output}
                </p>
              </div>
              <a href="#poptavka" className="btn-primary mt-8 w-full">
                {program.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
