<script lang="ts">
  import { scrollState, initScroll } from '../composables/usePageScroll.svelte'
  import CopyButton from './CopyButton.svelte'
  import ThemeToggle from './ThemeToggle.svelte'

  initScroll()
  const CLONE_CMD = 'git clone https://github.com/codewiththiha/OpenSlides'
  /** Hidden until the reader scrolls ~62% past the hero, then slides down. */
  const visible = $derived(scrollState.y > scrollState.heroHeight * 0.62)
</script>

<header class="topbar" class:show={visible} aria-hidden={!visible}>
  <span class="brand">openslides</span>
  <span class="spacer"></span>
  <div class="mini-cmd">
    <code>{CLONE_CMD}</code>
    <CopyButton text={CLONE_CMD} label="copy" />
  </div>
  <ThemeToggle />
  <span class="ver">v1.0.1</span>
</header>
