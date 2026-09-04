# Sapo Miền Tây — Trung Trực

Premium FnB sales landing page for Trung Trực — Sapo Miền Tây.

## Stack

- React + Vite + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Lenis smooth scrolling (disabled when `prefers-reduced-motion` is enabled)
- GitHub Pages deployment via GitHub Actions

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to the `main` branch.
2. Open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push a commit or run the **Deploy GitHub Pages** workflow manually.
5. Vite uses `base: './'`, so static assets work when hosted under `username.github.io/repository-name/`.

Optional repository variables/secrets:

- Variable `VITE_SITE_URL`: final production URL for canonical/OG URL.
- Secret `VITE_GA_ID`: GA4 measurement ID. The website works without it.

After the final URL is known, also update placeholders in:

- `public/robots.txt`
- `public/sitemap.xml`

## Lead form integration

Configured endpoint:

`https://script.google.com/macros/s/AKfycbztjGh1PW-TcsBxRsT6vI1Io73sq9WTS7Q3Bdo5kfAT5K8iDzxMiV_ZAiIS7xAOQXBsCg/exec`

The frontend sends `application/x-www-form-urlencoded` with:

- `name`
- `phone` (normalized)
- `businessName`
- `province`
- `businessType`
- `scale`
- `needs`
- `note`
- `source`
- `pageUrl`
- `referrer`
- UTM fields
- `createdAt`

**Important:** the endpoint's server-side field contract is not publicly inspectable from this build environment. Before publishing campaigns, submit one real test lead and confirm the row appears in the target Google Sheet. If the Apps Script expects different keys, map them in `src/services/leadService.ts`; do not expose the Sheet ID in frontend code.

## Assets to replace/add

- `public/assets/trung-truc.webp`: official portrait of Trung Trực.
- Optional authorized Sapo product screenshots under `public/assets/sapo/`.
- Replace OG artwork if desired: `public/og-image.png`.

No customer logos/testimonials are fabricated in the current build. External asset provenance should be recorded in `ASSET_SOURCES.md`.

## Content/SEO notes

- Site title/meta description are configured in `index.html`.
- Canonical URL is set at runtime from `VITE_SITE_URL` or the current page URL.
- Analytics events are implemented but no GA4 ID is required.
- Structured customer claims are deliberately conservative; price/promotion claims are not hardcoded.

## QA checklist

Run before each release:

```bash
npm run typecheck
npm run build
```

Then verify:

- Header navigation and scroll spy
- Zalo: `https://zalo.me/0386427289`
- Facebook: `https://www.facebook.com/trungtrucsapo/`
- Phone: `0386427289`
- Lead form validation/loading/error/success states
- Test lead actually reaches the Google Sheet
- UTM values are carried into form submissions
- 375×812, 390×844, 430×932, 768×1024, 1366×768, 1440×900, 1920×1080
- No horizontal scroll
- Reduced-motion behavior
- GitHub Pages assets load without 404s
