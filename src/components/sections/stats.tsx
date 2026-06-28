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
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label}>
          <div className="font-mono text-4xl font-semibold text-accent sm:text-5xl">
            <CountUp value={s.value} suffix={s.suffix} />
          </div>
          <div className="mt-2 text-sm text-cream/55">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
