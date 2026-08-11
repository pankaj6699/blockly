import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { CtaBand } from "@/components/blocks/cta-band";
import { getBlogPosts } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Playbooks and analysis on crypto PR, link building, KOL vetting, GEO campaigns, and Web3 growth — from the team that runs them.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  if (!posts || posts.length === 0) return null;
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured?.slug);

  return (
    <>
      <PageHero
        image="/images/hero-insights.png"
        title={<>What we know. <span className="text-accent">What you should too.</span></>}
        description="Data-led playbooks on getting cited, covered, and discovered — written by the team that does it daily."
      />

      <section className="sec-light">
        <Container className="py-20 sm:py-28">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-2xl border border-night/10 bg-paper-3 transition-colors hover:border-night/25 lg:grid-cols-2"
          >
            <div className="relative min-h-56 overflow-hidden border-b border-night/10 bg-ink lg:border-b-0 lg:border-r lg:border-line-dark">
              <img
                src={featured.image || "/images/hero-insights.png"}
                alt={featured.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
              <div className="absolute inset-0 bg-grid-pattern opacity-30" />
              <span className="absolute left-6 top-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-night">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-center p-8">
              <div className="flex items-center gap-2 text-xs text-night/45">
                <span className="font-semibold text-accent-2">{featured.category}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="mt-3 text-2xl font-semibold leading-snug text-night">{featured.title}</h2>
              <p className="mt-3 leading-relaxed text-night/60">{featured.excerpt}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-night/45">{featured.date}</span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-night transition-colors group-hover:text-accent-2">
                  Read Article
                  <Icon name="arrow-right" size={15} />
                </span>
              </div>
            </div>
          </Link>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col rounded-2xl border border-night/10 bg-paper-3 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-night/25"
              >
                {p.image ? (
                  <div className="mb-4 overflow-hidden rounded-xl border border-night/10">
                    <img src={p.image} alt={p.title} className="h-40 w-full object-cover" />
                  </div>
                ) : null}
                <div className="flex items-center gap-2 text-xs text-night/45">
                  <span className="font-semibold text-accent-2">{p.category}</span>
                  <span>·</span>
                  <span>{p.readTime}</span>
                </div>
                <h3 className="mt-3 flex-1 text-lg font-semibold leading-snug text-night">{p.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-night/55">{p.excerpt}</p>
                <span className="mt-4 text-xs text-night/45">{p.date}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title="Want this analysis applied to your brand?" subtitle="Get a free audit and we'll turn these playbooks into a plan for your project." />
    </>
  );
}
