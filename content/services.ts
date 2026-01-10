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
    tr: "Sinema ve tiyatro odakli, proje bazli yaratıcı hizmetler.",
    en: "Project-based creative services centered on cinema and theatre.",
  },
  cinema: {
    heading: { tr: "Sinema", en: "Cinema" },
    description: {
      tr: "Kurumsal film, belgesel ve marka hikayesi uretimi.",
      en: "Corporate films, documentaries, and brand storytelling production.",
    },
    bullets: [
      { tr: "Proje gelistirme ve senaryo destegi", en: "Project development and script support" },
      { tr: "Cekim planlama ve set yonetimi", en: "Shooting planning and set management" },
      { tr: "Kurgu, renk, ses ve teslim", en: "Editing, color, sound, and delivery" },
    ],
  },
  theatre: {
    heading: { tr: "Tiyatro", en: "Theatre" },
    description: {
      tr: "Sahne tasarimi, konsept gelistirme ve yapim koordinasyonu.",
      en: "Stage design, concept development, and production coordination.",
    },
    bullets: [
      { tr: "Konsept ve sahne dili tasarimi", en: "Concept and stage language design" },
      { tr: "Teknik uygulama ve ekip koordinasyonu", en: "Technical implementation and crew coordination" },
      { tr: "Gorsel dramaturji ve provalar", en: "Visual dramaturgy and rehearsals" },
    ],
  },
  consulting: {
    heading: { tr: "Danismanlik", en: "Consulting" },
    description: {
      tr: "Kurumsal iletisim projeleri icin yaratıcı strateji.",
      en: "Creative strategy for corporate communication projects.",
    },
  },
};
