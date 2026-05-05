"use client";

import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  ["Je Resilium terapie?", "Ne. Resilium není terapie ani zdravotní služba. Je to praktický trénink práce s tlakem, reakcí, pozorností a rozhodováním. Pokud člověk řeší vážné psychické potíže, je vhodné obrátit se na odborníka."],
  ["Musím být fyzicky zdatný?", "Ne. Program je nastaven tak, aby byl dostupný běžným lidem. Nejde o výkon, soutěž ani bojový trénink. Pracuje se s jednoduchými pohybovými a situačními cvičeními."],
  ["Je to sebeobrana?", "Resilium využívá některé principy osobní bezpečnosti, ale jeho cílem je širší odolnost v životě. Pracuje s tělem, stresem, hranicemi, komunikací a rozhodováním."],
  ["Co když mám ze stresových cvičení obavu?", "Trénink je veden postupně a bezpečně. Cílem není člověka zlomit, ale rozšířit jeho schopnost zvládat tlak. Intenzita se přizpůsobuje skupině."],
  ["Pomůže mi to v práci i v osobním životě?", "Ano. Principy Resilia jsou přenositelné do pracovních situací, vztahů, konfliktů, rozhodování i každodenního zvládání stresu."],
  ["Je program vhodný pro začátečníky?", "Ano. Resilium Intro a Resilium Foundations jsou navrženy jako vstupní programy bez nutnosti předchozí zkušenosti."]
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-resilium-light py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading align="center" title="Časté otázky" />
        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {faqs.map(([question, answer], index) => {
            const open = openIndex === index;
            return (
              <div key={question} className="rounded-[24px] border border-resilium-border bg-white">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                >
                  <span className="text-lg font-black text-resilium-ink">{question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-resilium-light text-xl font-black text-resilium-orange">
                    {open ? "-" : "+"}
                  </span>
                </button>
                {open ? <p className="px-6 pb-6 leading-8 text-resilium-body">{answer}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
