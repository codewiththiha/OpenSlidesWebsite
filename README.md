# OpenSlides Website

Landing page for **OpenSlides** — a free, open-source, offline-first desktop app for
code-focused slide decks. A direct, drop-in alternative to codeslides.app.

Built with **Svelte 5 + TypeScript + Vite + Tailwind CSS v4**. The design was originally
delivered as a single self-contained HTML file; this project keeps the **exact look** (all
original CSS is preserved verbatim in `src/style.css`, kept unlayered so it wins over
Tailwind's Preflight) while modularizing the markup and behavior into small,
single-responsibility Svelte components.

## Project structure

```
src/
├── App.svelte                    # assembles everything back together
├── style.css                     # original design CSS (verbatim, unlayered over Tailwind) + :root/[data-theme] tokens
├── composables/
│   ├── useTheme.svelte.ts        # singleton reactive theme (persisted, no-flash)
│   └── usePageScroll.svelte.ts   # shared singleton scroll state (scrollY + hero height)
├── data/
│   └── toc.ts                    # single source of truth for the section indicator
└── components/
    ├── VersionCorner.svelte      # fixed version chip (hides when topbar appears)
    ├── TopBar.svelte             # sticky nav bar (slides in past the hero)
    ├── HeroSection.svelte        # hero: wordmark, torus, command block, CTAs
    ├── TorusCanvas.svelte        # animated halftone torus (auto-rotate + parallax)
    ├── CommandBlock.svelte       # copy-to-clipboard command block
    ├── CopyButton.svelte         # reusable clipboard button (async + fallback)
    ├── ThemeToggle.svelte        # sun/moon dark/light toggle (shared state)
    ├── TableOfContents.svelte    # right-hand section indicator + scrollspy
    ├── SiteFooter.svelte
    └── sections/                 # one component per article section
        ├── SectionWhy.svelte
        ├── SectionEditor.svelte
        ├── SectionHighlighting.svelte
        ├── SectionSteps.svelte
        ├── SectionSearch.svelte
        ├── SectionPresentation.svelte
        ├── SectionPersistence.svelte
        ├── SectionOpenSource.svelte
        └── SectionChangelog.svelte
```

## Develop

```bash
npm install
npm run dev        # start the Vite dev server
npm run check      # type-check with svelte-check + tsc
npm run build      # production build to dist/
npm run preview    # preview the production build
```

## License

MIT. Not affiliated with codeslides.app.
