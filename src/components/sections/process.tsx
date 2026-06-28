import { Container, Eyebrow } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { process } from "@/lib/site";
import { Icon } from "@/components/ui/icon";

export function Process() {
  return (
    <>
      <section id="process" className="sec-light scroll-mt-20">
        <Container className="py-20 sm:py-28">
          <Eyebrow>How It Works</Eyebrow>
          <h2 className="display mt-6 max-w-4xl text-4xl sm:text-5xl md:text-[3.75rem]">
            Four steps to <span className="text-night/35">market leadership.</span>
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-night/10 bg-night/10 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <div key={step.num} className="flex flex-col bg-paper p-7">
                <div className="flex items-center gap-2 font-mono text-sm font-semibold text-night/40">
                  {step.num}
                  {i < process.length - 1 && <Icon name="arrow-right" size={16} className="text-accent-2" />}
                </div>
                <h3 className="mt-8 text-xl font-semibold uppercase tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-night/60">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Accent CTA band */}
      <section className="sec-accent relative overflow-hidden">
        <Container className="relative py-16 sm:py-20">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <h2 className="display text-4xl sm:text-5xl md:text-[3.5rem]">
                From visibility to market leadership.
              </h2>
              <p className="mt-5 text-lg font-medium text-night/70">
                Your first placement can be live in 5 business days.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button href="#contact" variant="solid-dark" size="lg" icon="arrow-right">
                Start Now
              </Button>
              <Button href="#services" variant="outline-dark" size="lg">
                View Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
