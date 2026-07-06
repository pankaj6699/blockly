import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { CtaBand } from "@/components/blocks/cta-band";
import { FaqList } from "@/components/blocks/faq";
import { services, process } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Blogger outreach, digital PR campaigns, Web3 media placement, brand mentions, and white label services — five precision services for Web2 + Web3 brands.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image="/images/hero-services.png"
        title={<>Every channel. <span className="text-accent">One direction.</span></>}
        description="Five precision services, one outcome — your brand at the top of the conversation in every market that matters to you. Buy à la carte or bundle into a retainer."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" variant="accent" size="lg" icon="arrow-right">
            Get Placements
          </Button>
          <Button href="/pricing" variant="outline-light" size="lg">
            See pricing
          </Button>
        </div>
      </PageHero>

      {/* Services grid */}
      <section className="sec-light">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-night/10 bg-night/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col bg-paper p-7 transition-colors duration-300 hover:bg-paper-3"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-night text-accent">
                    <Icon name={s.icon} size={22} />
                  </span>
                  <span className="font-mono text-sm font-semibold text-night/40">
                    {s.num}
                    <span className="text-accent-2">+</span>
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold uppercase tracking-tight">{s.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-night/60">{s.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-night transition-colors group-hover:text-accent-2">
                  Explore service
                  <Icon name="arrow-right" size={15} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="sec-dark">
        <Container className="py-20 sm:py-28">
          <SectionHeading
            onDark
            title={<>A closed loop, <span className="text-accent">not a one-off.</span></>}
            description="Every engagement runs the same disciplined cycle — so you always know what was done and what it moved."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line-dark bg-line-dark md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div key={step.num} className="bg-ink p-7">
                <span className="font-mono text-sm font-semibold text-cream/35">{step.num}</span>
                <h3 className="mt-6 text-lg font-semibold uppercase tracking-tight text-cream">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/55">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="sec-light">
        <Container className="py-20 sm:py-28">
          <SectionHeading title="Questions, answered." />
          <div className="mt-12">
            <FaqList />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
