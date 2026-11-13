/**
 * Brando Chiropractic Spine & Rehab — REDESIGN preview content.
 *
 * VERIFIED = from the clinic's own site (brandochiropractic.com), its
 * Instagram (@brando.chiropractic), Facebook posts, and review/directory
 * listings (HealthHive, Birdeye, BestProsInTown, Vitals, Providence
 * directory) — checked 2026-11-13. No prices are published anywhere —
 * the site lists none ("Call for pricing options"). No facts invented.
 * UNIVERSAL = standard content every clinic website has. The disclaimer
 * banner on the site tells the clinic to correct anything that is wrong.
 */

export const clinic = {
  name: "Brando Chiropractic Spine & Rehab",
  shortName: "Brando Chiropractic",
  tagline: "Houston chiropractor for over 25 years",
  phoneHeightsDisplay: "(713) 227-2222",
  phoneHeightsTel: "+17132272222",
  phoneSouthwestDisplay: "(713) 271-4000",
  phoneSouthwestTel: "+17132714000",
  phoneDisplay: "(713) 227-2222",
  phoneTel: "+17132272222",
  addressHeights: "2914 N Main St, Houston, TX 77009",
  addressSouthwest: "6216 Dashwood Dr, Houston, TX 77081",
  areaHeights: "Downtown / Heights",
  areaSouthwest: "Southwest / Bellaire — Bellaire & Hillcroft",
  mapsHeightsUrl:
    "https://www.google.com/maps/search/?api=1&query=Brando+Chiropractic+2914+N+Main+St+Houston+TX+77009",
  mapsSouthwestUrl:
    "https://www.google.com/maps/search/?api=1&query=Brando+Chiropractic+6216+Dashwood+Dr+Houston+TX+77081",
  websiteText: "Current website — brandochiropractic.com",
  websiteUrl: "https://brandochiropractic.com/",
  facebookUrl:
    "https://www.facebook.com/pages/Brando-Chiropractic-Clinic/300587623309836",
  rating: "4.9",
  reviewCount: "250+",
  since: "2000",
  hoursHeights: [
    { days: "Monday", time: "8:30–11:30 AM & 2:00–5:15 PM" },
    { days: "Tuesday", time: "2:00–5:15 PM" },
    { days: "Wednesday", time: "8:30–11:30 AM & 2:00–5:15 PM" },
    { days: "Thursday", time: "2:00–5:15 PM" },
    { days: "Friday", time: "8:30–11:30 AM & 2:00–5:15 PM" },
    { days: "Saturday", time: "8:30–11:00 AM (by appointment)" },
    { days: "Sunday", time: "Closed" },
  ],
  hoursSouthwest: [
    { days: "Monday", time: "8:30–11:30 AM & 2:00–5:15 PM" },
    { days: "Tuesday", time: "10:00–11:30 AM & 2:00–5:15 PM" },
    { days: "Wednesday", time: "8:30–11:30 AM & 2:00–5:15 PM" },
    { days: "Thursday", time: "10:00–11:30 AM & 2:00–5:15 PM" },
    { days: "Friday", time: "8:30–11:30 AM & 2:00–5:15 PM" },
    { days: "Saturday", time: "8:30–11:00 AM (by appointment)" },
    { days: "Sunday", time: "Closed" },
  ],
};

export type Condition = {
  title: string;
  blurb: string;
};

/** VERIFIED — conditions named on the clinic's own site and social posts. */
export const conditions: Condition[] = [
  {
    title: "Sciatica",
    blurb:
      "Pain shooting into the buttock or leg — treated with decompression, adjustments and rehab, not surgery first.",
  },
  {
    title: "Disc herniation",
    blurb:
      "Bulging or herniated discs and pinched nerves, eased with gentle non-surgical spinal decompression.",
  },
  {
    title: "Lower back pain",
    blurb:
      "The most common reason patients walk in — from a bad lift, a long drive, or pain that built up over years.",
  },
  {
    title: "Neck pain & headaches",
    blurb:
      "Stiff necks, poor posture and tension headaches — adjusted, stretched and strengthened.",
  },
  {
    title: "Auto & work injuries",
    blurb:
      "Whiplash, back injuries and accident recovery, with documentation for your claim.",
  },
  {
    title: "Sports injuries",
    blurb:
      "Knee pain, running injuries and strains — treated so athletes get back to moving, not just resting.",
  },
];

export type TreatmentGroup = {
  title: string;
  blurb: string;
  items: string[];
  image?: string;
  imageAlt?: string;
};

/** VERIFIED — the clinic's own "premier services" list (Instagram, 2024). */
export const treatmentGroups: TreatmentGroup[] = [
  {
    title: "Chiropractic adjustments",
    blurb:
      "Hands-on spinal alignment, tailored to you — never the same three quick adjustments for everybody.",
    items: [
      "Spinal adjustments for back, neck and joints",
      "Muscle balancing therapies and stretches",
      "Guidance on the right and wrong way to move at work",
    ],
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hands-on therapeutic treatment on a patient's back",
  },
  {
    title: "Spinal decompression",
    blurb:
      "Gentle, non-surgical stretching that takes pressure off the disc — for sciatica, herniations and pinched nerves.",
    items: [
      "Triton spinal decompression table",
      "Painless, non-surgical approach",
      "A conservative route before surgery is ever discussed",
    ],
  },
  {
    title: "Physiotherapy & rehab",
    blurb:
      "Exercises, muscle stimulation and rehab programs that keep the fix fixed — not just a one-visit crack.",
    items: [
      "Therapy and rehab exercises",
      "Muscle stimulation and ultrasound therapy",
      "Balance exercise and strengthening",
    ],
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Woman doing core rehabilitation exercises on a mat",
  },
  {
    title: "Massage & soft-tissue therapy",
    blurb:
      "Therapeutic massage, trigger point therapy and cold laser to release tight muscles and speed healing.",
    items: [
      "Therapeutic massage",
      "Trigger point therapy",
      "Cold laser and shockwave therapy",
    ],
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Therapist applying oil during a back massage",
  },
];

/** VERIFIED — from the clinic's own site, Instagram and review listings. */
export const faqs = [
  {
    q: "Do I need an appointment?",
    a: "Walk-ins are welcome, but it is best to call so the clinic can be expecting you. The consultation with the doctor is always free. Call (713) 227-2222 for the Heights office or (713) 271-4000 for Southwest.",
  },
  {
    q: "Is spinal decompression surgery?",
    a: "No. It is a gentle, non-surgical treatment: you lie on a decompression table while it slowly stretches the spine to take pressure off the disc. The clinic describes it as painless, and it is used for sciatica, disc herniations and pinched nerves.",
  },
  {
    q: "Do you treat car accident injuries?",
    a: "Yes — auto accidents, work injuries and sports injuries are a big part of the practice. Patients come in after accidents for whiplash, back pain and herniated discs, and the clinic documents the treatment.",
  },
  {
    q: "Which location should I go to?",
    a: "Both clinics offer the same chiropractic care. Heights / Downtown is at 2914 N Main St, (713) 227-2222. Southwest / Bellaire is at 6216 Dashwood Dr, (713) 271-4000. PRP and the in-house medical partners are at the Heights location.",
  },
  {
    q: "Do you speak Spanish?",
    a: "Yes — the doctors and staff are fully bilingual in English and Spanish, and at the North Main office some staff also speak Portuguese.",
  },
  {
    q: "How much does it cost?",
    a: "The clinic does not publish prices — its site says to call for pricing options. The first consultation with the doctor is free. Call either office and they will explain the cost before any treatment.",
  },
];
