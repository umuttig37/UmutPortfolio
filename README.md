# Umut Efe Uygur Portfolio

Personal portfolio website for Umut Efe Uygur, built with React, Vite, TypeScript and CSS.

## Tech

- React
- TypeScript
- Vite
- CSS
- Static frontend only

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel can use the default Vite settings:

```bash
npm run build
```

For GitHub Pages project hosting, build with the repository base path:

```powershell
$env:GITHUB_PAGES='true'; npm run build
```

```bash
GITHUB_PAGES=true npm run build
```

The GitHub Pages base path is configured as `/UmutPortfolio/` in `vite.config.ts`.

## Notes Before Publishing

- Replace the placeholder email in `src/components/Contact.tsx`.
- Replace the LinkedIn placeholder in `src/components/Contact.tsx`.
- Add real project links as the projects become public.
- Add real screenshots only when they come from the actual projects.
- Use case-study notes for private business projects that do not have a public backend.

## Suggested 5-Day Push Plan

The repository can stay local while the portfolio is still being shaped. Push one visible step per day instead of publishing the whole build at once.

1. Day 1: initial Vite React TypeScript setup and base layout
2. Day 2: hero, about and skills sections
3. Day 3: first project section with real case-study text
4. Day 4: contact section, responsive styling and polish
5. Day 5: metadata, deployment settings and final cleanup
