# QA report - V3 Command Center

## Major visual changes

- Hero rebuilt from split layout into a centered editorial headline with a full-width operations command deck.
- Header rebuilt as a floating command bar.
- Interactive daily-operations timeline moved directly below the hero.
- Industry section rebuilt into a 7-model control index with a dynamic product stage.
- Pain points changed from standard cards into editorial diagnostic rows.
- Workflow rebuilt as a signal rail.
- Feature section rebuilt into fewer, larger product-story bento panels.
- Final CTA rebuilt as a cinematic stage.
- Existing contact, Zalo, Facebook, Apps Script form service and analytics wiring were preserved.

## Checks completed in this environment

- All TypeScript/TSX files passed syntax transpilation checks with TypeScript 5.8.3.
- An offline strict TypeScript check passed using temporary permissive declarations for external packages.
- Relative import paths were checked and all resolve to local files.
- `package.json` retains the working Framer Motion dependency overrides.
- GitHub Pages workflow is present and uses Node 22.
- Vite still uses a relative base for repository-path deployment.
- No fake customer brands, fake prices or fake testimonials were added.
- `prefers-reduced-motion` support remains in the global styles.

## Build limitation in this container

The npm registry did not respond within the execution timeout, so a complete local `npm install` + Vite production build could not be completed here. The same GitHub Actions workflow that already deployed the previous version is included and will run `npm install` followed by `npm run build` after upload.

## After upload

- Confirm the newest GitHub Actions run is green.
- Open the GitHub Pages URL and hard-refresh once (`Ctrl + F5`).
- Verify that the first screen now shows the large centered headline and full-width command deck. If it still shows the old split hero, the new files were not overwritten in the repository.
- Test mobile widths 375px, 390px, 430px and desktop 1366px+.
- Submit one test lead to confirm the Apps Script mapping still reaches the intended sheet.
