"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface HeroRotatingBackgroundProps {
  images: string[];
  intervalMs?: number;
}

export default function HeroRotatingBackground({
  images,
  intervalMs = 4000,
}: HeroRotatingBackgroundProps) {
  const [index, setIndex] = useState(0);
  const zoomRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  useEffect(() => {
    const el = zoomRefs.current[index];
    if (!el) return;
    // restart the zoom animation for the newly active slide without remounting the image
    el.classList.remove("animate-hero-zoom");
    void el.offsetWidth;
    el.classList.add("animate-hero-zoom");
  }, [index]);

  return (
    <div className="absolute inset-0">
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === index ? 0.35 : 0 }}
        >
          <div
            ref={(el) => {
              zoomRefs.current[i] = el;
            }}
            className="absolute inset-0"
            style={{ animationDuration: `${intervalMs + 1000}ms` }}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-contain object-center"
              style={{ filter: "invert(1)" }}
              sizes="55vw"
              priority={i === 0}
            />
          </div>
        </div>
      ))}

      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((src, i) => (
            <span
              key={src}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-6 bg-white/70" : "w-1.5 bg-white/25"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
