"use client";

import { useState, type FormEvent } from "react";
import { serviceOptions } from "@/lib/site";
import { Icon } from "./ui/icon";

const inputClass =
  "w-full rounded-lg border border-cream/12 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-cream/35 transition-colors focus:border-accent focus:outline-none";
const labelClass = "mb-1.5 block font-mono text-[11px] tracking-wide text-cream/60 uppercase";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="panel-dark flex flex-col items-center justify-center rounded-xl border border-line-dark bg-ink-2/60 p-10 text-center">
        <span className="grid h-12 w-12 place-items-center rounded-lg bg-accent text-night">
          <Icon name="check" size={24} />
        </span>
        <h3 className="mt-5 text-lg font-semibold text-cream">Request received.</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-cream/55">
          Thanks for reaching out. We respond within 24 hours with a campaign plan tailored to your brand.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 font-mono text-xs tracking-wide text-accent uppercase hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="panel-dark rounded-xl border border-line-dark bg-ink-2/60 p-6 sm:p-8">
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
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-night transition-all hover:brightness-105"
      >
        Submit Request
        <Icon name="arrow-right" size={15} />
      </button>
      <p className="mt-3 text-center font-mono text-[10px] tracking-wide text-cream/40 uppercase">
        We respond within 24 hours. No spam, no pushy sales calls.
      </p>
    </form>
  );
}
