"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { Icon } from "./ui/icon";

function sectionUnderHeader(): "light" | "dark" {
  const stack = document.elementsFromPoint(window.innerWidth / 2, 70);
  for (const el of stack) {
    if (el.closest("header")) continue;
    const section = el.closest(".sec-light, .sec-dark, .sec-accent");
    if (!section) continue;
    if (section.classList.contains("sec-light") || section.classList.contains("sec-accent")) {
      return "light";
    }
    return "dark";
  }
  return "dark";
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [overLight, setOverLight] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 12);
      setOverLight(sectionUnderHeader() === "light");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const light = overLight;
  const solid = scrolled || light;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? light
            ? "border-b border-night/10 bg-paper/95 text-night backdrop-blur-md"
            : "border-b border-line-dark bg-ink/95 text-cream backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-cream"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 font-mono text-xs tracking-wide uppercase transition-colors ${
                light ? "text-night/55 hover:text-night" : "text-cream/55 hover:text-cream"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <span className={`h-4 w-px ${light ? "bg-night/15" : "bg-cream/15"}`} aria-hidden="true" />
          <Button href="/contact" variant="accent" size="md" icon="arrow-right">
            Get Placements
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className={`grid h-9 w-9 place-items-center rounded-md border lg:hidden ${
            light ? "border-night/20 text-night" : "border-cream/20 text-cream"
          }`}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      {open && (
        <div
          className={`border-t backdrop-blur-md lg:hidden ${
            light ? "border-night/10 bg-paper/98" : "border-line-dark bg-ink/95"
          }`}
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm ${
                  light
                    ? "text-night/75 hover:bg-paper-2 hover:text-night"
                    : "text-cream/75 hover:bg-ink-3 hover:text-cream"
                }`}
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
