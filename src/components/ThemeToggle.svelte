<script lang="ts">
  import { themeState, toggleTheme } from '../composables/useTheme.svelte'

  /**
   * Sun/moon theme toggle. Shows the icon for the state you can switch TO
   * (moon in light, sun in dark). State is shared across every instance via
   * the themeState singleton.
   */
  const label = $derived(
    themeState.current === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
  )
</script>

<button
  type="button"
  class="theme-toggle"
  title={label}
  aria-label={label}
  aria-pressed={themeState.current === 'dark'}
  onclick={toggleTheme}
>
  {#if themeState.current === 'light'}
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  {:else}
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4.2" />
      <path
        d="M12 2.2v2.2M12 19.6v2.2M2.2 12h2.2M19.6 12h2.2M5 5l1.6 1.6M17.4 17.4 19 19M19 5l-1.6 1.6M6.6 17.4 5 19"
      />
    </svg>
  {/if}
</button>
