import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/assets";
import { posts } from "@/lib/site";
import { Container } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { CtaBand } from "@/components/blocks/cta-band";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Blog" };
  return { title: post.title, description: post.excerpt };
}

const body = [
  {
    h: "Why this matters now",
    p: "The way buyers discover crypto and tech brands has shifted. They no longer start with ten blue links — they ask an AI, skim a community thread, or trust an outlet they already read. Visibility is now spread across surfaces most teams never measure, and the brands that win are the ones treating it as a system rather than a series of one-off pushes.",
  },
  {
    h: "What the data shows",
    p: "Across the campaigns we've run, the winners share three traits: they appear in genuine tier-1 editorial, they're structured so search and AI engines can cite them confidently, and they show up in the communities where decisions actually happen. Raw reach never correlates with results — attribution does. A handful of well-placed, verifiable links consistently outperforms a blast across outlets nobody reads.",
  },
  {
    h: "How to apply it",
    p: "Start with an honest audit of where you appear and where you don't. Prioritize the gaps with the highest leverage for your sector, ship genuine editorial placements rather than advertorials, and re-measure on a fixed cadence. Vet every KOL for authentic engagement before you spend, and localize — don't just translate — when you expand into new regions.",
  },
  {
    h: "The takeaway",
    p: "Treat visibility as a measurable system, not a collection of disconnected campaigns. Pay for live URLs you can verify, insist on real editorial, and demand attribution for every dollar. That discipline is what turns scattered spend into compounding market leadership.",
  },
];

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <section className="sec-dark relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src={asset("/images/hero-insights.png")}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-right opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        </div>
        <div className="grid-dark pointer-events-none absolute inset-0 z-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,#000_20%,transparent_70%)]" />
        <Container className="relative z-10 max-w-3xl pt-28 pb-14 sm:pt-32">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-cream/60 transition-colors hover:text-cream"
          >
            <Icon name="arrow-right" size={14} className="rotate-180" />
            All articles
          </Link>
          <div className="mt-6 flex items-center gap-3 text-xs text-cream/55">
            <span className="rounded-full border border-cream/20 px-3 py-1 font-semibold text-accent">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="display mt-5 text-3xl sm:text-4xl md:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-cream/65">{post.excerpt}</p>
        </Container>
      </section>

      <article className="sec-light">
        <Container className="max-w-3xl py-16 sm:py-20">
          <div className="space-y-8">
            {body.map((section) => (
              <section key={section.h}>
                <h2 className="display text-2xl">{section.h}</h2>
                <p className="mt-3 leading-relaxed text-night/70">{section.p}</p>
              </section>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-3 rounded-2xl border border-night/10 bg-paper-3 p-6">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-sm font-semibold text-night">
              B
            </span>
            <div>
              <div className="text-sm font-medium text-night">The Blocly Team</div>
              <div className="text-xs text-night/55">Web2 + Web3 PR &amp; link building</div>
            </div>
          </div>
        </Container>
      </article>

      <CtaBand />
    </>
  );
}
