<script lang="ts">
  import TorusCanvas from './TorusCanvas.svelte'
  import CommandBlock from './CommandBlock.svelte'

  const CLONE_CMD = 'git clone https://github.com/codewiththiha/OpenSlides'
  const REPO = 'https://github.com/codewiththiha/OpenSlides'
</script>

<section id="top" class="hero">
  <h1 class="wordmark">openslides</h1>

  <TorusCanvas />

  <p class="subtitle">Code-focused slide decks for talks, demos, and workshops.</p>
  <p class="position">
    A free, open-source, offline alternative to <b>codeslides.app</b> — which charges
    $5/month. Same job, $0, your files stay on your machine.
  </p>

  <CommandBlock command={CLONE_CMD} />

  <div class="cta-row">
    <a class="btn primary" href={REPO} target="_blank" rel="noopener">
      <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
        />
      </svg>
      View on GitHub
    </a>
    <a class="btn" href="#os-build">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
        <path d="M2 4.5 8 1.5l6 3-6 3-6-3Z" />
        <path d="M2 4.5v7l6 3 6-3v-7" />
        <path d="M8 7.5v7" />
      </svg>
      Build from source
    </a>
  </div>

  <div class="linkrow">
    <a href="https://github.com/codewiththiha/OpenSlides/releases" target="_blank" rel="noopener">Releases</a>
    <span class="dot">·</span>
    <a href="https://github.com/codewiththiha/OpenSlides#readme" target="_blank" rel="noopener">Documentation</a>
    <span class="dot">·</span>
    <a href="#os-mit">MIT License</a>
  </div>
</section>
