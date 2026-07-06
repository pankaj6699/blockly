import Image from "next/image";
import { asset } from "@/lib/assets";
import { Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { publications } from "@/lib/site";

function Marquee() {
  const row = [...publications, ...publications];
  return (
    <div className="relative z-10 border-y border-line-dark bg-ink-2/95 py-3.5">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee items-center">
          {row.map((p, i) => (
            <div key={`${p}-${i}`} className="flex items-center whitespace-nowrap">
              <span className="px-5 font-mono text-xs tracking-wide text-cream/45 uppercase">{p}</span>
              <span className="text-cream/20">·</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="sec-dark relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={asset("/images/hero-home.png")}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/92 to-ink" />
      </div>
      <div className="grid-dark pointer-events-none absolute inset-0 z-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,#000_30%,transparent_75%)]" />

      <Container className="relative z-10 flex flex-col items-center pt-32 pb-20 text-center sm:pt-36 sm:pb-24">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/12 bg-cream/5 px-3.5 py-1.5 font-mono text-[11px] tracking-wide text-cream/75 uppercase">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Live — Premium Placements Available
          </span>
        </div>

        <h1 className="display mx-auto mt-8 max-w-4xl text-4xl sm:text-6xl md:text-[4.5rem]">
          We sell links.
          <br className="hidden sm:block" />{" "}
          <span className="text-accent">Brands build authority.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/60 sm:text-lg">
          Blocly places premium editorial links and runs GEO-targeted PR campaigns for high-growth Web2 and Web3
          brands. From Forbes to Cointelegraph — we own the channels that move markets.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="#contact" variant="accent" size="lg" icon="arrow-right">
            Get Placements
          </Button>
          <Button href="#services" variant="outline-light" size="lg">
            Our Services
          </Button>
        </div>
      </Container>

      <Marquee />
    </section>
  );
}
