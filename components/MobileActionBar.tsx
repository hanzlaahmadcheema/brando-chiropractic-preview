"use client";

import { clinic } from "@/lib/content";

/** Sticky bottom bar on mobile: call + book. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-pine-900/10 bg-white/95 px-3 py-2.5 backdrop-blur lg:hidden">
      <a
        href={`tel:${clinic.phoneHeightsTel}`}
        className="flex-1 rounded-full bg-pine-800 px-4 py-3 text-center text-sm font-bold text-white"
      >
        Call {clinic.phoneHeightsDisplay}
      </a>
      <a
        href="#book"
        className="flex-1 rounded-full border-2 border-pine-800 px-4 py-3 text-center text-sm font-bold text-pine-900"
      >
        Book a visit
      </a>
    </div>
  );
}
