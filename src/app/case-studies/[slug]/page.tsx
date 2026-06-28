import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/lib/site";
import { Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { CtaBand } from "@/components/blocks/cta-band";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return { title: "Case Study" };
  return { title: `${study.client} — Case Study`, description: study.summary };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  return (
    <>
      <section className="sec-dark relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/images/hero-casestudies.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-right opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        </div>
        <div className="grid-dark pointer-events-none absolute inset-0 z-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top,#000_20%,transparent_70%)]" />
        <Container className="relative z-10 pt-28 pb-16 sm:pt-32">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm text-cream/60 transition-colors hover:text-cream"
          >
            <Icon name="arrow-right" size={14} className="rotate-180" />
            All case studies
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="label-eyebrow text-accent">{study.sector}</span>
            <span className="text-cream/30">·</span>
            <span className="text-sm text-cream/60">{study.service}</span>
            <span className="text-cream/30">·</span>
            <span className="text-sm text-cream/60">{study.date}</span>
          </div>
          <h1 className="display mt-4 max-w-4xl text-4xl sm:text-5xl">{study.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/65">{study.summary}</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {study.metrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-line-dark bg-ink-2 p-6 text-center">
                <div className="font-mono text-3xl font-semibold text-accent">{m.value}</div>
                <div className="mt-1 text-sm text-cream/55">{m.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="sec-light">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <aside>
              <div className="sticky top-24 rounded-2xl border border-night/10 bg-paper-3 p-6">
                <div className="label-eyebrow text-night/45">Client</div>
                <div className="mt-1 text-xl font-semibold text-night">{study.client}</div>
                <div className="mt-4 label-eyebrow text-night/45">Sector</div>
                <div className="mt-1 text-sm text-night/65">{study.sector}</div>
                <div className="mt-4 label-eyebrow text-night/45">Service</div>
                <div className="mt-1 text-sm text-night/65">{study.service}</div>
                <div className="mt-6 border-t border-night/10 pt-6">
                  <Button href="/contact" variant="accent" size="lg" className="w-full" icon="arrow-right">
                    Start your campaign
                  </Button>
                </div>
              </div>
            </aside>

            <div className="space-y-10">
              <div>
                <h2 className="display text-2xl sm:text-3xl">The challenge</h2>
                <p className="mt-3 leading-relaxed text-night/70">{study.challenge}</p>
              </div>
              <div>
                <h2 className="display text-2xl sm:text-3xl">Our approach</h2>
                <ul className="mt-4 space-y-3">
                  {study.approach.map((a) => (
                    <li key={a} className="flex items-start gap-3 leading-relaxed text-night/70">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-night">
                        <Icon name="check" size={14} />
                      </span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="display text-2xl sm:text-3xl">The outcome</h2>
                <p className="mt-3 leading-relaxed text-night/70">{study.outcome}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
