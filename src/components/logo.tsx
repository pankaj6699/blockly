import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Blocly — go to homepage"
    >
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-accent shadow-[0_6px_20px_-6px_rgba(199,240,74,0.75)] transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-105">
        {/* sheen sweep on hover */}
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="relative">
          {/* hexagon block outline */}
          <path
            d="M12 2.6 20 7.1v9.8l-8 4.5-8-4.5V7.1L12 2.6Z"
            stroke="#0a0c11"
            strokeWidth="1.5"
            strokeLinejoin="round"
            opacity="0.85"
          />
          {/* radiating links */}
          <g stroke="#0a0c11" strokeWidth="1.2" strokeLinecap="round" opacity="0.55">
            <line x1="12" y1="12" x2="12" y2="5.4" />
            <line x1="12" y1="12" x2="17.9" y2="15.4" />
            <line x1="12" y1="12" x2="6.1" y2="15.4" />
          </g>
          {/* satellite nodes (staggered pulse) */}
          <circle cx="12" cy="5.4" r="1.3" fill="#0a0c11">
            <animate attributeName="r" values="1.1;1.9;1.1" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="17.9" cy="15.4" r="1.3" fill="#0a0c11">
            <animate attributeName="r" values="1.1;1.9;1.1" dur="2s" begin="0.66s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.66s" repeatCount="indefinite" />
          </circle>
          <circle cx="6.1" cy="15.4" r="1.3" fill="#0a0c11">
            <animate attributeName="r" values="1.1;1.9;1.1" dur="2s" begin="1.33s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="1.33s" repeatCount="indefinite" />
          </circle>
          {/* central hub */}
          <circle cx="12" cy="12" r="2" fill="#0a0c11">
            <animate attributeName="r" values="1.9;2.7;1.9" dur="2.2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </span>
      <span className="text-lg font-semibold tracking-tight text-current">
        Bloc<span className="text-accent transition-colors group-hover:text-current">ly</span>
      </span>
    </Link>
  );
}
