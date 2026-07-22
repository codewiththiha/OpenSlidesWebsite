<script lang="ts">
  import TorusCanvas from './TorusCanvas.svelte'

  const REPO = 'https://github.com/codewiththiha/OpenSlides'
  const RELEASES = `${REPO}/releases`
</script>

<section id="top" class="hero">
  <h1 class="wordmark">openslides</h1>

  <TorusCanvas />

  <p class="subtitle">Beautiful code slide decks for talks, tutorials, demos, and workshops.</p>
  <p class="position">
    A free, open-source, offline alternative to <b>codeslides.app</b>. Create polished
    code transitions, tell a clearer technical story, and keep every project on your machine.
  </p>
  <p class="platforms">Available for macOS and Windows.</p>

  <div class="cta-row">
    <a class="btn primary" href={RELEASES} target="_blank" rel="noopener">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <path d="M8 1.5v8" />
        <path d="m4.75 6.25 3.25 3.25 3.25-3.25" />
        <path d="M2.25 11.5v2.25h11.5V11.5" />
      </svg>
      Download OpenSlides
    </a>
    <a class="btn" href={REPO} target="_blank" rel="noopener">
      <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.53-.49-.16-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
      </svg>
      View on GitHub
    </a>
  </div>

  <div class="linkrow">
    <a href={RELEASES} target="_blank" rel="noopener">All releases</a>
    <span class="dot">·</span>
    <a href="#os-build">Build from source</a>
    <span class="dot">·</span>
    <a href="#os-mit">MIT License</a>
  </div>
</section>
