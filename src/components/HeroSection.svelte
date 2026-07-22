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
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.53-2.53-.49-.13-.94-.33-1.29-.72-.35-.39-.53-.95-.53-1.73 0-.78.28-1.4.74-1.9-.07-.18-.32-.89.07-1.86 0 0 .6-.19 1.97.73A6.81 6.81 0 0 1 8 4.47c.61 0 1.22.08 1.79.24 1.37-.92 1.97-.73 1.97-.73.39.97.14 1.68.07 1.86.46.5.74 1.12.74 1.9 0 1.88-1.14 2.3-2.23 2.42.18.16.33.47.33.95 0 .68-.01 1.23-.01 1.4 0 .21.15.45.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
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
