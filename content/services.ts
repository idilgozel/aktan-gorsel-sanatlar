import { Localized } from "../lib/i18n";

type ServiceBlock = {
  heading: Localized;
  description: Localized;
  bullets: Localized[];
};

type ServicesContent = {
  overview: Localized;
  cinema: ServiceBlock;
  theatre: ServiceBlock;
  consulting: {
    heading: Localized;
    description: Localized;
  };
};

export const services: ServicesContent = {
  overview: {
    tr: "Sinema ve tiyatro odaklı, proje bazlı yaratıcı hizmetler.",
    en: "Project-based creative services centered on cinema and theatre.",
  },
  cinema: {
    heading: { tr: "Sinema", en: "Cinema" },
    description: {
      tr: "Kurumsal film, belgesel ve marka hikayesi üretimi.",
      en: "Corporate films, documentaries, and brand storytelling production.",
    },
    bullets: [
      { tr: "Proje geliştirme ve senaryo desteği", en: "Project development and script support" },
      { tr: "Çekim planlama ve set yönetimi", en: "Shooting planning and set management" },
      { tr: "Kurgu, renk, ses ve teslim", en: "Editing, color, sound, and delivery" },
    ],
  },
  theatre: {
    heading: { tr: "Tiyatro", en: "Theatre" },
    description: {
      tr: "Sahne tasarımı, konsept geliştirme ve yapım koordinasyonu.",
      en: "Stage design, concept development, and production coordination.",
    },
    bullets: [
      { tr: "Konsept ve sahne dili tasarımı", en: "Concept and stage language design" },
      { tr: "Teknik uygulama ve ekip koordinasyonu", en: "Technical implementation and crew coordination" },
      { tr: "Görsel dramaturji ve provalar", en: "Visual dramaturgy and rehearsals" },
    ],
  },
  consulting: {
    heading: { tr: "Danışmanlık", en: "Consulting" },
    description: {
      tr: "Kurumsal iletişim projeleri için yaratıcı strateji.",
      en: "Creative strategy for corporate communication projects.",
    },
  },
};
