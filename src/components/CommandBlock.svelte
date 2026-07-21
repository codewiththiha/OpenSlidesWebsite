<script lang="ts">
  import CopyButton from './CopyButton.svelte'

  /** The hero's main copy-to-clipboard command block (`.cmdblock`). */
  let { command }: { command: string } = $props()
</script>

<div class="cmdblock">
  <code>{command}</code>
  <CopyButton text={command} />
</div>
