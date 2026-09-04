# SAPO MIEN TAY LANDING - V2 PREMIUM

## Visual upgrade

- Hero rebuilt as a dark operations cockpit with layered dashboard, live states, floating kitchen/order cards and stronger depth.
- Header changed to a floating glass navigation island.
- Industry selector rebuilt into an adaptive operating scene with animated workflow nodes.
- Product showcase rebuilt as a full control room with time-based dashboard states and activity stream.
- Feature section upgraded to richer premium bento cards with product-like mini interfaces.
- Lead form rebuilt as a consultation brief / setup session rather than a generic form.
- Final CTA rebuilt with cinematic grid, orbital rings and high-contrast conversion area.
- Trust bar refreshed to match the operations-intelligence visual language.
- Added global noise, glass, light-beam, orbit, shine and depth effects while keeping reduced-motion support.

## Deployment stability included

- GitHub Pages workflow included at `.github/workflows/deploy.yml`.
- Node 22 workflow without npm cache dependency on a missing lockfile.
- Framer Motion compatibility override included in `package.json`:
  - `motion-dom: 12.23.12`
  - `motion-utils: 12.23.6`
- Vite remains configured with `base: './'` for GitHub Pages repository paths.

## QA in this environment

- TS/TSX syntax transpilation check passed.
- Offline strict TypeScript check passed using temporary dependency declarations.
- npm registry is unavailable in this execution container, so final Vite production build must run in GitHub Actions after upload.
