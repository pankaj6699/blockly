import { Container, Eyebrow } from "@/components/ui/section";
import { contactHighlights } from "@/lib/site";
import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <section id="contact" className="sec-dark relative scroll-mt-20">
      <div className="grid-dark pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_bottom,#000_20%,transparent_70%)]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[120px]" />

      <Container className="relative py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <Eyebrow tone="light">Get Started</Eyebrow>
            <h2 className="display mt-6 text-4xl sm:text-5xl md:text-[3.25rem]">
              From <span className="text-accent">visibility</span> to market leadership.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/65">
              Tell us about your brand and what you need. We&apos;ll put together a campaign plan and get your first
              placement live within 5 business days.
            </p>

            <div className="mt-10 space-y-3">
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
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
