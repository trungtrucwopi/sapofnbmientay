# QA report - V2 Premium

## Completed in this environment

- Premium V2 interface upgrade completed for Hero, Header, Industry Solutions, Product Showcase, Features, Lead Form, Trust Bar, Section Heading and Final CTA.
- TypeScript/TSX syntax transpilation check passed using TypeScript 5.8.3.
- Offline strict TypeScript check passed using temporary local dependency declarations.
- `package.json` parses successfully.
- GitHub Pages remains configured with `base: './'`.
- Deployment workflow is included at `.github/workflows/deploy.yml` and uses Node 22.
- Framer Motion dependency compatibility overrides are included.
- No fake customer brands, fake prices or fake testimonials were added.
- Existing contact, Zalo, Facebook, Apps Script form service and analytics wiring were preserved.
- `prefers-reduced-motion` remains supported.

## Build limitation in this container

The npm registry is unreachable from this execution environment and `npm install` timed out, so a complete Vite production build could not be executed locally. GitHub Actions will install the pinned dependencies and run `npm run build` after upload.

## After upload

- Confirm the newest GitHub Actions run is green.
- Open the GitHub Pages URL and hard-refresh once.
- Test 375px, 390px, 430px mobile widths and 1366px+ desktop.
- Submit one test lead to verify the Apps Script mapping still reaches the intended sheet.
