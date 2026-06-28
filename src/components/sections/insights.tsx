import Link from "next/link";
import { Container } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { posts } from "@/lib/site";

export function Insights() {
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p !== featured);

  return (
    <section id="insights" className="sec-light scroll-mt-20">
      <Container className="py-20 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="label-eyebrow text-night/55">Intelligence Feed</span>
            <h2 className="display mt-5 text-4xl sm:text-5xl md:text-[3.5rem]">
              What we know.
              <br className="hidden sm:block" /> <span className="text-night/35">What you should too.</span>
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-night transition-colors hover:text-accent-2"
          >
            View all articles
            <Icon name="arrow-right" size={15} />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Featured */}
          <Link
            href={`/insights/${featured.slug}`}
            className="group flex flex-col justify-between rounded-2xl bg-ink p-8 text-cream transition-colors hover:bg-ink-2"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-night">Featured</span>
                <span className="text-xs text-cream/55">{featured.category}</span>
                <span className="text-xs text-cream/35">·</span>
                <span className="text-xs text-cream/55">{featured.readTime}</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold leading-snug sm:text-3xl">{featured.title}</h3>
              <p className="mt-4 leading-relaxed text-cream/60">{featured.excerpt}</p>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-line-dark pt-5">
              <span className="text-sm text-cream/45">{featured.date}</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Read Article
                <Icon name="arrow-right" size={15} />
              </span>
            </div>
          </Link>

          {/* Rest */}
          <div className="grid gap-4 sm:grid-cols-1">
            {rest.slice(0, 2).map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.slice(2).map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-ink p-8 text-cream sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h3 className="text-2xl font-semibold">Want this level of intel delivered weekly?</h3>
              <p className="mt-2 text-cream/60">
                Join 3,200+ founders and growth teams who get our PR and link-building playbook every week.
              </p>
            </div>
            <form className="flex w-full max-w-md gap-2" action="#">
              <input
                type="email"
                required
                placeholder="you@company.com"
                aria-label="Email address"
                className="w-full rounded-full border border-cream/15 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-night transition-all hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PostCard({ post }: { post: (typeof posts)[number] }) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-night/10 bg-paper-3 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-night/20"
    >
      <div className="flex items-center gap-2 text-xs text-night/45">
        <span className="font-semibold text-accent-2">{post.category}</span>
        <span>·</span>
        <span>{post.readTime}</span>
      </div>
      <h3 className="mt-3 flex-1 text-lg font-semibold leading-snug">{post.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-night/55">{post.excerpt}</p>
      <div className="mt-4 flex items-center justify-between border-t border-night/10 pt-4">
        <span className="text-xs text-night/45">{post.date}</span>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-night transition-colors group-hover:text-accent-2">
          Read
          <Icon name="arrow-right" size={14} />
        </span>
      </div>
    </Link>
  );
}
