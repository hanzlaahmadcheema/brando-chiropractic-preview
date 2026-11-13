"use client";

import { useState } from "react";
import { clinic } from "@/lib/content";

/**
 * Appointment request form. Client-side validation only — the request is
 * confirmed on screen; the clinic calls back to confirm the visit.
 */
export function AppointmentForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("Heights / Downtown — 2914 N Main St");
  const [reason, setReason] = useState("Lower back pain");
  const [day, setDay] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs: string[] = [];
    if (!name.trim()) errs.push("Please enter your name.");
    if (!phone.trim()) errs.push("Please enter your phone number.");
    if (!day.trim()) errs.push("Please choose a preferred day.");
    setErrors(errs);
    if (errs.length === 0) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-leaf-500/40 bg-pine-50 p-6 text-center sm:p-8" role="status">
        <p className="font-serif text-2xl font-semibold text-pine-950">
          Thanks, {name} — your request is in.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink/80">
          You asked for a visit for <strong>{reason.toLowerCase()}</strong> at
          the <strong>{location.split(" — ")[0]}</strong> office
          {day ? <> on <strong>{day}</strong></> : null}. The clinic will
          call you at <strong>{phone}</strong> to confirm your appointment.
          {notes.trim() ? ` Your note: “${notes.trim()}”.` : ""}
        </p>
        <p className="mt-3 text-xs text-muted">
          In pain right now? Call{" "}
          <a href={`tel:${clinic.phoneHeightsTel}`} className="font-semibold text-pine-800 underline">
            {clinic.phoneHeightsDisplay}
          </a>{" "}
          (Heights) or{" "}
          <a href={`tel:${clinic.phoneSouthwestTel}`} className="font-semibold text-pine-800 underline">
            {clinic.phoneSouthwestDisplay}
          </a>{" "}
          (Southwest) — walk-ins are welcome.
        </p>
      </div>
    );
  }

  const input =
    "w-full rounded-xl border border-pine-900/20 bg-white px-4 py-3 text-base text-ink placeholder:text-muted/70 focus:border-pine-600 focus:outline-none focus:ring-2 focus:ring-pine-600/20";
  const label = "mb-1.5 block text-sm font-bold text-pine-950";

  return (
    <form onSubmit={submit} noValidate className="rounded-2xl border border-pine-900/10 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="font-serif text-2xl font-semibold text-pine-950">
        Request an appointment
      </h3>
      <p className="mt-1 text-sm text-muted">
        Tell us what hurts and where you would like to come in — the clinic
        calls you back to confirm. Your first consultation is free.
      </p>
      {errors.length > 0 && (
        <ul className="mt-4 space-y-1 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700" role="alert">
          {errors.map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="apt-name" className={label}>
            Your name
          </label>
          <input
            id="apt-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Maria Gonzalez"
            className={input}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="apt-phone" className={label}>
            Phone number
          </label>
          <input
            id="apt-phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(713) 555-0100"
            className={input}
            autoComplete="tel"
            inputMode="tel"
          />
        </div>
        <div>
          <label htmlFor="apt-location" className={label}>
            Which office?
          </label>
          <select
            id="apt-location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={input}
          >
            <option value="Heights / Downtown — 2914 N Main St">
              Heights / Downtown — 2914 N Main St
            </option>
            <option value="Southwest / Bellaire — 6216 Dashwood Dr">
              Southwest / Bellaire — 6216 Dashwood Dr
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="apt-reason" className={label}>
            What hurts?
          </label>
          <select
            id="apt-reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className={input}
          >
            {[
              "Lower back pain",
              "Neck pain",
              "Sciatica",
              "Disc herniation / pinched nerve",
              "Auto accident injury",
              "Work injury",
              "Sports injury",
              "Something else",
            ].map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="apt-day" className={label}>
            Preferred day
          </label>
          <input
            id="apt-day"
            type="date"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className={input}
          />
        </div>
        <div>
          <label htmlFor="apt-notes" className={label}>
            Anything else? <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="apt-notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g. Hurt my back lifting at work"
            className={input}
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-5 w-full rounded-full bg-pine-800 px-6 py-3.5 text-base font-bold text-white hover:bg-pine-900"
      >
        Request my appointment
      </button>
      <p className="mt-3 text-center text-xs text-muted">
        No payment needed to request. The clinic confirms every visit by
        phone — and explains the cost before any treatment.
      </p>
    </form>
  );
}
