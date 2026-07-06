"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/site";

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const duration = 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setN(Math.round(eased * value));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {n.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <div className="grid grid-cols-2 divide-x divide-y divide-line-dark bg-ink-2/60 lg:grid-cols-4 lg:divide-y-0">
      {stats.map((s) => (
        <div key={s.label} className="p-6 sm:p-8">
          <div className="font-mono text-3xl font-medium tracking-tight text-accent sm:text-4xl">
            <CountUp value={s.value} suffix={s.suffix} />
          </div>
          <div className="mt-2 font-mono text-[11px] tracking-wide text-cream/45 uppercase">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
