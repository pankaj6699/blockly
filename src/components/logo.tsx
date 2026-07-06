import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Blocly — go to homepage"
    >
      <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full transition-transform duration-300 ease-out group-hover:scale-105">
        <Image
          src="/images/logo.png"
          alt=""
          fill
          sizes="36px"
          priority
          className="object-cover"
        />
      </span>
      <span className="text-lg font-semibold tracking-tight text-current">
        Bloc<span className="text-accent transition-colors group-hover:text-current">ly</span>
      </span>
    </Link>
  );
}
