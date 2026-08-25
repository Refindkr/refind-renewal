"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface HeroSlide {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  color?: string;
}

interface HeroContentSlidesProps {
  slides: HeroSlide[];
  intervalMs?: number;
}

const DEFAULT_GLOW_COLOR = "#E1251B";

export default function HeroContentSlides({ slides, intervalMs = 6000 }: HeroContentSlidesProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [slides.length, intervalMs, index]);

  const slide = slides[index];
  const glowColor = slide.color || DEFAULT_GLOW_COLOR;

  return (
    <>
      {/* 슬라이드마다 강조 색상이 다른 라디얼 글로우 — 배경 색이 바뀌며 전환을 시각적으로 알림 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full blur-[120px] animate-hero-glow transition-colors duration-1000"
          style={{ backgroundColor: glowColor, opacity: 0.14 }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <p
          key={`eyebrow-${index}`}
          className="text-sm font-semibold tracking-[0.2em] uppercase mb-8 animate-hero-fade-up transition-colors duration-500"
          style={{ animationDelay: "0ms", color: glowColor }}
        >
          {slide.eyebrow}
        </p>

        <h1
          key={`title-${index}`}
          className="text-5xl sm:text-7xl md:text-8xl font-bold leading-[1.05] tracking-tight mb-8 whitespace-pre-line break-keep animate-hero-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          {slide.title}
        </h1>

        <p
          key={`subtitle-${index}`}
          className="text-lg sm:text-xl text-white/50 leading-relaxed mb-12 max-w-xl mx-auto whitespace-pre-line break-keep animate-hero-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          {slide.subtitle}
        </p>

        <div
          key={`buttons-${index}`}
          className="flex flex-col sm:flex-row gap-4 justify-center animate-hero-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          <Link
            href={slide.primaryHref}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-all duration-200"
          >
            {slide.primaryLabel}
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          {slide.secondaryHref && slide.secondaryLabel && (
            <Link
              href={slide.secondaryHref}
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-sm font-semibold rounded-full hover:border-white/50 hover:bg-white/5 transition-all duration-200"
            >
              {slide.secondaryLabel}
            </Link>
          )}
        </div>
      </div>

      {slides.length > 1 && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${i + 1}번째 슬라이드로 이동`}
              className="p-2 -m-2"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-6" : "w-1.5 bg-white/25 hover:bg-white/50"
                }`}
                style={i === index ? { backgroundColor: glowColor } : undefined}
              />
            </button>
          ))}
        </div>
      )}
    </>
  );
}
