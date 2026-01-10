import { Localized } from "../lib/i18n";

type PageSection = {
  heading: Localized;
  subheading?: Localized;
};

export const pages = {
  home: {
    eyebrow: {
      tr: "Yaratici gorsel anlatim stüdyosu",
      en: "Creative visual storytelling studio",
    },
    heroBody: {
      tr: "Sinema ve tiyatro odakli yapim, sahneleme ve gorsel anlatim projeleri uretiyoruz.",
      en: "We craft cinema and theatre projects focused on production, staging, and visual storytelling.",
    },
    ctaPrimary: { tr: "Proje Basvurusu", en: "Project Application" },
    ctaSecondary: { tr: "Projeleri Gor", en: "View Projects" },
    focusTitle: { tr: "Odak", en: "Focus" },
    focusBody: {
      tr: "Markalar icin sahne, film ve kurumsal hikaye anlatimini tek cati altinda topluyoruz.",
      en: "We bring stage, film, and corporate storytelling together under one roof.",
    },
    metrics: {
      years: { tr: "Yillik Deneyim", en: "Years Experience" },
      projects: { tr: "Proje", en: "Projects" },
    },
    featured: {
      heading: { tr: "Secili Projeler", en: "Featured Projects" },
      subheading: {
        tr: "Kurumlar icin urettigimiz sinema ve sahne calismalarindan ornekler.",
        en: "Examples from our cinema and stage collaborations.",
      },
    } as PageSection,
    gallery: {
      heading: { tr: "Galeri", en: "Gallery" },
      subheading: {
        tr: "Sahne ve set arkasi gorseller icin yer tutucu galeri.",
        en: "Placeholder gallery for stage and behind-the-scenes visuals.",
      },
    } as PageSection,
  },
  about: {
    heading: { tr: "Biz Kimiz", en: "About" },
    intro: {
      tr: "Aktan Gorsel Sanatlar, kurumsal projeler icin sinema ve tiyatro odakli yaratıcı iletisim stüdyosudur.",
      en: "Aktan Visual Arts is a creative studio focused on cinema and theatre for corporate projects.",
    },
    bullets: [
      {
        tr: "Yaratici vizyonu kurum kimligiyle bulusturuyoruz.",
        en: "We align creative vision with corporate identity.",
      },
      {
        tr: "Kapsamli proje yonetimi ve sahneleme deneyimi sunuyoruz.",
        en: "We deliver end-to-end project management and staging experience.",
      },
      {
        tr: "Her projede hikaye anlatimini merkeze aliyoruz.",
        en: "We place storytelling at the core of every project.",
      },
    ] as Localized[],
  },
  services: {
    heading: { tr: "Hizmetler", en: "Services" },
    detailsLabel: { tr: "Detaylar", en: "Details" },
  },
  projects: {
    heading: { tr: "Projeler", en: "Projects" },
    subheading: { tr: "Secilmis calismalarimizdan ornekler.", en: "Selected highlights from our collaborations." },
    labels: {
      year: { tr: "Yil", en: "Year" },
      type: { tr: "Tur", en: "Type" },
    },
  } as PageSection,
  gallery: {
    heading: { tr: "Galeri", en: "Gallery" },
    subheading: {
      tr: "Yakinda fotograflar ve sahne goruntu arsivi burada olacak.",
      en: "Photography and stage visuals archive will live here soon.",
    },
  } as PageSection,
  articles: {
    heading: { tr: "Yazilar", en: "Articles" },
    subheading: {
      tr: "HalkTV yazarlik sayfasindaki tum yazilar listelenir.",
      en: "All articles from the HalkTV author page are listed here.",
    },
    fallback: {
      tr: "Yazilar su an alinmiyor. HalkTV sayfasini ziyaret edebilirsiniz.",
      en: "Articles could not be fetched right now. Please visit the HalkTV page.",
    },
    sourceLabel: { tr: "Kaynak: HalkTV", en: "Source: HalkTV" },
  },
  contact: {
    heading: { tr: "Proje Basvurusu", en: "Project Application" },
    intro: {
      tr: "Projenizi ve ihtiyaclarinizi detaylandirarak bize ulasin.",
      en: "Share your project needs and we will reach out with next steps.",
    },
    success: {
      tr: "Tesekkurler! En kisa surede donus yapacagiz.",
      en: "Thank you! We will get back to you shortly.",
    },
    labels: {
      name: { tr: "Ad Soyad *", en: "Full Name *" },
      email: { tr: "E-Posta *", en: "Email *" },
      phone: { tr: "Telefon", en: "Phone" },
      type: { tr: "Proje Turu", en: "Project Type" },
      title: { tr: "Proje Basligi", en: "Project Title" },
      budget: { tr: "Butce", en: "Budget" },
      description: { tr: "Proje Aciklamasi *", en: "Project Description *" },
      file: { tr: "Dosya Yukle", en: "Upload File" },
      optional: { tr: "Opsiyonel", en: "Optional" },
      kvkk: {
        tr: "KVKK aydinlatma metnini okudum ve kabul ediyorum.",
        en: "I have read and accept the privacy notice.",
      },
      kvkkLink: { tr: "KVKK Metni", en: "Privacy Notice" },
      submit: { tr: "Basvuru Gonder", en: "Submit Application" },
    },
    options: {
      other: { tr: "Diger", en: "Other" },
    },
  },
  kvkk: {
    heading: { tr: "KVKK", en: "Privacy Notice" },
    body: {
      tr: "Bu alan, KVKK aydinlatma metni icin ayrilmistir. Veri sorumlusu, veri isleme amaci, saklama suresi ve basvuru kanallari gibi bilgiler burada yer alacaktir.",
      en: "This section is reserved for the privacy notice. Details about data controller, processing purposes, retention period, and contact channels will be placed here.",
    },
  },
};
