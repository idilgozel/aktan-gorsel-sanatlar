import { Localized } from "../lib/i18n";

export type Project = {
  id: string;
  title: Localized;
  year: string;
  type: Localized;
  shortDescription: Localized;
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: { tr: "Proje 1", en: "Project 1" },
    year: "2024",
    type: { tr: "Sinema", en: "Cinema" },
    shortDescription: {
      tr: "Kurumsal film icin yaratıcı hikaye ve uretim sureci.",
      en: "Creative storytelling and production for a corporate film.",
    },
  },
  {
    id: "project-2",
    title: { tr: "Proje 2", en: "Project 2" },
    year: "2023",
    type: { tr: "Tiyatro", en: "Theatre" },
    shortDescription: {
      tr: "Sahneleme ve gorsel dramaturji odakli proje.",
      en: "A project focused on staging and visual dramaturgy.",
    },
  },
  {
    id: "project-3",
    title: { tr: "Proje 3", en: "Project 3" },
    year: "2022",
    type: { tr: "Sinema", en: "Cinema" },
    shortDescription: {
      tr: "Belgesel formatinda marka anlatimi.",
      en: "Brand storytelling in documentary format.",
    },
  },
  {
    id: "project-4",
    title: { tr: "Proje 4", en: "Project 4" },
    year: "2021",
    type: { tr: "Tiyatro", en: "Theatre" },
    shortDescription: {
      tr: "Mekân tasarimi ve sahne deneyimi kurgusu.",
      en: "Spatial design and stage experience narrative.",
    },
  },
  {
    id: "project-5",
    title: { tr: "Proje 5", en: "Project 5" },
    year: "2020",
    type: { tr: "Sinema", en: "Cinema" },
    shortDescription: {
      tr: "Kisa film icin gorsel dil gelistirme.",
      en: "Visual language development for a short film.",
    },
  },
];
