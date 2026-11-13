# Brando Chiropractic Spine & Rehab — Preview Website

Preview website (REDESIGN) for **Brando Chiropractic Spine & Rehab**
(Houston, TX), built as a client preview: the clinic reviews the site and
tells us what to fix or add, then decides whether to make it theirs.

- **Stack:** Next.js 15 (App Router, static export) + React 19 + Tailwind CSS 3
- **Deploy:** Vercel (git route, same pattern as the other previews)
- **Design:** dark pine + leaf green, mobile-first — dark hero, conditions
  grid, treatments, spinal-decompression band, team, patient voices, two
  location cards, appointment form, FAQ

## Facts used (verified 2026-11-13)

- Dr. Dennis Brando, DC — 25+ years, spinal decompression + injury rehab.
  Est. 2000. 4.9 stars / 250+ Google reviews.
- Two locations: Heights / Downtown — 2914 N Main St, Houston, TX 77009,
  (713) 227-2222; Southwest / Bellaire — 6216 Dashwood Dr, Houston, TX
  77081, (713) 271-4000.
- Free consultation; walk-ins welcome. Bilingual English/Spanish; some
  Portuguese at North Main. No prices published — "call for pricing options".
- Services (clinic's own list): adjustments, spinal decompression (Triton),
  massage therapy, cold laser, therapy/rehab, muscle stimulation, trigger
  point therapy, ultrasound therapy, shockwave therapy, X-rays; PRP at
  Heights (Houston Regen-U Med); in-house partner Houston Diabetes &
  Neuropathy Center.
- Current website brandochiropractic.com is years out of date (old
  ibsrv-hosted design). Facebook Page:
  facebook.com/pages/Brando-Chiropractic-Clinic/300587623309836 (3.2K
  followers). Instagram @brando.chiropractic.
- Patient voices on site are 2 paraphrases labeled as from patient reviews
  published on review sites, plus the Mary Onyali testimonial as published
  on the clinic's own website.

## Build / QC

- `npm run build` — static export to `out/`
- Playwright QC at `../qc/run-qc.py` (390px + 1440px): single h1, no
  horizontal overflow, ≥5 tel: links, contact link, disclaimer banner,
  reveal animations, appointment-form validation + success state.

## Images

All photography is from Unsplash (CDN links, verified by downloading and
viewing each photo): yoga at sunset (hero), hot-stone back treatment,
core rehab exercise, oil massage, group exercise class, sunrise meditation.
