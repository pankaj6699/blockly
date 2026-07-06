import { Container } from "@/components/ui/section";
import { reasons } from "@/lib/site";
import { Stats } from "./stats";

export function Why() {
  return (
    <section id="why" className="sec-dark relative scroll-mt-20 border-t border-line-dark">
      <div className="grid-dark pointer-events-none absolute inset-0 opacity-30" />
      <Container className="relative py-20 sm:py-28">
        <div className="max-w-3xl">
          <h2 className="display text-3xl sm:text-4xl md:text-[2.75rem]">
            Six reasons <span className="text-accent">the best brands</span> choose us.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.num}
              className="panel-dark group rounded-xl border border-line-dark bg-ink-2/40 p-6 transition-colors hover:border-cream/10 hover:bg-ink-2/70"
            >
              <span className="font-mono text-xs text-cream/35">{r.num}</span>
              <h3 className="mt-4 text-base font-semibold tracking-tight text-cream">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/55">{r.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-xl border border-line-dark">
          <Stats />
        </div>
      </Container>
    </section>
  );
}
