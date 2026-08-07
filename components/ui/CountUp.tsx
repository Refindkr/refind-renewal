"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  durationMs?: number;
}

export default function CountUp({ value, durationMs = 1200 }: CountUpProps) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const [display, setDisplay] = useState(target === null ? value : `0${suffix}`);
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / durationMs, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(`${Math.round(target * eased)}${suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, durationMs]);

  return <span ref={ref}>{display}</span>;
}
