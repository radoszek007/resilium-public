import { SectionHeading } from "./SectionHeading";
import Image from "next/image";

export function InstructorSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex justify-center lg:justify-start">
          <div className="relative aspect-square w-full max-w-[460px] rounded-full border border-resilium-orange/25 bg-gradient-to-br from-resilium-dark to-resilium-slate p-3 shadow-soft">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-[#D5D0C4]">
              <Image
                src="/radim-koncitek.png"
                alt="Radim Končítek"
                fill
                sizes="(min-width: 1024px) 460px, 90vw"
                className="object-contain"
                priority={false}
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
            </div>
            <div className="absolute bottom-8 left-1/2 w-[78%] -translate-x-1/2 rounded-full border border-white/[0.16] bg-resilium-dark/86 px-5 py-3 text-center backdrop-blur-md">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-white/[0.62]">
                Radim Končítek
              </p>
              <p className="mt-1 text-lg font-black text-white">Resilium</p>
            </div>
          </div>
        </div>
        <div>
          <SectionHeading title="Kdo za Resiliem stojí" />
          <div className="mt-8 space-y-6 text-base leading-8 text-resilium-muted">
            <p>
              Resilium vytvořil Radim Končítek, odborník na osobní bezpečnost,
              psychofyzickou odolnost a krizovou komunikaci. Ve své práci propojuje dlouholetou
              praxi v sebeobraně, práci s tělem, komunikaci, NLP, rozhodování pod tlakem a trénink odolnosti.
            </p>
            <p>
              Jeho přístup je praktický, přímý a založený na zkušenosti: člověk se neučí zvládat
              tlak tím, že o něm poslouchá. Učí se tím, že v bezpečném prostředí zažije napětí,
              naučí se ho regulovat a postupně získá důvěru ve vlastní reakci.
            </p>
          </div>
          <a href="#poptavka" className="btn-primary mt-9 w-full sm:w-auto">
            Poznat Resilium
          </a>
        </div>
      </div>
    </section>
  );
}
