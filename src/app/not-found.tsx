import { Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="sec-dark relative overflow-hidden">
      <div className="grid-dark pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" />
      <Container className="relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <span className="display font-mono text-7xl text-accent">404</span>
        <h1 className="display mt-4 text-3xl text-cream">This page went off-chain.</h1>
        <p className="mt-3 max-w-md text-cream/60">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="#top" variant="accent" size="lg" icon="arrow-right">
            Back to home
          </Button>
          <Button href="#contact" variant="outline-light" size="lg">
            Get Placements
          </Button>
        </div>
      </Container>
    </section>
  );
}
