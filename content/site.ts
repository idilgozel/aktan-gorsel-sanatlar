import { Localized } from "../lib/i18n";

type SocialLinks = {
  instagram: string;
  x: string;
  youtube: string;
};

type ContactInfo = {
  email: string;
  phone: string;
  address: Localized;
};

type NavLabels = {
  about: Localized;
  services: Localized;
  projects: Localized;
  gallery: Localized;
  articles: Localized;
  contact: Localized;
  kvkk: Localized;
};

export const site = {
  brandName: "Aktan Görsel Sanatlar",
  tagline: {
    tr: "Kurumsal yaratıcı ortaklıklar için butik bir görsel sanatlar stüdyosu.",
    en: "A boutique visual arts studio for corporate creative partnerships.",
  },
  description: {
    tr: "Sinema, tiyatro ve görsel anlatım projelerinde uçtan uca üretim.",
    en: "End-to-end production for cinema, theatre, and visual storytelling projects.",
  },
  contact: {
    email: "hello@aktanvisual.com",
    phone: "+90 (000) 000 00 00",
    address: {
      tr: "Istanbul / Ankara",
      en: "Istanbul / Ankara",
    },
  } as ContactInfo,
  social: {
    instagram: "#",
    x: "#",
    youtube: "#",
  } as SocialLinks,
  nav: {
    about: { tr: "Biz Kimiz", en: "About" },
    services: { tr: "Hizmetler", en: "Services" },
    projects: { tr: "Projeler", en: "Projects" },
    gallery: { tr: "Galeri", en: "Gallery" },
    articles: { tr: "Yazilar", en: "Articles" },
    contact: { tr: "Iletisim", en: "Contact" },
    kvkk: { tr: "KVKK", en: "Privacy" },
  } as NavLabels,
};
