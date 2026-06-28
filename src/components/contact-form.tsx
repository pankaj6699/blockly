"use client";

import { useState, type FormEvent } from "react";
import { serviceOptions } from "@/lib/site";
import { Icon } from "./ui/icon";

const inputClass =
  "w-full rounded-xl border border-cream/15 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-cream/40 transition-colors focus:border-accent focus:outline-none";
const labelClass = "mb-1.5 block text-sm font-medium text-cream/80";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Front-end demo only — wire to an API route / CRM in production.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-cream/15 bg-cream/5 p-10 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-accent text-night">
          <Icon name="check" size={28} />
        </span>
        <h3 className="mt-5 text-xl font-semibold text-cream">Request received.</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-cream/60">
          Thanks for reaching out. We respond within 24 hours with a campaign plan tailored to your brand.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-accent hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-cream/15 bg-cream/5 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Full Name</label>
          <input required name="name" placeholder="Jane Doe" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Company / Protocol</label>
          <input required name="company" placeholder="Your brand" className={inputClass} />
        </div>
      </div>

      <div className="mt-4">
        <label className={labelClass}>Email</label>
        <input required type="email" name="email" placeholder="you@company.com" className={inputClass} />
      </div>

      <div className="mt-4">
        <label className={labelClass}>Service Needed</label>
        <select name="service" defaultValue="" className={inputClass} required>
          <option value="" disabled>
            Select a service...
          </option>
          {serviceOptions.map((s) => (
            <option key={s} value={s} className="bg-ink-2 text-cream">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label className={labelClass}>Tell Us About Your Goals</label>
        <textarea
          name="message"
          rows={4}
          placeholder="What are you launching, and what does success look like?"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[15px] font-semibold text-night transition-all hover:-translate-y-0.5"
      >
        Submit Request
        <Icon name="arrow-right" size={16} />
      </button>
      <p className="mt-3 text-center text-xs text-cream/45">
        We respond within 24 hours. No spam, no pushy sales calls.
      </p>
    </form>
  );
}
