import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./ui/section";
import { Icon } from "./ui/icon";

export function PageHero({
  title,
  description,
  breadcrumb,
  image,
  children,
}: {
  title: ReactNode;
  description?: ReactNode;
  breadcrumb?: { label: string; href: string };
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="sec-dark relative overflow-hidden border-b border-line-dark">
      {image && (
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-right opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />
        </div>
      )}
      <div className="grid-dark pointer-events-none absolute inset-0 z-0 opacity-30" />
      <Container className="relative z-10 pt-28 pb-14 sm:pt-32 sm:pb-16">
        {breadcrumb && (
          <Link
            href={breadcrumb.href}
            className="mb-6 inline-flex items-center gap-1.5 font-mono text-xs tracking-wide text-cream/50 uppercase transition-colors hover:text-cream"
          >
            <Icon name="arrow-right" size={14} className="rotate-180" />
            {breadcrumb.label}
          </Link>
        )}
        <h1 className="display max-w-3xl text-3xl sm:text-4xl md:text-[2.75rem]">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/60 sm:text-lg">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
