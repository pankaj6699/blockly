import { Container, Eyebrow } from "@/components/ui/section";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="sec-light relative scroll-mt-20">
      <div className="grid-light pointer-events-none absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
      <Container className="relative py-20 sm:py-28">
        <Eyebrow>What We Do</Eyebrow>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <h2 className="display text-4xl sm:text-5xl md:text-[3.75rem]">
            Every channel. <span className="text-night/35">One direction.</span>
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-night/65">
            Six precision services, one outcome — your brand at the top of the conversation in every market that
            matters to you.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-night/10 bg-night/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.num}
              className="group relative flex flex-col bg-paper p-7 transition-colors duration-300 hover:bg-paper-3"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm font-semibold text-night/40">
                  {s.num}
                  <span className="text-accent-2">+</span>
                </span>
                <span className="h-2 w-2 rounded-full bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h3 className="mt-10 text-xl font-semibold uppercase tracking-tight">{s.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-night/60">{s.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-night/15 px-2.5 py-1 text-xs font-medium text-night/55"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
