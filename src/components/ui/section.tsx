import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

/** Small uppercase section label, e.g. "— What We Do". */
export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light" | "accent";
}) {
  const color =
    tone === "light" ? "text-cream/60" : tone === "accent" ? "text-night/70" : "text-night/55";
  return <span className={`label-eyebrow ${color}`}>— {children}</span>;
}

/** Section heading. `onDark` controls muted-text contrast. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  onDark = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && (
        <span className={`label-eyebrow ${onDark ? "text-cream/55" : "text-night/55"}`}>— {eyebrow}</span>
      )}
      <h2 className="display mt-5 text-3xl sm:text-4xl md:text-[3rem]">{title}</h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${onDark ? "text-cream/65" : "text-night/65"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
