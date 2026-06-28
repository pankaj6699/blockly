import { reviews, reviewSummary } from "@/lib/site";
import { Icon } from "@/components/ui/icon";

export function Reviews({ onDark = false }: { onDark?: boolean }) {
  const cardBg = onDark
    ? "border-line-dark bg-ink-2"
    : "border-night/10 bg-paper-3";
  const quoteColor = onDark ? "text-cream" : "text-night";
  const metaColor = onDark ? "text-cream/55" : "text-night/55";

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon key={i} name="star" size={18} className="text-accent" />
          ))}
        </div>
        <span className={`text-lg font-semibold ${quoteColor}`}>{reviewSummary.rating}/5</span>
        <span className={`text-sm ${metaColor}`}>{reviewSummary.label}</span>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {reviews.map((r) => (
          <figure key={r.name} className={`flex flex-col rounded-2xl border p-6 ${cardBg}`}>
            <Icon name="quote" size={24} className="text-accent" />
            <blockquote className={`mt-4 flex-1 text-[15px] leading-relaxed ${quoteColor}`}>{r.quote}</blockquote>
            <figcaption className={`mt-5 flex items-center gap-3 border-t pt-4 ${onDark ? "border-line-dark" : "border-night/10"}`}>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-sm font-semibold text-night">
                {r.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
              <div>
                <div className={`text-sm font-medium ${quoteColor}`}>{r.name}</div>
                <div className={`text-xs ${metaColor}`}>
                  {r.role}, {r.company}
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
