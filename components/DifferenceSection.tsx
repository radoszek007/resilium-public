import { SectionHeading } from "./SectionHeading";

const common = [
  "hodně teorie",
  "motivace bez nácviku",
  "obecné rady",
  "příjemný pocit po semináři",
  "slabý přenos do stresu"
];

const resilium = [
  "praktický trénink",
  "práce s tělem a nervovým systémem",
  "modelové situace",
  "postupné vystavení tlaku",
  "přenos do reálného života"
];

export function DifferenceSection() {
  return (
    <section className="bg-resilium-light py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading align="center" title="Praktický rozvoj bez prázdných frází" />
        <div className="mt-14 grid overflow-hidden rounded-[30px] border border-resilium-border bg-white shadow-soft lg:grid-cols-2">
          <div className="border-b border-resilium-border p-7 lg:border-b-0 lg:border-r">
            <h3 className="text-2xl font-black text-resilium-ink">Běžný kurz osobního rozvoje</h3>
            <ul className="mt-8 space-y-4">
              {common.map((item) => (
                <li key={item} className="flex gap-3 text-resilium-muted">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-resilium-muted/45" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-resilium-deep p-7">
            <h3 className="text-2xl font-black text-resilium-orange">Resilium Public</h3>
            <ul className="mt-8 space-y-4">
              {resilium.map((item) => (
                <li key={item} className="flex gap-3 text-resilium-body">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-resilium-orange text-[11px] font-black">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
