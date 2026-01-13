"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Lang, t } from "../lib/i18n";

type GalleryReelItem = {
  src: string;
  alt: string;
};

type GalleryReelProps = {
  items: GalleryReelItem[];
  lang: Lang;
  hrefOnClick?: string;
};

export default function GalleryReel({ items, lang, hrefOnClick }: GalleryReelProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (direction: "prev" | "next") => {
    if (!trackRef.current) {
      return;
    }

    const { clientWidth } = trackRef.current;
    const offset = direction === "next" ? clientWidth * 0.8 : -clientWidth * 0.8;
    trackRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  const prevLabel = t(lang, { tr: "Geri", en: "Back" });
  const nextLabel = t(lang, { tr: "İleri", en: "Next" });

  return (
    <div className="gallery-reel-shell">
      <div className="gallery-reel-controls">
        <button type="button" onClick={() => scrollByAmount("prev")} className="reel-button">
          <span className="sr-only">{prevLabel}</span>
          <span aria-hidden="true">‹</span>
        </button>
        <button type="button" onClick={() => scrollByAmount("next")} className="reel-button">
          <span className="sr-only">{nextLabel}</span>
          <span aria-hidden="true">›</span>
        </button>
      </div>
      <div className="gallery-reel-track" ref={trackRef} aria-label={t(lang, { tr: "Galeri akışı", en: "Gallery reel" })}>
        {items.map((item, index) => {
          const media = item.src.startsWith("/") ? (
            <Image src={item.src} alt={item.alt} fill sizes="(max-width: 900px) 70vw, 320px" />
          ) : (
            <img src={item.src} alt={item.alt} />
          );

          return hrefOnClick ? (
            <Link key={`${item.src}-${index}`} href={hrefOnClick} className="gallery-reel-item">
              {media}
            </Link>
          ) : (
            <div key={`${item.src}-${index}`} className="gallery-reel-item">
              {media}
            </div>
          );
        })}
      </div>
    </div>
  );
}
