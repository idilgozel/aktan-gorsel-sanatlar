import { Localized } from "../lib/i18n";

type PageSection = {
  heading: Localized;
  subheading?: Localized;
  labels?: {
    year: Localized;
    type: Localized;
  };
};

export const pages = {
  home: {
    eyebrow: {
      tr: "Yaratıcı görsel anlatım stüdyosu",
      en: "Creative visual storytelling studio",
    },
    heroBody: {
      tr: "Sinema ve tiyatro odaklı yapım, sahneleme ve görsel anlatım projeleri üretiyoruz.",
      en: "We craft cinema and theatre projects focused on production, staging, and visual storytelling.",
    },
    ctaPrimary: { tr: "Proje Başvurusu", en: "Project Application" },
    ctaSecondary: { tr: "Projeleri Gör", en: "View Projects" },
    focusTitle: { tr: "Odak", en: "Focus" },
    focusBody: {
      tr: "Markalar için sahne, film ve kurumsal hikaye anlatımını tek çatı altında topluyoruz.",
      en: "We bring stage, film, and corporate storytelling together under one roof.",
    },
    metrics: {
      years: { tr: "Yıllık Deneyim", en: "Years Experience" },
      projects: { tr: "Proje", en: "Projects" },
    },
    featured: {
      heading: { tr: "Seçili Projeler", en: "Featured Projects" },
      subheading: {
        tr: "Kurumlar için ürettiğimiz sinema ve sahne çalışmalarından örnekler.",
        en: "Examples from our cinema and stage collaborations.",
      },
    } as PageSection,
    gallery: {
      heading: { tr: "Galeri", en: "Gallery" },
      subheading: {
        tr: "Sahne ve set arkası görseller için yer tutucu galeri.",
        en: "Placeholder gallery for stage and behind-the-scenes visuals.",
      },
    } as PageSection,
  },
  about: {
    heading: { tr: "Biz Kimiz", en: "About" },
    intro: {
      tr: "Aktan Görsel Sanatlar, kurumsal projeler için sinema ve tiyatro odaklı yaratıcı iletişim stüdyosudur.",
      en: "Aktan Visual Arts is a creative studio focused on cinema and theatre for corporate projects.",
    },
    bullets: [
      {
        tr: "Yaratıcı vizyonu kurum kimliğiyle buluşturuyoruz.",
        en: "We align creative vision with corporate identity.",
      },
      {
        tr: "Kapsamlı proje yönetimi ve sahneleme deneyimi sunuyoruz.",
        en: "We deliver end-to-end project management and staging experience.",
      },
      {
        tr: "Her projede hikaye anlatımını merkeze alıyoruz.",
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
    subheading: { tr: "Seçilmiş çalışmalarımızdan örnekler.", en: "Selected highlights from our collaborations." },
    labels: {
      year: { tr: "Yıl", en: "Year" },
      type: { tr: "Tür", en: "Type" },
    },
  } as PageSection,
  gallery: {
    heading: { tr: "Galeri", en: "Gallery" },
    subheading: {
      tr: "Yakında fotoğraflar ve sahne görüntü arşivi burada olacak.",
      en: "Photography and stage visuals archive will live here soon.",
    },
  } as PageSection,
  articles: {
    heading: { tr: "Yazılar", en: "Articles" },
    subheading: {
      tr: "HalkTV yazarlık sayfasındaki tüm yazılar listelenir.",
      en: "All articles from the HalkTV author page are listed here.",
    },
    fallback: {
      tr: "Yazılar şu an alınmıyor. HalkTV sayfasını ziyaret edebilirsiniz.",
      en: "Articles could not be fetched right now. Please visit the HalkTV page.",
    },
    sourceLabel: { tr: "Kaynak: HalkTV", en: "Source: HalkTV" },
  },
  contact: {
    heading: { tr: "Proje Başvurusu", en: "Project Application" },
    intro: {
      tr: "Projenizi ve ihtiyaçlarınızı detaylandırarak bize ulaşın.",
      en: "Share your project needs and we will reach out with next steps.",
    },
    success: {
      tr: "Teşekkürler! En kısa sürede dönüş yapacağız.",
      en: "Thank you! We will get back to you shortly.",
    },
    labels: {
      name: { tr: "Ad Soyad *", en: "Full Name *" },
      email: { tr: "E-Posta *", en: "Email *" },
      phone: { tr: "Telefon", en: "Phone" },
      type: { tr: "Proje Türü", en: "Project Type" },
      title: { tr: "Proje Başlığı", en: "Project Title" },
      budget: { tr: "Bütçe", en: "Budget" },
      description: { tr: "Proje Açıklaması *", en: "Project Description *" },
      file: { tr: "Dosya Yükle", en: "Upload File" },
      optional: { tr: "Opsiyonel", en: "Optional" },
      kvkk: {
        tr: "KVKK aydınlatma metnini okudum ve kabul ediyorum.",
        en: "I have read and accept the privacy notice.",
      },
      kvkkLink: { tr: "KVKK Metni", en: "Privacy Notice" },
      submit: { tr: "Başvuru Gönder", en: "Submit Application" },
    },
    options: {
      other: { tr: "Diğer", en: "Other" },
    },
  },
  kvkk: {
    heading: { tr: "KVKK", en: "Privacy Notice" },
    body: {
      tr: "Bu alan, KVKK aydınlatma metni için ayrılmıştır. Veri sorumlusu, veri işleme amacı, saklama süresi ve başvuru kanalları gibi bilgiler burada yer alacaktır.",
      en: "This section is reserved for the privacy notice. Details about data controller, processing purposes, retention period, and contact channels will be placed here.",
    },
  },
};
