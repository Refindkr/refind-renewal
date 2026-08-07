"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          className="object-contain object-center transition-opacity duration-1000 ease-in-out"
          style={{ filter: "invert(1)", opacity: i === index ? 0.35 : 0 }}
          sizes="55vw"
          priority={i === 0}
        />
      ))}
    </>
  );
}
