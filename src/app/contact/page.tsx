import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/section";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/ui/icon";
import { site, contactHighlights } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your brand and what you need. We'll put together a campaign plan and get your first placement live within 5 business days.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Started"
        image="/images/hero-contact.png"
        title={<>From <span className="text-accent">visibility</span> to market leadership.</>}
        description="Tell us about your brand and what you need. We'll put together a campaign plan and get your first placement live within 5 business days."
      />

      <section className="sec-dark">
        <Container className="pb-20 sm:pb-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <div>
              <div className="space-y-3">
                {contactHighlights.map((h) => (
                  <div
                    key={h.num}
                    className="flex items-center gap-4 rounded-xl border border-line-dark bg-ink-2/60 p-4"
                  >
                    <span className="font-mono text-sm font-semibold text-accent">{h.num}</span>
                    <div>
                      <div className="text-sm font-semibold text-cream">{h.title}</div>
                      <div className="text-sm text-cream/55">{h.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-line-dark bg-ink-2/60 p-6">
                <p className="text-sm text-cream/60">Prefer email? Reach us directly at</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-accent hover:underline"
                >
                  <Icon name="arrow-up-right" size={16} />
                  {site.email}
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
