import Image from "next/image";
import { Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { publications } from "@/lib/site";

function Marquee() {
  const row = [...publications, ...publications];
  return (
    <div className="relative z-10 border-y border-line-dark bg-ink-2 py-4">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee items-center">
          {row.map((p, i) => (
            <div key={`${p}-${i}`} className="flex items-center whitespace-nowrap">
              <span className="px-6 text-lg font-medium tracking-tight text-cream/55">{p}</span>
              <span className="text-accent">✦</span>
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
          src="/images/hero-home.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30" />
      </div>
      <div className="grid-dark pointer-events-none absolute inset-0 z-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,#000_25%,transparent_70%)]" />
      <div className="pointer-events-none absolute -right-40 top-0 z-0 h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-[120px]" />

      <Container className="relative z-10 pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-3.5 py-1.5 text-xs font-medium text-cream/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Live — Premium Placements Available
          </span>
          <span className="label-eyebrow text-cream/40">/// Web2 + Web3</span>
        </div>

        <h1 className="display mt-8 max-w-5xl text-5xl sm:text-7xl md:text-[5.5rem]">
          Your market is
          <br className="hidden sm:block" /> waiting.{" "}
          <span className="text-accent">We place
          <br className="hidden sm:block" /> the links.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream/65">
          Blocly places premium editorial links and runs GEO-targeted PR campaigns for high-growth Web2 and Web3
          brands. From Forbes to Cointelegraph — we own the channels that move markets.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
