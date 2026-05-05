import { SectionHeading } from "./SectionHeading";

const audiences = [
  ["Pro lidi pod dlouhodobým tlakem", "Práce, rodina, odpovědnost, změny, nejistota. Když tlak trvá dlouho, nestačí jen vydržet. Je potřeba umět se vracet do rovnováhy."],
  ["Pro ty, kdo chtějí větší sebedůvěru", "Sebedůvěra roste, když člověk opakovaně zažije, že dokáže zvládnout nepohodlí a přesto jednat."],
  ["Pro lidi, kteří se chtějí lépe rozhodovat", "Resilium pomáhá vytvořit jednoduchý vnitřní systém pro chvíle, kdy je hlava zahlcená."],
  ["Pro ty, kdo chtějí chránit své hranice", "Naučíte se lépe vnímat riziko, říkat věci jasněji a odcházet ze situací, které vás zbytečně poškozují."],
  ["Pro lidi hledající osobní rozvoj bez iluzí", "Praktický rozvoj, který se neopírá o fráze, ale o zkušenost, tělo, pozornost a opakovaný trénink."],
  ["Pro rodiče, partnery a lidi v odpovědných rolích", "Když jste stabilnější vy, často se zklidní i prostor kolem vás."]
];

export function AudienceSection() {
  return (
    <section id="pro-koho" className="bg-resilium-light py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          title="Pro koho je Resilium Public"
          description="Program je určen pro lidi, kteří nechtějí jen rozumět stresu, ale chtějí s ním umět pracovat prakticky."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map(([title, text]) => (
            <article key={title} className="rounded-[26px] border border-[#D9DEE8] bg-white p-7 shadow-soft">
              <h3 className="text-xl font-black text-resilium-ink">{title}</h3>
              <p className="mt-4 leading-7 text-resilium-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
