import { Container, Eyebrow } from "@/components/ui/section";
import { reasons } from "@/lib/site";
import { Stats } from "./stats";

export function Why() {
  return (
    <section id="why" className="sec-dark relative scroll-mt-20">
      <div className="grid-dark pointer-events-none absolute inset-0 opacity-40" />
      <Container className="relative py-20 sm:py-28">
        <Eyebrow tone="light">Why Blocly</Eyebrow>
        <h2 className="display mt-6 max-w-4xl text-4xl sm:text-5xl md:text-[3.75rem]">
          Six reasons <span className="text-accent">the best brands</span> choose us.
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line-dark bg-line-dark sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.num} className="group bg-ink p-7 transition-colors hover:bg-ink-2">
              <span className="font-mono text-sm font-semibold text-cream/35">{r.num}</span>
              <h3 className="mt-6 text-lg font-semibold uppercase tracking-tight text-cream">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/55">{r.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-line-dark pt-12">
          <Stats />
        </div>
      </Container>
    </section>
  );
}
