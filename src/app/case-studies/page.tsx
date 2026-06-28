import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { CtaBand } from "@/components/blocks/cta-band";
import { caseStudies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real Blocly campaigns with measured, attributable outcomes across press, links, and KOL — dated and verifiable, no vanity metrics.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        image="/images/hero-casestudies.png"
        title={<>Documented results. <span className="text-accent">No vanity metrics.</span></>}
        description="Every engagement closes with attribution — what got placed, what it moved, and when we measured it."
      />

      <section className="sec-light">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-night/10 bg-paper-3 transition-all duration-300 hover:-translate-y-1 hover:border-night/25"
              >
                <div className="relative border-b border-night/10 bg-ink p-6 text-cream">
                  <div className="grid-dark absolute inset-0 opacity-40" />
                  <div className="relative">
                    <span className="label-eyebrow text-accent">{c.sector}</span>
                    <div className="mt-2 text-2xl font-semibold">{c.client}</div>
                    <div className="mt-4 flex gap-5">
                      {c.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="font-mono text-xl font-semibold text-accent">{m.value}</div>
                          <div className="text-[10px] text-cream/55">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-medium text-accent-2">{c.service}</span>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-night">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-night/60">{c.summary}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-night/10 pt-4">
                    <span className="text-xs text-night/45">{c.date}</span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-night transition-colors group-hover:text-accent-2">
                      Read case
                      <Icon name="arrow-right" size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
