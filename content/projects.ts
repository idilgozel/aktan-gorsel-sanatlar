import { Localized } from "../lib/i18n";

export type Project = {
  id: string;
  title: Localized;
  year: string;
  type: Localized;
  shortDescription: Localized;
  role: Localized;
  note?: Localized;
  links: {
    label: string;
    url: string;
    source: string;
  }[];
  trailer?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "bir-arada-yalniz",
    title: { tr: "Bir Arada Yalnız", en: "Lifelike" },
    year: "2025",
    type: { tr: "Sinema", en: "Cinema" },
    role: { tr: "Ortak yapımcı", en: "Co-producer" },
    shortDescription: {
      tr: "Sanal gerçekliğin eşiğinde, ölümcül bir hastalığın gölgesinde bir ailenin son yolculuğu.",
      en: "At the edge of virtual reality, a family's last journey unfolds under the shadow of a terminal illness.",
    },
    note: {
      tr: "Bu filmin ortak yapımcısıyım.",
      en: "I am a co-producer of this film.",
    },
    links: [
      {
        label: "Cineuropa",
        url: "https://cineuropa.org/en/newsdetail/486203/",
        source: "Cineuropa",
      },
      {
        label: "ScreenDaily",
        url: "https://www.screendaily.com/reviews/lifelike-review-uneven-turkish-terminal-illness-drama-makes-inventive-use-of-virtual-reality/5211000.article",
        source: "ScreenDaily",
      },
      {
        label: "The Hollywood Reporter",
        url: "https://www.hollywoodreporter.com/movies/movie-news/lifelike-film-vrchat-tallinn-2025-interview-ali-vatansever-1236426486/",
        source: "The Hollywood Reporter",
      },
    ],
    trailer: "https://youtu.be/v260GeXUPYo?si=d6Rhk8MUv2pDfDin",
    featured: true,
  },
  {
    id: "project-1",
    title: { tr: "Proje 1", en: "Project 1" },
    year: "2024",
    type: { tr: "Sinema", en: "Cinema" },
    shortDescription: {
      tr: "Kurumsal film için yaratıcı hikaye ve üretim süreci.",
      en: "Creative storytelling and production for a corporate film.",
    },
    role: { tr: "Yapım", en: "Production" },
    links: [],
  },
  {
    id: "project-2",
    title: { tr: "Proje 2", en: "Project 2" },
    year: "2023",
    type: { tr: "Tiyatro", en: "Theatre" },
    shortDescription: {
      tr: "Sahneleme ve görsel dramaturji odaklı proje.",
      en: "A project focused on staging and visual dramaturgy.",
    },
    role: { tr: "Sanat yönetimi", en: "Art direction" },
    links: [],
  },
  {
    id: "project-3",
    title: { tr: "Proje 3", en: "Project 3" },
    year: "2022",
    type: { tr: "Sinema", en: "Cinema" },
    shortDescription: {
      tr: "Belgesel formatında marka anlatımı.",
      en: "Brand storytelling in documentary format.",
    },
    role: { tr: "Yaratıcı ekip", en: "Creative team" },
    links: [],
  },
  {
    id: "project-4",
    title: { tr: "Proje 4", en: "Project 4" },
    year: "2021",
    type: { tr: "Tiyatro", en: "Theatre" },
    shortDescription: {
      tr: "Mekân tasarımı ve sahne deneyimi kurgusu.",
      en: "Spatial design and stage experience narrative.",
    },
    role: { tr: "Sahne tasarımı", en: "Stage design" },
    links: [],
  },
  {
    id: "project-5",
    title: { tr: "Proje 5", en: "Project 5" },
    year: "2020",
    type: { tr: "Sinema", en: "Cinema" },
    shortDescription: {
      tr: "Kısa film için görsel dil geliştirme.",
      en: "Visual language development for a short film.",
    },
    role: { tr: "Yapım", en: "Production" },
    links: [],
  },
];
