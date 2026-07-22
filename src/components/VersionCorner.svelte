<script lang="ts">
  import { scrollState, initScroll } from '../composables/usePageScroll.svelte'
  import ThemeToggle from './ThemeToggle.svelte'
  import releases from '../data/releases.json'

  initScroll()
  /** Fades out once the sticky topbar (which carries its own toggle) slides in. */
  const hidden = $derived(scrollState.y > scrollState.heroHeight * 0.62)
</script>

<div class="corner" class:hide={hidden}>
  <span>v{releases[0]?.version ?? '—'}</span>
  <ThemeToggle />
</div>
