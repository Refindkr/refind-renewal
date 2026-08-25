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
  bgColor?: string;
}

interface HeroContentSlidesProps {
  slides: HeroSlide[];
  intervalMs?: number;
}

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

  return (
    <>
      {/* 슬라이드별 배경 톤 — 검정 배경에 은은하게 섞여 슬라이드 전환을 표시. 색이 없으면 순수 검정 그대로 */}
      <div
        className="absolute inset-0 transition-[background-color,opacity] duration-1000 pointer-events-none"
        style={{ backgroundColor: slide.bgColor || "transparent", opacity: slide.bgColor ? 0.35 : 0 }}
      />

      <div className="relative max-w-4xl mx-auto">
        <p
          key={`eyebrow-${index}`}
          className="text-primary-400 text-sm font-semibold tracking-[0.2em] uppercase mb-8 animate-hero-fade-up"
          style={{ animationDelay: "0ms" }}
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
                  i === index ? "w-6 bg-white/70" : "w-1.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </>
  );
}
