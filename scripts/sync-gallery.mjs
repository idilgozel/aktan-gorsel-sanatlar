import fs from "fs";
import path from "path";

const root = process.cwd();
const galleryDir = path.join(root, "public", "gallery");
const contentFile = path.join(root, "content", "gallery.ts");

const featuredItem = {
  id: "bir-arada-yalniz-trailer",
  src: "https://img.youtube.com/vi/v260GeXUPYo/hqdefault.jpg",
  alt: { tr: "Bir Arada Yalnız fragman görseli", en: "Lifelike trailer still" },
  label: { tr: "Fragman", en: "Trailer" },
  title: { tr: "Bir Arada Yalnız", en: "Lifelike" },
  href: "https://youtu.be/v260GeXUPYo?si=d6Rhk8MUv2pDfDin",
  featured: true,
};

const allowedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const toId = (filename) => {
  const base = filename.replace(path.extname(filename), "");
  return base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

const escapeText = (value) => value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

const buildItem = (item) => {
  const lines = [
    "  {",
    `    id: "${escapeText(item.id)}",`,
    `    src: "${escapeText(item.src)}",`,
    `    alt: { tr: "${escapeText(item.alt.tr)}", en: "${escapeText(item.alt.en)}" },`,
    `    label: { tr: "${escapeText(item.label.tr)}", en: "${escapeText(item.label.en)}" },`,
  ];

  if (item.title) {
    lines.push(
      `    title: { tr: "${escapeText(item.title.tr)}", en: "${escapeText(item.title.en)}" },`
    );
  }

  if (item.href) {
    lines.push(`    href: "${escapeText(item.href)}",`);
  }

  if (item.featured) {
    lines.push("    featured: true,");
  }

  lines.push("  }");
  return lines.join("\n");
};

const getGalleryItems = () => {
  if (!fs.existsSync(galleryDir)) {
    return [];
  }

  const files = fs
    .readdirSync(galleryDir)
    .filter((file) => allowedExtensions.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b));

  return files.map((file, index) => {
    const id = toId(file);
    const order = index + 1;
    return {
      id,
      src: `/gallery/${file}`,
      alt: { tr: `Galeri Görseli ${order}`, en: `Gallery Image ${order}` },
      label: { tr: `Galeri Görseli ${order}`, en: `Gallery Image ${order}` },
    };
  });
};

const galleryItems = [featuredItem, ...getGalleryItems()];

const output = `import { Localized } from "../lib/i18n";

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
${galleryItems.map(buildItem).join(",\n")}
];
`;

fs.writeFileSync(contentFile, output, "utf8");
console.log(`Synced ${galleryItems.length} gallery items.`);
