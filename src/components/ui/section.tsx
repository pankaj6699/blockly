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

export function SectionHeading({
  title,
  description,
  onDark = false,
  className = "",
}: {
  title: ReactNode;
  description?: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <h2 className="display text-3xl sm:text-4xl md:text-[2.75rem]">{title}</h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${onDark ? "text-cream/65" : "text-night/65"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
