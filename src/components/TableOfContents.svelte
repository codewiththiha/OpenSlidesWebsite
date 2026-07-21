<script lang="ts">
  import { tocData } from '../data/toc'
  import { scrollState, initScroll } from '../composables/usePageScroll.svelte'

  initScroll()

  /**
   * Right-hand section indicator. Links come from the shared tocData;
   * visibility follows scroll (shows once past ~55% of the hero) and a
   * scrollspy — identical maths to the original — highlights the active
   * section and its parent.
   */
  const flat: { id: string; parent: string }[] = []
  tocData.forEach((sec) => {
    flat.push({ id: sec.id, parent: sec.id })
    ;(sec.children || []).forEach((ch) => flat.push({ id: ch.id, parent: sec.id }))
  })

  let activeId = $state(flat[0].id)
  const visible = $derived(scrollState.y > scrollState.heroHeight * 0.55)
  const activeParent = $derived(flat.find((f) => f.id === activeId)?.parent ?? null)

  function isActive(id: string): boolean {
    return id === activeId || id === activeParent
  }

  $effect(() => {
    const y = scrollState.y
    const offset = 140
    const atBottom = window.innerHeight + y >= document.documentElement.scrollHeight - 3
    let id = flat[0].id
    if (atBottom) {
      id = flat[flat.length - 1].id
    } else {
      for (const f of flat) {
        const el = document.getElementById(f.id)
        if (el && el.getBoundingClientRect().top - offset <= 0) id = f.id
      }
    }
    activeId = id
  })
</script>

<nav class="toc" class:show={visible} aria-label="Section navigation">
  {#each tocData as sec (sec.id)}
    <a href="#{sec.id}" class="sec" class:active={isActive(sec.id)} title={sec.label}>{sec.label}</a>
    {#each sec.children ?? [] as ch (ch.id)}
      <a href="#{ch.id}" class="child" class:active={isActive(ch.id)} title={ch.label}>{ch.label}</a>
    {/each}
  {/each}
</nav>
