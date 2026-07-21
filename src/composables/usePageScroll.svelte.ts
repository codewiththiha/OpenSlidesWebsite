/**
 * Singleton reactive scroll state.
 *
 * The original single-file page wired one scroll handler that drove the
 * topbar, the corner badge, and the table-of-contents visibility + scrollspy.
 * Here we expose the two primitives every component needs — current scroll
 * offset and hero (#top) height — from a single listener installed once.
 */
export const scrollState = $state<{ y: number; heroHeight: number }>({
  y: 0,
  heroHeight: 0,
})

let installed = false
let ticking = false

function compute(): void {
  scrollState.y = window.scrollY || window.pageYOffset
  const hero = document.getElementById('top')
  scrollState.heroHeight = hero ? hero.offsetHeight : window.innerHeight
  ticking = false
}

function onScroll(): void {
  if (!ticking) {
    ticking = true
    window.requestAnimationFrame(compute)
  }
}

export function initScroll(): void {
  if (installed) return
  installed = true
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  window.requestAnimationFrame(compute)
}
