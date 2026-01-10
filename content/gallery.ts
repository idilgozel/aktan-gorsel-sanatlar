import { Localized } from "../lib/i18n";

export type GalleryItem = {
  id: string;
  src: string;
  alt: Localized;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    src: "/placeholder.svg",
    alt: { tr: "Sahne gorseli", en: "Stage visual" },
  },
  {
    id: "gallery-2",
    src: "/placeholder.svg",
    alt: { tr: "Cekim seti", en: "Film set" },
  },
  {
    id: "gallery-3",
    src: "/placeholder.svg",
    alt: { tr: "Prova anı", en: "Rehearsal moment" },
  },
  {
    id: "gallery-4",
    src: "/placeholder.svg",
    alt: { tr: "Sahneleme detayi", en: "Staging detail" },
  },
  {
    id: "gallery-5",
    src: "/placeholder.svg",
    alt: { tr: "Set atmosferi", en: "Set atmosphere" },
  },
  {
    id: "gallery-6",
    src: "/placeholder.svg",
    alt: { tr: "Kurulum sureci", en: "Setup process" },
  },
];
