import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./ui/section";
import { Icon } from "./ui/icon";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  image,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumb?: { label: string; href: string };
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="sec-dark relative overflow-hidden">
      {image && (
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-right opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        </div>
      )}
      <div className="grid-dark pointer-events-none absolute inset-0 z-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top,#000_20%,transparent_70%)]" />
      <div className="pointer-events-none absolute -right-32 -top-20 z-0 h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-[110px]" />
      <Container className="relative z-10 pt-28 pb-16 sm:pt-32 sm:pb-20">
        {breadcrumb && (
          <Link
            href={breadcrumb.href}
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-cream/60 transition-colors hover:text-cream"
          >
            <Icon name="arrow-right" size={14} className="rotate-180" />
            {breadcrumb.label}
          </Link>
        )}
        <span className="label-eyebrow text-cream/45">— {eyebrow}</span>
        <h1 className="display mt-5 max-w-4xl text-4xl sm:text-5xl md:text-[3.75rem]">{title}</h1>
        {description && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/65">{description}</p>}
        {children && <div className="mt-9">{children}</div>}
      </Container>
    </section>
  );
}
