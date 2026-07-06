"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import type { Post } from "@/lib/site";

const INTERVAL_MS = 5500;

export function FeaturedPostSlider({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setActive((index + posts.length) % posts.length);
    },
    [posts.length],
  );

  useEffect(() => {
    if (paused || posts.length <= 1) return;
    const id = setInterval(() => {
      setActive((current) => (current + 1) % posts.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, posts.length]);

  if (posts.length === 0) return null;

  const post = posts[active];

  return (
    <div
      className="relative flex min-h-[28rem] flex-col overflow-hidden rounded-xl border border-line-dark bg-ink text-cream sm:min-h-[32rem]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {posts.map((slide, i) => (
        <article
          key={slide.slug}
          className={`absolute inset-0 flex flex-col justify-between p-8 transition-opacity duration-700 ease-in-out ${
            i === active ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
          aria-hidden={i !== active}
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-night">Featured</span>
              <span className="text-xs text-cream/55">{slide.category}</span>
              <span className="text-xs text-cream/35">·</span>
              <span className="text-xs text-cream/55">{slide.readTime}</span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold leading-snug sm:text-3xl">{slide.title}</h3>
            <p className="mt-4 leading-relaxed text-cream/60">{slide.excerpt}</p>
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-line-dark pt-5">
            <span className="text-sm text-cream/45">{slide.date}</span>
            <Link
              href={`/blog/${slide.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
              tabIndex={i === active ? 0 : -1}
            >
              Read Article
              <Icon name="arrow-right" size={15} />
            </Link>
          </div>
        </article>
      ))}

      {posts.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            className="absolute left-4 top-1/2 z-20 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-md border border-cream/12 bg-ink/90 text-cream/70 backdrop-blur-sm transition-colors hover:border-cream/25 hover:text-cream"
            aria-label="Previous article"
          >
            <Icon name="arrow-right" size={16} className="rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            className="absolute right-4 top-1/2 z-20 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-md border border-cream/12 bg-ink/90 text-cream/70 backdrop-blur-sm transition-colors hover:border-cream/25 hover:text-cream"
            aria-label="Next article"
          >
            <Icon name="arrow-right" size={16} />
          </button>

          <div className="absolute bottom-5 left-0 right-0 z-20 flex items-center justify-center gap-2">
            {posts.map((slide, i) => (
              <button
                key={slide.slug}
                type="button"
                onClick={() => goTo(i)}
                className="group relative h-2 overflow-hidden rounded-full bg-cream/20 transition-all"
                style={{ width: i === active ? "2rem" : "0.5rem" }}
                aria-label={`Show article: ${slide.title}`}
                aria-current={i === active ? "true" : undefined}
              >
                {i === active && (
                  <span
                    key={`${active}-${paused}`}
                    className="absolute inset-y-0 left-0 rounded-full bg-accent"
                    style={{
                      animation: paused ? "none" : `slider-progress ${INTERVAL_MS}ms linear forwards`,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </>
      )}

      <span className="sr-only" aria-live="polite">
        {post.title}
      </span>
    </div>
  );
}
