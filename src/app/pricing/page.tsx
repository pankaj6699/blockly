import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { FaqList } from "@/components/blocks/faq";
import { Reviews } from "@/components/blocks/reviews";
import { CtaBand } from "@/components/blocks/cta-band";
import { pricing, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for Blocly placements and campaigns. Buy a single placement à la carte, or scale with a monthly retainer. Pay in crypto or card.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        image="/images/hero-pricing.png"
        title={<>Pay for a live URL. <span className="text-accent">Not a maybe.</span></>}
        description="Start with a single placement or scale with an always-on retainer. No vendor clutter, no hidden fees — and you can pay in crypto."
      />

      {/* Tiers */}
      <section className="sec-light">
        <Container className="py-20 sm:py-24">
          <div className="grid items-start gap-6 lg:grid-cols-3">
            {pricing.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex h-full flex-col rounded-2xl p-7 ${
                  tier.featured
                    ? "bg-ink text-cream ring-2 ring-accent"
                    : "border border-night/10 bg-paper-3"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-night">
                    Most popular
                  </span>
                )}
                <h3 className={`text-lg font-semibold uppercase tracking-tight ${tier.featured ? "text-cream" : "text-night"}`}>
                  {tier.name}
                </h3>
                <p className={`mt-2 text-sm ${tier.featured ? "text-cream/60" : "text-night/60"}`}>{tier.blurb}</p>
                <div className="mt-6 flex items-end gap-2">
                  <span className={`text-4xl font-semibold tracking-tight ${tier.featured ? "text-accent" : "text-night"}`}>
                    {tier.price}
                  </span>
                  <span className={`mb-1 text-sm ${tier.featured ? "text-cream/50" : "text-night/50"}`}>
                    {tier.cadence}
                  </span>
                </div>
                <Button
                  href="/contact"
                  variant={tier.featured ? "accent" : "solid-dark"}
                  size="lg"
                  className="mt-6 w-full"
                >
                  {tier.cta}
                </Button>
                <ul className={`mt-7 space-y-3 border-t pt-6 ${tier.featured ? "border-line-dark" : "border-night/10"}`}>
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2.5 text-sm ${tier.featured ? "text-cream/75" : "text-night/70"}`}
                    >
                      <Icon name="check" size={16} className="mt-0.5 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-night/55">
            All plans include verified reporting (live URL + DA), a dedicated point of contact, and crypto payment
            support.
          </p>
        </Container>
      </section>

      {/* Per-service à la carte */}
      <section className="sec-dark">
        <Container className="py-20 sm:py-24">
          <SectionHeading
            onDark
            eyebrow="À la carte"
            title="Prefer to buy one service at a time?"
            description="Every service is available standalone. Mix and match to build exactly the campaign you need."
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line-dark bg-line-dark sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.slug} className="flex items-center gap-4 bg-ink p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-ink-2 text-accent">
                  <Icon name={s.icon} size={20} />
                </span>
                <span className="text-sm font-medium text-cream">{s.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Reviews */}
      <section className="sec-light">
        <Container className="py-20 sm:py-24">
          <SectionHeading eyebrow="What clients say" title="Trusted by teams who measure everything." />
          <div className="mt-10">
            <Reviews />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="sec-dark">
        <Container className="py-20 sm:py-24">
          <SectionHeading onDark eyebrow="FAQ" title="Questions, answered." />
          <div className="mt-10">
            <FaqList onDark />
          </div>
        </Container>
      </section>

      <CtaBand title="Ready when you are." subtitle="Get a campaign plan and your first placement live within 5 business days." />
    </>
  );
}
