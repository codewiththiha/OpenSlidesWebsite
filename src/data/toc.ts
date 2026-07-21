export interface TocChild {
  id: string
  label: string
}

export interface TocSection {
  id: string
  label: string
  children?: TocChild[]
}

/**
 * Single source of truth for the right-hand section indicator.
 * Mirrors the <section id="…"> / <h3 id="…"> anchors used in the article.
 */
export const tocData: TocSection[] = [
  {
    id: 'why',
    label: 'Why OpenSlides',
    children: [
      { id: 'why-codeslides', label: 'vs codeslides.app' },
      { id: 'why-offline', label: 'Offline by design' },
    ],
  },
  {
    id: 'editor',
    label: 'Editor',
    children: [
      { id: 'editor-textarea', label: 'Uncontrolled textarea' },
      { id: 'editor-caret', label: 'Caret position' },
      { id: 'editor-save', label: 'Save queue' },
    ],
  },
  {
    id: 'highlighting',
    label: 'Highlighting',
    children: [
      { id: 'hl-worker', label: 'Shiki worker' },
      { id: 'hl-priority', label: 'Two priorities' },
      { id: 'hl-magic', label: 'Magic Move' },
    ],
  },
  {
    id: 'steps',
    label: 'Highlight steps',
    children: [
      { id: 'steps-seq', label: 'Sequencing' },
      { id: 'steps-toolbar', label: 'Selection toolbar' },
      { id: 'steps-dnd', label: 'Drag to reorder' },
    ],
  },
  {
    id: 'search',
    label: 'Search',
    children: [
      { id: 'search-fts', label: 'SQLite FTS5' },
      { id: 'search-debounce', label: 'Debounce pipeline' },
    ],
  },
  {
    id: 'presentation',
    label: 'Presentation',
    children: [
      { id: 'pres-auto', label: 'Autoplay' },
      { id: 'pres-keys', label: 'Keyboard' },
    ],
  },
  {
    id: 'persistence',
    label: 'Persistence',
    children: [
      { id: 'per-sqlite', label: 'SQLite / WAL' },
      { id: 'per-migrations', label: 'Migrations' },
    ],
  },
  {
    id: 'open-source',
    label: 'Open source',
    children: [
      { id: 'os-mit', label: 'MIT license' },
      { id: 'os-build', label: 'Build from source' },
    ],
  },
  {
    id: 'changelog',
    label: 'Changelog',
    children: [{ id: 'ch-1-0-0-beta-1', label: '1.0.0-beta.1' }],
  },
]
