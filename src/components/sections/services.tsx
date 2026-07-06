import { Container } from "@/components/ui/section";
import { services } from "@/lib/site";
import { ServicesSlider } from "./services-slider";

export function Services() {
  return (
    <section id="services" className="sec-light relative scroll-mt-20 border-t border-line-light">
      <Container className="relative py-20 sm:py-28">
        <div className="max-w-3xl">
          <h2 className="display text-3xl sm:text-4xl md:text-[2.75rem]">
            Every channel. <span className="text-night/40">One direction.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-night/60 sm:text-lg">
            Five precision services, one outcome — your brand at the top of the conversation in every market that
            matters to you.
          </p>
        </div>

        <ServicesSlider services={services} />
      </Container>
    </section>
  );
}
