"use client";

import { useState } from "react";
import { clinic } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "What's hurting?", href: "#conditions" },
    { label: "Treatments", href: "#treatments" },
    { label: "Locations", href: "#locations" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-pine-900/10 bg-paper/95 backdrop-blur">
      <div className="container-responsive flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-pine-800 font-serif text-lg font-semibold text-leaf-400"
          >
            B
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-lg font-semibold text-pine-950">
              Brando Chiropractic
            </span>
            <span className="block text-[11px] font-medium tracking-wide text-muted">
              Spine &amp; Rehab · Houston since 2000
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink/80 hover:text-pine-700"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${clinic.phoneHeightsTel}`}
            className="hidden rounded-full bg-pine-800 px-4 py-2 text-sm font-bold text-white hover:bg-pine-900 sm:block"
          >
            Call {clinic.phoneHeightsDisplay}
          </a>
          <a
            href="#book"
            className="hidden rounded-full border-2 border-pine-800 px-4 py-2 text-sm font-bold text-pine-900 hover:bg-pine-50 sm:inline-block"
          >
            Book a visit
          </a>
          <button
            type="button"
            className="rounded-md p-2 text-pine-950 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav
          className="border-t border-pine-900/10 bg-paper px-4 py-3 lg:hidden"
          aria-label="Mobile"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2.5 text-base font-semibold text-ink hover:bg-sand"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${clinic.phoneHeightsTel}`}
            className="mt-1 block rounded-full bg-pine-800 px-4 py-2.5 text-center text-base font-bold text-white"
          >
            Call {clinic.phoneHeightsDisplay}
          </a>
        </nav>
      )}
    </header>
  );
}
