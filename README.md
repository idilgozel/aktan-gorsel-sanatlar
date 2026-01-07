# Aktan Gorsel Sanatlar

Corporate website template (Next.js) with bilingual routing (/tr and /en).

## Development
```bash
npm install
npm run dev
npm run build
```

## Structure
- `app/layout.tsx`: Root layout with `<html>` and `<body>`.
- `app/page.tsx`: Redirects `/` to `/tr`.
- `app/[lang]/*`: Language-specific pages and layout.
- `components/*`: Shared UI pieces (header, footer, links, logo).
- `lib/i18n.ts`: Minimal i18n helpers.
- `lib/routes.ts`: Route helpers + language swap.
