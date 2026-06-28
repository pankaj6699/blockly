import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { CtaBand } from "@/components/blocks/cta-band";
import { scoringSignals, process } from "@/lib/site";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "How Blocly scores every publication before recommending a placement — five weighted signals, published openly. No black box.",
};

const principles = [
  {
    icon: "shield" as const,
    title: "No black box",
    description: "Every signal and weight is published. You can see exactly why an outlet made the list.",
  },
  {
    icon: "chart" as const,
    title: "Measured, not guessed",
    description: "Scores come from data — domain authority, reach, AI citations — not gut feel or relationships.",
  },
  {
    icon: "star" as const,
    title: "Editorial first",
    description: "Advertorial farms score low by design. We only recommend outlets with genuine editorial standards.",
  },
];

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Methodology"
        image="/images/hero-methodology.png"
        title={<>We score every outlet. <span className="text-accent">And we show our work.</span></>}
        description="Before we recommend a single placement, every publication is ranked on five weighted signals. Here's exactly how — no black box."
      />

      {/* Weights */}
      <section className="sec-light">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow="The score"
              title={<>Five signals, <span className="text-night/35">one ranking.</span></>}
              description="Each publication gets a 0–100 Blocly Score built from these weighted signals. Higher scores earn placement priority."
            />
            <div className="rounded-2xl border border-night/10 bg-paper-3 p-7">
              <div className="space-y-6">
                {scoringSignals.map((s) => (
                  <div key={s.label}>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-night">{s.label}</span>
                      <span className="font-mono text-sm text-night/60">{s.weight}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-night/10">
                      <div className="h-full rounded-full bg-accent" style={{ width: `${s.weight}%` }} />
                    </div>
                    <p className="mt-2 text-sm text-night/55">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="sec-dark">
        <Container className="py-20 sm:py-28">
          <SectionHeading onDark eyebrow="Principles" title="Why brands trust the score." />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="rounded-2xl border border-line-dark bg-ink-2 p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-accent">
                  <Icon name={p.icon} size={22} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-cream">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/55">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Closed loop */}
      <section className="sec-light">
        <Container className="py-20 sm:py-28">
          <SectionHeading
            eyebrow="The loop"
            title={<>Scored outlets are <span className="text-night/35">step one.</span></>}
            description="The score decides where we place. Then the same disciplined cycle runs every campaign."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-night/10 bg-night/10 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div key={step.num} className="bg-paper p-7">
                <span className="font-mono text-sm font-semibold text-night/40">{step.num}</span>
                <h3 className="mt-6 text-lg font-semibold uppercase tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-night/60">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title="See where your brand could be placed." subtitle="Get a free audit with scored outlet recommendations for your sector." />
    </>
  );
}
