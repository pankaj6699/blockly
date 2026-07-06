import { Container } from "@/components/ui/section";
import { contactHighlights } from "@/lib/site";
import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <section id="contact" className="sec-dark relative scroll-mt-20 border-t border-line-dark">
      <div className="grid-dark pointer-events-none absolute inset-0 opacity-25" />

      <Container className="relative py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <h2 className="display text-3xl sm:text-4xl md:text-[2.75rem]">
              From <span className="text-accent">visibility</span> to market leadership.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/60 sm:text-lg">
              Tell us about your brand and what you need. We&apos;ll put together a campaign plan and get your first
              placement live within 5 business days.
            </p>

            <div className="mt-8 space-y-3">
              {contactHighlights.map((h) => (
                <div
                  key={h.num}
                  className="flex items-start gap-4 rounded-lg border border-line-dark bg-ink-2/50 p-4"
                >
                  <span className="font-mono text-xs text-accent">{h.num}</span>
                  <div>
                    <div className="text-sm font-semibold text-cream">{h.title}</div>
                    <div className="mt-0.5 text-sm text-cream/50">{h.description}</div>
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
