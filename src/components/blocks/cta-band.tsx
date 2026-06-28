import { Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export function CtaBand({
  title = "From visibility to market leadership.",
  subtitle = "Your first placement can be live in 5 business days.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="sec-accent">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <h2 className="display text-4xl sm:text-5xl">{title}</h2>
            <p className="mt-5 text-lg font-medium text-night/70">{subtitle}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="solid-dark" size="lg" icon="arrow-right">
              Get Placements
            </Button>
            <Button href="/services" variant="outline-dark" size="lg">
              View Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
