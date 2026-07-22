# OpenSlides Website

The OpenSlides website introduces the desktop app, explains how it helps code-focused presenters, and links visitors to source code and downloadable releases.

## What the site communicates

- Why OpenSlides is useful for talks, workshops, demos, and technical teaching.
- How local-first projects keep presentation work available offline.
- The editor, highlighting, search, presentation, and persistence features.
- The current release and a browsable release history.
- Links to GitHub, releases, documentation, and the MIT license.

## How it works

The site is a fast, responsive single-page experience. Its content is split into focused sections, with a sticky navigation bar and a right-side table of contents on larger screens. The Changelog displays releases newest first and keeps earlier release notes available below the latest version.

## Tech stack

- **Framework:** Svelte 5 and TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS v4 with a custom editorial design system
- **Release content:** JSON data rendered directly in the Changelog

## Project structure

```text
src/
├── App.svelte             # page composition
├── components/            # reusable interface and content sections
├── composables/           # shared theme and scroll behavior
├── data/                  # navigation and release-history content
└── style.css              # visual design tokens and responsive styles
```

## Develop

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## License

MIT. Not affiliated with codeslides.app.
