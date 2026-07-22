<script lang="ts">
  import { scrollState, initScroll } from '../composables/usePageScroll.svelte'
  import ThemeToggle from './ThemeToggle.svelte'

  initScroll()
  const RELEASES = 'https://github.com/codewiththiha/OpenSlides/releases'
  /** Hidden until the reader scrolls ~62% past the hero, then slides down. */
  const visible = $derived(scrollState.y > scrollState.heroHeight * 0.62)
</script>

<header class="topbar" class:show={visible} aria-hidden={!visible}>
  <span class="brand">openslides</span>
  <span class="spacer"></span>
  <a class="topbar-download" href={RELEASES} target="_blank" rel="noopener">Download</a>
  <ThemeToggle />
  <span class="ver">v1.0.1</span>
</header>
