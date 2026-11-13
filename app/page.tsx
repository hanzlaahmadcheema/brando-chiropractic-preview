import { Reveal } from "@/components/Reveal";
import { AppointmentForm } from "@/components/AppointmentForm";
import { clinic, conditions, treatmentGroups, faqs } from "@/lib/content";

const HERO_IMG =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1800&q=80";
const DECOMPRESSION_IMG =
  "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80";
const STORY_IMG =
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80";

export default function Home() {
  return (
    <div id="top">
      {/* ---------- HERO: dark, split ---------- */}
      <section className="relative overflow-hidden bg-pine-950 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-pine-600/40 blur-3xl"
        />
        <div className="container-responsive relative grid gap-10 py-14 lg:grid-cols-2 lg:items-center lg:py-20">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-leaf-400">
              Houston chiropractor · Since 2000 · Two locations
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-[3.6rem]">
              Back pain doesn&rsquo;t have to be your normal.
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85">
              For over 25 years, Dr. Dennis Brando has helped Houstonians
              move again — adjustments, non-surgical spinal decompression,
              physiotherapy and massage, all under one roof. Your first
              consultation is free.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${clinic.phoneHeightsTel}`}
                className="rounded-full bg-leaf-400 px-6 py-3 text-base font-bold text-pine-950 hover:bg-leaf-300"
              >
                Call {clinic.phoneHeightsDisplay}
              </a>
              <a
                href="#book"
                className="rounded-full border-2 border-white px-6 py-3 text-base font-bold text-white hover:bg-white/10"
              >
                Book a visit
              </a>
            </div>
            <p className="mt-6 flex flex-wrap gap-2 text-sm font-semibold">
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-leaf-300">Free consultation</span>
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-white/85">Walk-ins welcome</span>
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-white/85">Se habla español</span>
            </p>
          </Reveal>
          <Reveal variant="right" className="relative">
            <img
              src={HERO_IMG}
              alt="Woman stretching in a yoga pose at sunset — moving freely again"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
              loading="eager"
            />
            <div className="absolute -bottom-5 left-4 rounded-2xl bg-white p-4 text-pine-950 shadow-xl sm:left-6">
              <p className="font-serif text-2xl font-semibold">
                {clinic.rating} <span className="text-honey">★★★★★</span>
              </p>
              <p className="text-xs font-semibold text-muted">
                {clinic.reviewCount} Google reviews · 25+ years in Houston
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- TRUST STRIP ---------- */}
      <section aria-label="Why Brando Chiropractic" className="bg-pine-900 text-white">
        <div className="container-responsive grid grid-cols-2 gap-6 py-8 text-center md:grid-cols-4">
          {[
            ["25+ years", "Serving Houston since 2000"],
            ["4.9 stars", "250+ Google reviews"],
            ["2 locations", "Heights & Southwest / Bellaire"],
            ["Free consult", "Every first visit, always"],
          ].map(([big, small]) => (
            <div key={big}>
              <p className="font-serif text-xl font-semibold text-leaf-400 sm:text-2xl">
                {big}
              </p>
              <p className="mt-1 text-xs font-medium text-white/70">{small}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- CONDITIONS ---------- */}
      <section id="conditions" className="scroll-mt-24 bg-paper py-14 lg:py-20">
        <div className="container-responsive">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-pine-700">
              What&rsquo;s hurting?
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-pine-950 sm:text-4xl">
              If it hurts to move, start here
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
              These are the problems the clinic treats every day. If yours
              is on the list, the first step is a free consultation — the
              doctor listens, examines you, and tells you honestly what
              will help.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) as 0 | 1 | 2}>
                <article className="h-full rounded-2xl border border-pine-900/10 bg-white p-6 shadow-sm">
                  <p className="flex h-10 w-10 items-center justify-center rounded-full bg-pine-800 font-serif text-base font-semibold text-leaf-400">
                    {i + 1}
                  </p>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-pine-950">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.blurb}</p>
                  <a href="#book" className="mt-4 inline-block text-sm font-bold text-pine-700 underline">
                    Book for {c.title.toLowerCase()}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TREATMENTS ---------- */}
      <section id="treatments" className="scroll-mt-24 bg-white py-14 lg:py-20">
        <div className="container-responsive">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-pine-700">
              Treatments
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-pine-950 sm:text-4xl">
              More than an adjustment
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
              Adjustments plus physiotherapy, massage and rehab exercises —
              so the fix lasts after you leave. No prices are published
              online — call for pricing options.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {treatmentGroups.map((g, i) => (
              <Reveal key={g.title} delay={(i % 2) as 0 | 1}>
                <article className="h-full overflow-hidden rounded-2xl border border-pine-900/10 bg-paper shadow-sm">
                  {g.image && (
                    <img
                      src={g.image}
                      alt={g.imageAlt}
                      className="aspect-[16/9] w-full object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-semibold text-pine-950">
                      {g.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-pine-700">
                      {g.blurb}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {g.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/85">
                          <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#book"
                      className="mt-4 inline-block text-sm font-bold text-pine-700 underline"
                    >
                      Ask about {g.title.toLowerCase()}
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-6 rounded-2xl bg-pine-50 p-5 text-sm leading-relaxed text-pine-900">
              <strong>Also on site:</strong> X-rays, PRP (Heights location,
              with Houston Regen-U Med) and the Houston Diabetes &amp;
              Neuropathy Center as an in-house partner.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- DECOMPRESSION BAND ---------- */}
      <section className="bg-pine-900 py-14 text-white lg:py-20">
        <div className="container-responsive grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-leaf-400">
              Spinal decompression
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
              Surgery is the last resort. This is the step before it.
            </h2>
            <p className="mt-4 leading-relaxed text-white/85">
              The decompression table gently stretches the spine to take
              pressure off the disc — painless, non-surgical, and the
              clinic&rsquo;s answer for sciatica, herniated discs and
              pinched nerves before surgery is ever discussed.
            </p>
            <ol className="mt-6 space-y-3">
              {[
                ["Free consultation & exam", "The doctor listens, examines you, and explains what is actually wrong."],
                ["Gentle decompression sessions", "Slow, controlled stretching on the Triton table — no cutting, no drugs."],
                ["Rehab to keep it fixed", "Exercises and physiotherapy so the pain does not come straight back."],
              ].map(([title, body], i) => (
                <li key={title} className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-leaf-400 text-sm font-bold text-pine-950">
                    {i + 1}
                  </span>
                  <span>
                    <strong className="block">{title}</strong>
                    <span className="text-sm text-white/75">{body}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal variant="right">
            <img
              src={DECOMPRESSION_IMG}
              alt="Women exercising with light weights in a bright studio — getting strong again after treatment"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
              loading="lazy"
            />
            <p className="mt-3 text-center text-sm italic text-white/70">
              The goal is not a good visit. It is getting your life back.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- TEAM & STORY ---------- */}
      <section id="team" className="scroll-mt-24 bg-paper py-14 lg:py-20">
        <div className="container-responsive grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-pine-700">
              The clinic
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-pine-950 sm:text-4xl">
              Trusted in Houston for over 25 years.
            </h2>
            <p className="mt-4 leading-relaxed text-ink/85">
              Dr. Dennis Brando has treated musculoskeletal conditions in
              Houston for over 25 years, specializing in spinal
              decompression and injury rehabilitation. His approach mixes
              chiropractic adjustments with physiotherapy, massage and
              rehab — and his patients include Olympic athletes.
            </p>
            <p className="mt-4 leading-relaxed text-ink/85">
              The staff are fully bilingual in English and Spanish, and at
              the North Main office some staff also speak Portuguese. Two
              locations serve the city: Heights / Downtown on N Main Street,
              and Southwest / Bellaire on Dashwood Drive.
            </p>
            <blockquote className="mt-6 rounded-2xl border-l-4 border-leaf-500 bg-white p-5 shadow-sm">
              <p className="font-serif text-lg italic leading-relaxed text-pine-950">
                &ldquo;To Dr. Brando, thanks for putting me back together.
                You&rsquo;re the greatest!&rdquo;
              </p>
              <footer className="mt-2 text-sm font-semibold text-muted">
                — Mary Onyali, Olympic Bronze Medalist · from testimonials
                on the clinic&rsquo;s own website
              </footer>
            </blockquote>
          </Reveal>
          <Reveal variant="right" className="lg:col-span-2">
            <img
              src={STORY_IMG}
              alt="Woman meditating at sunrise — calm, pain-free mornings"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
              loading="lazy"
            />
            <div className="mt-5 rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-pine-950">
                Your care team
              </h3>
              <ul className="mt-4 space-y-4">
                {[
                  ["DB", "Dr. Dennis Brando, DC", "Founder — 25+ years, spinal decompression & injury rehab"],
                  ["DG", "Dr. Glass", "Chiropractor"],
                  ["VE", "Dr. Valerie R. Escalona", "Chiropractor — Southwest office"],
                  ["LP", "Dr. Lucia Pena", "Chiropractor — Southwest office"],
                ].map(([initials, name, role]) => (
                  <li key={name} className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pine-800 text-sm font-bold text-leaf-400">
                      {initials}
                    </span>
                    <span>
                      <strong className="block text-sm text-pine-950">{name}</strong>
                      <span className="text-sm text-muted">{role}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- PATIENT VOICES ---------- */}
      <section className="bg-white py-14 lg:py-20">
        <div className="container-responsive">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-pine-700">
              Patient voices
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-pine-950 sm:text-4xl">
              What patients say
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
              Paraphrased from patient reviews published on review sites —
              in their own words, the pattern is the same: they were heard,
              treated properly, and got moving again.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Reveal>
              <figure className="h-full rounded-2xl border border-pine-900/10 bg-paper p-6 shadow-sm">
                <p className="font-serif text-xl italic leading-relaxed text-pine-950">
                  &ldquo;After four years of pain, one visit relieved it.
                  Absolutely love it here.&rdquo;
                </p>
                <figcaption className="mt-4 text-sm font-semibold text-muted">
                  Patient review, published on review sites · 5 stars
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={1}>
              <figure className="h-full rounded-2xl border border-pine-900/10 bg-paper p-6 shadow-sm">
                <p className="font-serif text-xl italic leading-relaxed text-pine-950">
                  &ldquo;Came in with a herniated disc that was crippling.
                  A month later my mobility had improved dramatically — and
                  surgery was off the table.&rdquo;
                </p>
                <figcaption className="mt-4 text-sm font-semibold text-muted">
                  Patient review, published on review sites · herniated disc
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- HOW A VISIT WORKS ---------- */}
      <section className="bg-paper py-14 lg:py-20">
        <div className="container-responsive">
          <Reveal>
            <h2 className="font-serif text-3xl font-semibold text-pine-950 sm:text-4xl">
              How a visit works
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Call or walk in", "Ring either office or just walk in — it is best to call so they can be expecting you. The consultation is free."],
              ["Exam & honest plan", "The doctor examines you, explains what is wrong in plain words, and lays out a treatment plan — including the cost."],
              ["Treatment & rehab", "Adjustments, decompression, massage and exercises — built around your body, not a template."],
            ].map(([title, body], i) => (
              <Reveal key={title} delay={i as 0 | 1 | 2}>
                <div className="h-full rounded-2xl border border-pine-900/10 bg-white p-6 shadow-sm">
                  <p className="flex h-10 w-10 items-center justify-center rounded-full bg-pine-800 text-base font-bold text-leaf-400">
                    {i + 1}
                  </p>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-pine-950">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- BOOK ---------- */}
      <section id="book" className="scroll-mt-24 py-14 lg:py-20">
        <div className="container-responsive grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-pine-700">
              Book a visit
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-pine-950 sm:text-4xl">
              Start with a free consultation
            </h2>
            <div className="mt-6 rounded-2xl bg-pine-50 p-5">
              <h3 className="font-bold text-pine-950">Good to know</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/85">
                <li>· The consultation with the doctor is always free.</li>
                <li>· Walk-ins are welcome at both offices.</li>
                <li>· Staff speak English and Spanish; some Portuguese at North Main.</li>
                <li>· No prices are published — call for pricing options.</li>
              </ul>
            </div>
            <p className="mt-6 rounded-2xl bg-leaf-500/10 p-4 text-sm leading-relaxed text-pine-950">
              In pain right now? Call{" "}
              <a href={`tel:${clinic.phoneHeightsTel}`} className="font-bold underline">
                {clinic.phoneHeightsDisplay}
              </a>{" "}
              (Heights) or{" "}
              <a href={`tel:${clinic.phoneSouthwestTel}`} className="font-bold underline">
                {clinic.phoneSouthwestDisplay}
              </a>{" "}
              (Southwest) — don&rsquo;t wait it out.
            </p>
          </Reveal>
          <Reveal variant="right" className="lg:col-span-3">
            <AppointmentForm />
          </Reveal>
        </div>
      </section>

      {/* ---------- LOCATIONS ---------- */}
      <section id="locations" className="scroll-mt-24 border-t border-pine-900/10 bg-white py-14 lg:py-20">
        <div className="container-responsive">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-pine-700">
              Two locations
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-pine-950 sm:text-4xl">
              Find the office nearest you
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {[
              {
                name: "Heights / Downtown",
                address: clinic.addressHeights,
                phone: clinic.phoneHeightsDisplay,
                tel: clinic.phoneHeightsTel,
                maps: clinic.mapsHeightsUrl,
                hours: clinic.hoursHeights,
                note: "PRP and the in-house medical partners are here.",
              },
              {
                name: "Southwest / Bellaire",
                address: clinic.addressSouthwest,
                phone: clinic.phoneSouthwestDisplay,
                tel: clinic.phoneSouthwestTel,
                maps: clinic.mapsSouthwestUrl,
                hours: clinic.hoursSouthwest,
                note: "Bellaire & Hillcroft — same care, closer to the southwest side.",
              },
            ].map((loc) => (
              <Reveal key={loc.name}>
                <article className="h-full rounded-2xl border border-pine-900/10 bg-paper p-6 shadow-sm">
                  <h3 className="font-serif text-2xl font-semibold text-pine-950">{loc.name}</h3>
                  <address className="mt-2 text-base not-italic leading-relaxed text-ink/80">
                    {loc.address}
                  </address>
                  <p className="mt-3">
                    <a href={`tel:${loc.tel}`} className="text-lg font-bold text-pine-800 hover:underline">
                      {loc.phone}
                    </a>
                  </p>
                  <a
                    href={loc.maps}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block rounded-full border-2 border-pine-800 px-5 py-2.5 text-sm font-bold text-pine-900 hover:bg-pine-50"
                  >
                    Get directions
                  </a>
                  <h4 className="mt-6 font-bold text-pine-950">Hours</h4>
                  <ul className="mt-3 divide-y divide-pine-900/10 rounded-2xl border border-pine-900/10 bg-white">
                    {loc.hours.map((h) => (
                      <li key={h.days} className="flex justify-between gap-4 px-4 py-2.5 text-sm">
                        <span className="font-semibold text-pine-950">{h.days}</span>
                        <span className="text-right text-ink/80">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm text-muted">{loc.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="scroll-mt-24 bg-paper py-14 lg:py-20">
        <div className="container-responsive max-w-4xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-pine-700">
              Questions
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-pine-950 sm:text-4xl">
              Before you come in
            </h2>
          </Reveal>
          <div className="mt-8 space-y-4">
            {faqs.map((f) => (
              <Reveal key={f.q}>
                <details className="group rounded-2xl border border-pine-900/10 bg-white p-5 shadow-sm">
                  <summary className="cursor-pointer list-none font-bold text-pine-950">
                    <span className="flex items-center justify-between gap-4">
                      {f.q}
                      <span aria-hidden="true" className="text-pine-600 transition-transform group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="bg-pine-950 py-14 text-white">
        <div className="container-responsive text-center">
          <Reveal>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              Stop living around the pain.
            </h2>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-white/80">
              Twenty-five years, two Houston offices, thousands of patients
              moving again. The first consultation is free — the only thing
              it costs is the call.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${clinic.phoneHeightsTel}`}
                className="rounded-full bg-leaf-400 px-6 py-3 text-base font-bold text-pine-950 hover:bg-leaf-300"
              >
                Call {clinic.phoneHeightsDisplay}
              </a>
              <a
                href="#book"
                className="rounded-full border-2 border-white px-6 py-3 text-base font-bold text-white hover:bg-white/10"
              >
                Book a visit
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
