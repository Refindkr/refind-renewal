"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface HeroSlide {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

interface HeroSliderProps {
  slides: HeroSlide[];
  intervalMs?: number;
}

export default function HeroSlider({ slides, intervalMs = 5000 }: HeroSliderProps) {
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
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
      {/* 텍스트 영역 */}
      <div className="text-center lg:text-left order-2 lg:order-1">
        {slide.eyebrow && (
          <p
            key={`eyebrow-${index}`}
            className="text-primary-500 text-sm font-semibold tracking-[0.2em] uppercase mb-4 animate-hero-fade-up"
          >
            {slide.eyebrow}
          </p>
        )}

        <h1
          key={`title-${index}`}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6 whitespace-pre-line break-keep animate-hero-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          {slide.title}
        </h1>

        <p
          key={`subtitle-${index}`}
          className="text-lg text-gray-500 leading-relaxed mb-10 max-w-md mx-auto lg:mx-0 whitespace-pre-line break-keep animate-hero-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          {slide.subtitle}
        </p>

        <div
          key={`buttons-${index}`}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-hero-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <Link
            href={slide.primaryHref}
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-400 text-white text-sm font-semibold rounded-full hover:bg-primary-500 transition-all duration-200"
          >
            {slide.primaryLabel}
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          {slide.secondaryHref && slide.secondaryLabel && (
            <Link
              href={slide.secondaryHref}
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-gray-700 text-sm font-semibold rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
            >
              {slide.secondaryLabel}
            </Link>
          )}
        </div>

        {slides.length > 1 && (
          <div className="flex gap-3 justify-center lg:justify-start mt-12">
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
                    i === index ? "w-6 bg-primary-400" : "w-1.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 이미지 영역 */}
      <div className="relative order-1 lg:order-2 h-[280px] sm:h-[380px] lg:h-[520px]">
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === index ? 1 : 0 }}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 90vw, 45vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
