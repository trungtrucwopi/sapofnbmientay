# QA report

## Completed in this environment

- Source structure created for React + TypeScript + Tailwind + Framer Motion + Lucide + Lenis.
- TypeScript/TSX syntax transpilation check passed using the installed TypeScript compiler and temporary local dependency declarations.
- Every emitted JavaScript module passed `node --check` syntax validation.
- Tailwind utility CSS was generated from the source class candidates; checked-in `src/styles/tailwind.generated.css` is ~60 KB before minification.
- No `href="#"` placeholder links found.
- No Lorem Ipsum found.
- No Google Sheet ID appears in `src/`, `index.html`, or `public/`.
- No remote `<img src="https://...">` hotlinks are present.
- No `dangerouslySetInnerHTML` usage.
- Zalo / Facebook / phone details are centralized in `src/config/site.ts`.
- GitHub Pages uses `base: './'`.
- `prefers-reduced-motion` is implemented in CSS and motion components.
- Mobile sticky conversion bar respects `env(safe-area-inset-bottom)`.
- Customer section avoids fabricated logos/testimonials and points to official Sapo resources instead.

## Dependency/build limitation of this execution environment

The container could not resolve the public npm registry, so dependency installation timed out. Therefore a real `npm run build` with downloaded React/Vite packages could not be executed here.

The repository workflow installs dependencies on GitHub Actions and runs `npm run build`. Direct dependency versions are pinned in `package.json` to reduce variance.

## Must verify after first GitHub push

1. GitHub Actions build completes and creates `dist/`.
2. GitHub Pages loads all assets without 404s.
3. Test the exact mobile viewports: 375×812, 390×844, 430×932, 768×1024.
4. Test desktop: 1366×768, 1440×900, 1920×1080.
5. Submit one real test lead and confirm the row reaches the intended Google Sheet.
6. If Apps Script expects different field keys, update only the mapping in `src/services/leadService.ts`.
7. Add the official `public/assets/trung-truc.webp` portrait.
8. Update `public/robots.txt`, `public/sitemap.xml`, and `VITE_SITE_URL` with the final published URL.
