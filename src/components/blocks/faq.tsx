import { faqs as defaultFaqs, type Faq } from "@/lib/site";

export function FaqList({
  items = defaultFaqs,
  onDark = false,
}: {
  items?: Faq[];
  onDark?: boolean;
}) {
  const border = onDark ? "divide-line-dark border-line-dark" : "divide-night/10 border-night/10";
  const bg = onDark ? "bg-ink-2" : "bg-paper-3";
  const q = onDark ? "text-cream" : "text-night";
  const a = onDark ? "text-cream/60" : "text-night/60";
  const ring = onDark ? "border-cream/20 text-cream/70" : "border-night/20 text-night/60";

  return (
    <div className={`divide-y overflow-hidden rounded-2xl border ${border} ${bg}`}>
      {items.map((f) => (
        <details key={f.q} className="group px-6 py-5">
          <summary className={`flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium ${q}`}>
            {f.q}
            <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-transform group-open:rotate-45 ${ring}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className={`mt-3 text-sm leading-relaxed ${a}`}>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
