import Link from "next/link";
import { Container } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { posts } from "@/lib/site";
import { FeaturedPostSlider } from "./featured-post-slider";

export function Blog() {
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p !== featured);
  const sliderPosts = posts.slice(0, 4);

  return (
    <section id="blog" className="sec-light scroll-mt-20 border-t border-line-light">
      <Container className="py-20 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="display text-3xl sm:text-4xl md:text-[2.75rem]">
              What we know.
              <br className="hidden sm:block" /> <span className="text-night/40">What you should too.</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wide text-night/55 uppercase transition-colors hover:text-night"
          >
            View all articles
            <Icon name="arrow-right" size={14} />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <FeaturedPostSlider posts={sliderPosts} />

          <div className="grid gap-4">
            {rest.slice(0, 2).map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.slice(2).map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>

        <div className="panel-dark mt-12 overflow-hidden rounded-xl border border-line-dark bg-ink p-8 text-cream sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Want this level of intel delivered weekly?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/55 sm:text-base">
                Join 3,200+ founders and growth teams who get our PR and link-building playbook every week.
              </p>
            </div>
            <form className="flex w-full max-w-md gap-2" action="#">
              <input
                type="email"
                required
                placeholder="you@company.com"
                aria-label="Email address"
                className="w-full rounded-lg border border-cream/12 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-cream/35 focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-night transition-all hover:brightness-105"
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
      href={`/blog/${post.slug}`}
      className="panel group flex h-full flex-col p-5 transition-all duration-200 hover:border-night/20 hover:shadow-[0_12px_40px_-16px_rgba(8,10,15,0.12)]"
    >
      <div className="flex items-center gap-2 font-mono text-[10px] tracking-wide text-night/45 uppercase">
        <span className="text-accent-2">{post.category}</span>
        <span>·</span>
        <span>{post.readTime}</span>
      </div>
      <h3 className="mt-3 flex-1 text-base font-semibold leading-snug tracking-tight text-night">{post.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-night/55">{post.excerpt}</p>
      <div className="mt-4 flex items-center justify-between border-t border-night/8 pt-4">
        <span className="font-mono text-[10px] text-night/40 uppercase">{post.date}</span>
        <span className="inline-flex items-center gap-1 font-mono text-[10px] tracking-wide text-night/55 uppercase transition-colors group-hover:text-accent-2">
          Read
          <Icon name="arrow-right" size={12} />
        </span>
      </div>
    </Link>
  );
}
