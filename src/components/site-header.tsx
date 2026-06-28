"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { Icon } from "./ui/icon";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-cream transition-all duration-300 ${
        scrolled ? "border-b border-line-dark bg-ink/90 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm text-cream/70 transition-colors hover:text-cream"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="accent" size="md" icon="arrow-right">
            Get Placements
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-cream/20 text-cream lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      {open && (
        <div className="border-t border-line-dark bg-ink/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-cream/75 hover:bg-ink-3 hover:text-cream"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" variant="accent" size="lg" className="mt-3" onClick={() => setOpen(false)}>
              Get Placements
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
