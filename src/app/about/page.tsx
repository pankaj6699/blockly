import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Stats } from "@/components/sections/stats";
import { CtaBand } from "@/components/blocks/cta-band";
import { values, team, scoringSignals } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Blocly is a crypto-native PR and link-building agency operating natively across Web2 and Web3 — guaranteed editorial placements, measured every time.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/hero-about.png"
        title={<>We own the channels <span className="text-accent">that move markets.</span></>}
        description="Blocly is a PR and link-building agency built for high-growth Web2 and Web3 brands. One team, native in both ecosystems, with pre-negotiated editorial relationships across 200+ publications."
      />

      {/* Stats */}
      <section className="sec-dark border-t border-line-dark">
        <Container className="py-14">
          <Stats />
        </Container>
      </section>

      {/* Story */}
      <section className="sec-light">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <SectionHeading
              title={<>From scattered spend to <span className="text-night/35">guaranteed placements.</span></>}
            />
            <div className="space-y-4 text-[15px] leading-relaxed text-night/70">
              <p>
                Blocly started with a simple frustration: crypto and tech teams were pouring budget into PR and link
                building with no idea what it returned. Distribution lists were bloated, &quot;placements&quot; were
                advertorials in disguise, and reporting was vague exposure no one could verify.
              </p>
              <p>
                So we built an agency around guarantees and measurement. We pre-negotiate editorial relationships, so
                you pay for a live URL — never a pitch. We operate natively in both Web2 and Web3, with the same
                standards across every vertical. And we report real numbers: live links, DA scores, reach, and
                referral data.
              </p>
              <p>
                Today we run press, links, research, KOL, and GEO-targeted campaigns for brands from stealth launches
                to market leaders — across MENA, APAC, LATAM, Eastern Europe, and SEA.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="sec-dark">
        <Container className="py-20 sm:py-28">
          <SectionHeading onDark title="The principles behind every campaign." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-line-dark bg-ink-2 p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-accent">
                  <Icon name={v.icon} size={22} />
                </span>
                <h3 className="mt-5 text-base font-semibold text-cream">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/55">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Methodology teaser */}
      <section className="sec-light">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                title={<>We score every outlet. <span className="text-night/35">And we show our work.</span></>}
                description="No black box. We rank publications on five weighted signals before a single placement is recommended."
              />
              <Button href="/methodology" variant="solid-dark" size="lg" className="mt-8" icon="arrow-right">
                See the full methodology
              </Button>
            </div>
            <div className="rounded-2xl border border-night/10 bg-paper-3 p-7">
              <div className="space-y-4">
                {scoringSignals.map((s) => (
                  <div key={s.label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-night">{s.label}</span>
                      <span className="font-mono text-night/60">{s.weight}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-night/10">
                      <div className="h-full rounded-full bg-accent" style={{ width: `${s.weight}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="sec-dark">
        <Container className="py-20 sm:py-28">
          <SectionHeading onDark title="One point of contact. A full campaign crew." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.name} className="rounded-2xl border border-line-dark bg-ink-2 p-6 text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent text-lg font-semibold text-night">
                  {m.initials}
                </span>
                <h3 className="mt-5 text-base font-semibold text-cream">{m.name}</h3>
                <p className="mt-1 text-sm text-cream/55">{m.role}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-cream/45">
            Want to join the network?{" "}
            <Link href="/contact" className="font-medium text-accent hover:underline">
              Get in touch
            </Link>
            .
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
