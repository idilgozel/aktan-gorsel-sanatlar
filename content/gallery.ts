import { Localized } from "../lib/i18n";

export type GalleryItem = {
  id: string;
  src: string;
  alt: Localized;
  label: Localized;
  title?: Localized;
  href?: string;
  featured?: boolean;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "bir-arada-yalniz-trailer",
    src: "https://img.youtube.com/vi/v260GeXUPYo/hqdefault.jpg",
    alt: { tr: "Bir Arada Yalnız fragman görseli", en: "Lifelike trailer still" },
    label: { tr: "Fragman", en: "Trailer" },
    title: { tr: "Bir Arada Yalnız", en: "Lifelike" },
    href: "https://youtu.be/v260GeXUPYo?si=d6Rhk8MUv2pDfDin",
    featured: true,
  },
  {
    id: "whatsapp-image-2026-01-10-at-18-23-48-1",
    src: "/gallery/whatsapp-image-2026-01-10-at-18.23.48-1.jpeg",
    alt: { tr: "Galeri Görseli 1", en: "Gallery Image 1" },
    label: { tr: "Galeri Görseli 1", en: "Gallery Image 1" },
  },
  {
    id: "whatsapp-image-2026-01-10-at-18-23-48",
    src: "/gallery/whatsapp-image-2026-01-10-at-18.23.48.jpeg",
    alt: { tr: "Galeri Görseli 2", en: "Gallery Image 2" },
    label: { tr: "Galeri Görseli 2", en: "Gallery Image 2" },
  },
  {
    id: "whatsapp-image-2026-01-10-at-18-23-49-1",
    src: "/gallery/whatsapp-image-2026-01-10-at-18.23.49-1.jpeg",
    alt: { tr: "Galeri Görseli 3", en: "Gallery Image 3" },
    label: { tr: "Galeri Görseli 3", en: "Gallery Image 3" },
  },
  {
    id: "whatsapp-image-2026-01-10-at-18-23-49-2",
    src: "/gallery/whatsapp-image-2026-01-10-at-18.23.49-2.jpeg",
    alt: { tr: "Galeri Görseli 4", en: "Gallery Image 4" },
    label: { tr: "Galeri Görseli 4", en: "Gallery Image 4" },
  },
  {
    id: "whatsapp-image-2026-01-10-at-18-23-49-3",
    src: "/gallery/whatsapp-image-2026-01-10-at-18.23.49-3.jpeg",
    alt: { tr: "Galeri Görseli 5", en: "Gallery Image 5" },
    label: { tr: "Galeri Görseli 5", en: "Gallery Image 5" },
  },
  {
    id: "whatsapp-image-2026-01-10-at-18-23-49",
    src: "/gallery/whatsapp-image-2026-01-10-at-18.23.49.jpeg",
    alt: { tr: "Galeri Görseli 6", en: "Gallery Image 6" },
    label: { tr: "Galeri Görseli 6", en: "Gallery Image 6" },
  }
];
