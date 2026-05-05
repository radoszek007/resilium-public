import { SectionHeading } from "./SectionHeading";

const items = [
  {
    title: "Tělo",
    text: "Práce s postojem, dechem, napětím a fyzickou reakcí na stres.",
    icon: "body"
  },
  {
    title: "Pozornost",
    text: "Schopnost vnímat sebe, okolí a podstatné informace i pod tlakem.",
    icon: "focus"
  },
  {
    title: "Emoce",
    text: "Lepší regulace strachu, hněvu, nejistoty a zahlcení.",
    icon: "emotion"
  },
  {
    title: "Rozhodování",
    text: "Jednoduché postupy pro výběr dalšího kroku v situaci, kdy není ideální klid.",
    icon: "decision"
  },
  {
    title: "Komunikace",
    text: "Klidnější hlas, jasnější hranice, méně zbytečných konfliktů.",
    icon: "communication"
  },
  {
    title: "Akce",
    text: "Schopnost přestat jen přemýšlet a udělat konkrétní krok.",
    icon: "action"
  }
];

function TrainingIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  };

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-7 w-7">
      {type === "body" ? (
        <>
          <path {...common} d="M24 10v28" />
          <path {...common} d="M15 18h18" />
          <path {...common} d="M18 38l6-10 6 10" />
          <circle {...common} cx="24" cy="8" r="4" />
        </>
      ) : null}
      {type === "focus" ? (
        <>
          <circle {...common} cx="24" cy="24" r="13" />
          <circle {...common} cx="24" cy="24" r="5" />
          <path {...common} d="M24 5v6M24 37v6M5 24h6M37 24h6" />
        </>
      ) : null}
      {type === "emotion" ? (
        <>
          <path {...common} d="M24 39s-14-8-14-19a8 8 0 0 1 14-5 8 8 0 0 1 14 5c0 11-14 19-14 19z" />
          <path {...common} d="M18 25h12" />
        </>
      ) : null}
      {type === "decision" ? (
        <>
          <path {...common} d="M12 12h16l8 8-8 8H12z" />
          <path {...common} d="M12 28h22" />
          <path {...common} d="M12 36h14" />
        </>
      ) : null}
      {type === "communication" ? (
        <>
          <path {...common} d="M10 14h28v18H22l-8 6v-6h-4z" />
          <path {...common} d="M17 21h14M17 27h9" />
        </>
      ) : null}
      {type === "action" ? (
        <>
          <path {...common} d="M12 36l24-24" />
          <path {...common} d="M22 12h14v14" />
          <path {...common} d="M12 18v18h18" />
        </>
      ) : null}
    </svg>
  );
}

export function BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute right-[-120px] top-20 h-72 w-72 rounded-full border border-resilium-orange/10" />
      <div className="absolute bottom-10 left-[-140px] h-72 w-72 rounded-full bg-resilium-orange/5 blur-3xl" />
      <div className="section-shell relative z-10">
        <SectionHeading
          align="center"
          title="Co v sobě trénujete"
          description="Resilium propojuje práci s tělem, myslí, emocemi a jednáním. Výsledkem je větší stabilita v běžných i náročných situacích."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="group relative flex min-h-[250px] flex-col rounded-[26px] border border-[#D9DEE8] bg-resilium-light p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-resilium-orange/35 hover:bg-white hover:shadow-soft"
            >
              <div className="mb-7 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-resilium-orange/20 bg-white text-resilium-orange shadow-sm transition group-hover:border-resilium-orange/35 group-hover:bg-resilium-orange group-hover:text-white">
                  <TrainingIcon type={item.icon} />
                </div>
                <span className="h-px w-16 bg-[#D9DEE8] transition group-hover:bg-resilium-orange/45" />
              </div>
              <h3 className="text-xl font-black text-resilium-ink">{item.title}</h3>
              <p className="mt-4 leading-7 text-resilium-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
