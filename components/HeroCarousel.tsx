"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lang, t } from "../lib/i18n";

type CarouselItem = {
  src: string;
  alt: string;
  label?: string;
};

type HeroCarouselProps = {
  items: CarouselItem[];
  lang: Lang;
  hrefOnClick?: string;
};

export default function HeroCarousel({ items, lang, hrefOnClick }: HeroCarouselProps) {
  const slides = useMemo(() => items.filter((item) => item.src), [items]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = slides.length;

  useEffect(() => {
    if (activeIndex >= total) {
      setActiveIndex(0);
    }
  }, [activeIndex, total]);

  useEffect(() => {
    if (paused || total <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [paused, total]);

  if (slides.length === 0) {
    return null;
  }

  const setSlide = (nextIndex: number) => {
    const safeIndex = (nextIndex + total) % total;
    setActiveIndex(safeIndex);
  };

  const linkLabel = t(lang, { tr: "Galeriye git", en: "Go to gallery" });
  const prevLabel = t(lang, { tr: "Önceki", en: "Previous" });
  const nextLabel = t(lang, { tr: "Sonraki", en: "Next" });

  const renderMedia = (item: CarouselItem, isPriority: boolean) =>
    item.src.startsWith("/") ? (
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 900px) 90vw, 560px"
        priority={isPriority}
      />
    ) : (
      <img src={item.src} alt={item.alt} />
    );

  const content = (
    <>
      {slides.map((item, index) => (
        <div
          key={`${item.src}-${index}`}
          className={`carousel-slide${index === activeIndex ? " is-active" : ""}`}
          aria-hidden={index !== activeIndex}
        >
          {renderMedia(item, index === 0)}
        </div>
      ))}
      <div className="carousel-overlay">
        <span className="carousel-kicker">{t(lang, { tr: "Galeri", en: "Gallery" })}</span>
        {slides[activeIndex]?.label ? (
          <span className="carousel-label">{slides[activeIndex]?.label}</span>
        ) : null}
      </div>
    </>
  );

  return (
    <section
      className="hero-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
      aria-roledescription="carousel"
      aria-label={t(lang, { tr: "Öne çıkan galeri", en: "Featured gallery" })}
    >
      <div className="carousel-viewport">
        {hrefOnClick ? (
          <Link href={hrefOnClick} className="carousel-link" aria-label={linkLabel}>
            {content}
          </Link>
        ) : (
          <div className="carousel-link">{content}</div>
        )}
      </div>
      {total > 1 ? (
        <>
          <div className="carousel-controls">
            <button type="button" className="carousel-button" onClick={() => setSlide(activeIndex - 1)}>
              <span className="sr-only">{prevLabel}</span>
              <span aria-hidden="true">‹</span>
            </button>
            <button type="button" className="carousel-button" onClick={() => setSlide(activeIndex + 1)}>
              <span className="sr-only">{nextLabel}</span>
              <span aria-hidden="true">›</span>
            </button>
          </div>
          <div className="carousel-dots" role="tablist" aria-label={t(lang, { tr: "Slaytlar", en: "Slides" })}>
            {slides.map((_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                className={`carousel-dot${index === activeIndex ? " is-active" : ""}`}
                aria-label={t(lang, { tr: `Slayt ${index + 1}`, en: `Slide ${index + 1}` })}
                aria-current={index === activeIndex}
                onClick={() => setSlide(index)}
              />
            ))}
          </div>
        </>
      ) : null}
    </section>
  );
}
