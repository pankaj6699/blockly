import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/lib/site";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { CtaBand } from "@/components/blocks/cta-band";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service" };
  return { title: service.name, description: service.description };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`Service ${service.num}`}
        image="/images/hero-services.png"
        title={service.name}
        description={service.longDescription}
        breadcrumb={{ label: "All services", href: "/services" }}
      >
        <div className="flex flex-wrap gap-2">
          {service.tags.map((t) => (
            <span key={t} className="rounded-full border border-cream/20 px-3 py-1 text-sm text-cream/70">
              {t}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="sec-light">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-start">
            <div>
              <span className="label-eyebrow text-night/55">— What you get</span>
              <h2 className="display mt-5 text-3xl sm:text-4xl">Deliverables</h2>
              <ul className="mt-8 space-y-4">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-night/75">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-night">
                      <Icon name="check" size={14} />
                    </span>
                    <span className="text-[15px] leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-2xl border border-night/10 bg-paper-3 p-7">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-night text-accent">
                <Icon name={service.icon} size={24} />
              </div>
              <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-night/50">Ideal for</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-night/75">{service.idealFor}</p>
              <div className="mt-6 border-t border-night/10 pt-6">
                <Button href="/contact" variant="accent" size="lg" className="w-full" icon="arrow-right">
                  Request this service
                </Button>
                <Link
                  href="/pricing"
                  className="mt-3 block text-center text-sm font-medium text-night/60 hover:text-night"
                >
                  See pricing
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Other services */}
      <section className="sec-dark">
        <Container className="py-20 sm:py-28">
          <h2 className="display text-3xl sm:text-4xl">Explore other services</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-2xl border border-line-dark bg-ink-2 p-6 transition-colors hover:border-accent/40"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-accent">
                  <Icon name={s.icon} size={20} />
                </span>
                <h3 className="mt-5 text-lg font-semibold uppercase tracking-tight text-cream">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/55">{s.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Learn more
                  <Icon name="arrow-right" size={14} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
