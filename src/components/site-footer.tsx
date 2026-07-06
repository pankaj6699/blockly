import Link from "next/link";
import { Logo } from "./logo";
import { site, nav, services } from "@/lib/site";
import { Container } from "./ui/section";
import { Icon } from "./ui/icon";

const socials = ["X / Twitter", "LinkedIn", "Telegram"];

export function SiteFooter() {
  return (
    <footer className="border-t border-line-dark bg-ink text-cream">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-cream/55">{site.description}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex items-center gap-2 font-mono text-xs tracking-wide text-accent uppercase hover:underline"
            >
              <Icon name="arrow-up-right" size={14} />
              {site.email}
            </a>
          </div>

          <div>
            <h3 className="label-eyebrow text-cream/40">Navigate</h3>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/60 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label-eyebrow text-cream/40">Services</h3>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.num}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-cream/60 transition-colors hover:text-cream"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line-dark pt-6 sm:flex-row">
          <p className="font-mono text-[10px] tracking-wide text-cream/35 uppercase">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                className="font-mono text-[10px] tracking-wide text-cream/35 uppercase transition-colors hover:text-cream"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
