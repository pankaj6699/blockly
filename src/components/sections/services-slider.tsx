"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Service } from "@/lib/site";
import { asset } from "@/lib/assets";
import { Icon } from "@/components/ui/icon";

const GAP = 16;

const serviceCovers: Record<string, string> = {
  "blogger-outreach": "/images/services/blogger-outreach.svg",
  "digital-pr-campaigns": "/images/services/digital-pr-campaigns.svg",
  "web3-media-placement": "/images/services/web3-media-placement.svg",
  "brand-mentions": "/images/services/brand-mentions.svg",
  "white-label-services": "/images/services/white-label-services.svg",
};

export function ServicesSlider({ services }: { services: Service[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>("[data-service-card]");
    const cardWidth = card?.offsetWidth ?? 0;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const index =
      cardWidth > 0 ? Math.round(track.scrollLeft / (cardWidth + GAP)) : 0;

    setActive(Math.min(index, services.length - 1));
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft < maxScroll - 4);
  }, [services.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateState();
    track.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    return () => {
      track.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [updateState]);

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>("[data-service-card]");
    if (!track || !card) return;

    track.scrollBy({ left: direction * (card.offsetWidth + GAP), behavior: "smooth" });
  };

  return (
    <div className="relative mt-12">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="font-mono text-xs tracking-wide text-night/45 uppercase">
          {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            className="grid h-9 w-9 place-items-center rounded-md border border-night/12 bg-paper-3 text-night/60 transition-all hover:border-night/25 hover:text-night disabled:pointer-events-none disabled:opacity-30"
            aria-label="Previous service"
          >
            <Icon name="arrow-right" size={16} className="rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            className="grid h-9 w-9 place-items-center rounded-md border border-night/12 bg-paper-3 text-night/60 transition-all hover:border-night/25 hover:text-night disabled:pointer-events-none disabled:opacity-30"
            aria-label="Next service"
          >
            <Icon name="arrow-right" size={16} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="scrollbar-hide -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8"
      >
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              data-service-card
              className="panel group w-[min(88vw,340px)] shrink-0 snap-start overflow-hidden transition-all duration-300 hover:border-night/20 hover:shadow-[0_20px_50px_-20px_rgba(8,10,15,0.2)] sm:w-[360px]"
            >
              <div className="relative h-44 overflow-hidden bg-ink sm:h-48">
                <Image
                  src={asset(serviceCovers[s.slug] ?? serviceCovers["blogger-outreach"])}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 88vw, 360px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="rounded-md border border-cream/15 bg-ink/60 px-2 py-1 font-mono text-[10px] tracking-wide text-cream/80 uppercase backdrop-blur-sm">
                    Solution {s.num}
                  </span>
                </div>
                <span className="absolute bottom-4 right-4 grid h-8 w-8 place-items-center rounded-md border border-cream/15 bg-ink/50 text-cream/70 backdrop-blur-sm transition-all group-hover:border-accent/40 group-hover:text-accent">
                  <Icon name="arrow-up-right" size={15} />
                </span>
              </div>

              <div className="flex flex-col p-5 sm:p-6">
                <h3 className="text-lg font-semibold tracking-tight text-night">{s.name}</h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-night/60">
                  {s.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-night/8 pt-4">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-night/10 bg-paper px-2 py-0.5 font-mono text-[10px] tracking-wide text-night/55 uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
      </div>

      <div className="mt-5 flex justify-center gap-1.5">
        {services.map((s, i) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => {
              const track = trackRef.current;
              const card = track?.querySelector<HTMLElement>("[data-service-card]");
              if (!track || !card) return;
              track.scrollTo({ left: i * (card.offsetWidth + GAP), behavior: "smooth" });
            }}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-6 bg-accent" : "w-1.5 bg-night/15 hover:bg-night/25"
            }`}
            aria-label={`Go to ${s.name}`}
            aria-current={i === active ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
