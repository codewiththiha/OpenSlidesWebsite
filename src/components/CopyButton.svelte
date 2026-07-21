<script lang="ts">
  /**
   * Copy-to-clipboard button.
   *
   * Faithful port of the original `[data-copy]` handler: uses the async
   * Clipboard API when available, falls back to a hidden textarea +
   * execCommand, and briefly flips its label to "copied" for 1.4s.
   */
  let { text, label = 'copy' }: { text: string; label?: string } = $props()

  let done = $state(false)
  let timer: ReturnType<typeof setTimeout> | undefined

  function finish(): void {
    done = true
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      done = false
    }, 1400)
  }

  function fallback(): void {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    try {
      document.execCommand('copy')
      finish()
    } catch {
      /* ignore */
    }
    document.body.removeChild(ta)
  }

  function copy(): void {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(finish).catch(fallback)
    } else {
      fallback()
    }
  }
</script>

<button type="button" class="copy" class:done onclick={copy}>
  {done ? 'copied' : label}
</button>
