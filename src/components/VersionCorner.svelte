<script lang="ts">
  import { scrollState, initScroll } from '../composables/usePageScroll.svelte'
  import ThemeToggle from './ThemeToggle.svelte'

  initScroll()
  /** Fades out once the sticky topbar (which carries its own toggle) slides in. */
  const hidden = $derived(scrollState.y > scrollState.heroHeight * 0.62)
</script>

<div class="corner" class:hide={hidden}>
  <span>v1.0.0-beta.1</span>
  <ThemeToggle />
</div>
