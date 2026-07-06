import { Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { process } from "@/lib/site";

export function Process() {
  return (
    <>
      <section id="process" className="sec-light scroll-mt-20 border-t border-line-light">
        <Container className="py-20 sm:py-28">
          <div className="max-w-3xl">
            <h2 className="display text-3xl sm:text-4xl md:text-[2.75rem]">
              Four steps to <span className="text-night/40">market leadership.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div key={step.num} className="panel flex flex-col p-6">
                <span className="font-mono text-xs text-night/40">{step.num}</span>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-night">{step.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-night/60">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="sec-accent relative overflow-hidden border-t border-night/10">
        <Container className="relative py-14 sm:py-16">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="display text-3xl sm:text-4xl md:text-[2.5rem]">
                From visibility to market leadership.
              </h2>
              <p className="mt-4 text-base text-night/65 sm:text-lg">
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
