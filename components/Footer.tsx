import { clinic } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-pine-950 text-white">
      <div className="container-responsive grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-pine-800 font-serif text-lg font-semibold text-leaf-400"
            >
              B
            </span>
            <span className="font-serif text-lg font-semibold">
              Brando Chiropractic
            </span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Chiropractic care, spinal decompression, physiotherapy and
            massage in Houston for over 25 years. Two locations — Heights /
            Downtown and Southwest / Bellaire. Free consultation, walk-ins
            welcome.
          </p>
          <p className="mt-3 text-sm text-white/70">
            English · Español · Português (North Main)
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-leaf-400">
            Visit us
          </h2>
          <address className="mt-3 text-sm not-italic leading-relaxed text-white/80">
            Heights / Downtown — {clinic.addressHeights}
            <br />
            <a href={`tel:${clinic.phoneHeightsTel}`} className="font-semibold text-white hover:underline">
              {clinic.phoneHeightsDisplay}
            </a>
            <br />
            <br />
            Southwest / Bellaire — {clinic.addressSouthwest}
            <br />
            <a href={`tel:${clinic.phoneSouthwestTel}`} className="font-semibold text-white hover:underline">
              {clinic.phoneSouthwestDisplay}
            </a>
          </address>
          <p className="mt-3 text-sm text-white/70">
            <a href={clinic.mapsHeightsUrl} target="_blank" rel="noreferrer" className="underline hover:text-white">
              Directions — Heights
            </a>
            {" · "}
            <a href={clinic.mapsSouthwestUrl} target="_blank" rel="noreferrer" className="underline hover:text-white">
              Directions — Southwest
            </a>
            {" · "}
            <a href={clinic.websiteUrl} target="_blank" rel="noreferrer" className="underline hover:text-white">
              Current website
            </a>
            {" · "}
            <a href={clinic.facebookUrl} target="_blank" rel="noreferrer" className="underline hover:text-white">
              Facebook page
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-leaf-400">
            Hours
          </h2>
          <ul className="mt-3 space-y-1.5 text-sm text-white/80">
            <li className="flex justify-between gap-4">
              <span>Mon, Wed, Fri</span>
              <span className="font-semibold text-white">8:30–11:30 &amp; 2:00–5:15</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Tue, Thu</span>
              <span className="font-semibold text-white">Afternoons 2:00–5:15</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Saturday</span>
              <span className="font-semibold text-white">8:30–11:00 (by appt.)</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Sunday</span>
              <span className="font-semibold text-white">Closed</span>
            </li>
          </ul>
          <p className="mt-3 text-xs text-white/60">
            Southwest opens at 10:00 AM on Tuesdays and Thursdays. Hours can
            change — call before you head over.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-responsive py-4 text-center text-xs text-white/50">
          Preview redesign concept — built from the clinic&rsquo;s public
          information. Not the clinic&rsquo;s current website.
        </p>
      </div>
    </footer>
  );
}
