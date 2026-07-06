import Link from "next/link";
import type { ComponentProps } from "react";
import { Icon, type IconName } from "./icon";

type Variant = "accent" | "solid-dark" | "outline-dark" | "outline-light";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  accent: "bg-accent text-night hover:brightness-105 hover:-translate-y-px",
  "solid-dark": "bg-ink text-cream hover:bg-ink-2 hover:-translate-y-px",
  "outline-dark": "border border-night/20 text-night hover:bg-night hover:text-cream",
  "outline-light": "border border-cream/20 text-cream hover:bg-cream hover:text-night",
};

const sizes: Record<Size, string> = {
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-sm",
};

type ButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  icon?: IconName;
} & Omit<ComponentProps<typeof Link>, "href">;

export function Button({
  href,
  variant = "accent",
  size = "md",
  icon,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
      {icon && <Icon name={icon} size={15} className="transition-transform group-hover:translate-x-0.5" />}
    </Link>
  );
}
