"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Přínosy", href: "#prinosy" },
  { label: "Jak to funguje", href: "#jak-to-funguje" },
  { label: "Programy", href: "#programy" },
  { label: "Pro koho", href: "#pro-koho" },
  { label: "Otázky", href: "#faq" },
  { label: "Poptávka", href: "#poptavka" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.16] bg-[rgba(79,107,126,0.65)] text-[#F5F7FA] backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <a href="#top" className="flex items-end gap-2.5" aria-label="Resilium Public">
          <span className="relative block h-10 w-[108px] shrink-0">
            <Image
              src="/logo-resilium-cele-square.png"
              alt="Resilium"
              fill
              sizes="108px"
              className="object-contain"
              priority
            />
          </span>
          <span className="pb-1.5 text-[10px] font-extrabold uppercase tracking-[0.28em] text-resilium-orange/90">
            PUBLIC
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hlavní navigace">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[#EAF0F5]/85 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#poptavka" className="btn-primary hidden lg:inline-flex">
          Chci začít
        </a>

        <button
          type="button"
          aria-label="Otevřít menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.16] bg-white/[0.08] lg:hidden"
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-white transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-white transition ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/[0.16] bg-[rgba(79,107,126,0.92)] px-5 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-[1240px] flex-col gap-1" aria-label="Mobilní navigace">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-[#EAF0F5]/90 hover:bg-white/[0.08]"
              >
                {item.label}
              </a>
            ))}
            <a href="#poptavka" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full">
              Chci začít
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
