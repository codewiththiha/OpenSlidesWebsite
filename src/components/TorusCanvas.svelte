<script lang="ts">
  import { onMount } from 'svelte'
  import { themeState } from '../composables/useTheme.svelte'

  /**
   * Halftone torus.
   *
   * Direct port of the original IIFE: a software-rendered torus (rotated point
   * cloud → lit quads → painter's-sorted), rasterised onto an offscreen canvas,
   * then sampled cell-by-cell into dots whose radius tracks local darkness.
   * Auto-rotates continuously and nudges with cursor parallax.
   *
   * Theme-aware: in light mode dots are dark on a light page (radius ∝
   * darkness); in dark mode dots are light on a dark page (radius ∝ brightness)
   * so the lit side still reads as the lighter region.
   */

  let canvas: HTMLCanvasElement | null = null
  let ctx: CanvasRenderingContext2D | null = null

  type V3 = [number, number, number]

  function rot(p: V3, rx: number, ry: number, rz: number): V3 {
    let [x, y, z] = p
    let t: number
    t = y * Math.cos(rx) - z * Math.sin(rx)
    z = y * Math.sin(rx) + z * Math.cos(rx)
    y = t
    t = x * Math.cos(ry) + z * Math.sin(ry)
    z = -x * Math.sin(ry) + z * Math.cos(ry)
    x = t
    t = x * Math.cos(rz) - y * Math.sin(rz)
    y = x * Math.sin(rz) + y * Math.cos(rz)
    x = t
    return [x, y, z]
  }

  function drawTorus(
    c: HTMLCanvasElement,
    g: CanvasRenderingContext2D,
    rx: number,
    ry: number,
    rz: number,
  ): void {
    const isDark = themeState.current === 'dark'
    const cssW = c.clientWidth
    const cssH = c.clientHeight
    if (!cssW || !cssH) return

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    const W = Math.round(cssW * dpr)
    const H = Math.round(cssH * dpr)
    if (c.width !== W || c.height !== H) {
      c.width = W
      c.height = H
    }

    const off = document.createElement('canvas')
    off.width = W
    off.height = H
    const octx = off.getContext('2d')
    if (!octx) return
    octx.clearRect(0, 0, W, H)

    const R = 1.18
    const r = 0.5
    const uN = 72
    const vN = 36
    const scale = (Math.min(W, H) * 0.4) / (R + r)
    const cx = W * 0.5
    const cy = H * 0.5
    const Lv: V3 = [-0.42, -0.55, 0.72]
    const lm = Math.hypot(Lv[0], Lv[1], Lv[2])
    const L: V3 = [Lv[0] / lm, Lv[1] / lm, Lv[2] / lm]

    const verts: { x: number; y: number; z: number; nx: number; ny: number; nz: number }[][] = []
    for (let i = 0; i <= uN; i++) {
      verts[i] = []
      const u = (i / uN) * Math.PI * 2
      const cu = Math.cos(u)
      const su = Math.sin(u)
      for (let j = 0; j <= vN; j++) {
        const v = (j / vN) * Math.PI * 2
        const cv = Math.cos(v)
        const sv = Math.sin(v)
        const px = (R + r * cv) * cu
        const py = (R + r * cv) * su
        const pz = r * sv
        const nx = cv * cu
        const ny = cv * su
        const nz = sv
        const wp = rot([px, py, pz], rx, ry, rz)
        const wn = rot([nx, ny, nz], rx, ry, rz)
        verts[i][j] = { x: wp[0], y: wp[1], z: wp[2], nx: wn[0], ny: wn[1], nz: wn[2] }
      }
    }

    const quads: { z: number; g: number; pts: typeof verts[0][0][] }[] = []
    for (let a = 0; a < uN; a++) {
      for (let b = 0; b < vN; b++) {
        const p00 = verts[a][b]
        const p10 = verts[a + 1][b]
        const p11 = verts[a + 1][b + 1]
        const p01 = verts[a][b + 1]
        const az = (p00.z + p10.z + p11.z + p01.z) * 0.25
        let anx = (p00.nx + p10.nx + p11.nx + p01.nx) * 0.25
        let any = (p00.ny + p10.ny + p11.ny + p01.ny) * 0.25
        let anz = (p00.nz + p10.nz + p11.nz + p01.nz) * 0.25
        const nl = Math.hypot(anx, any, anz) || 1
        anx /= nl
        any /= nl
        anz /= nl
        const diff = Math.max(0, anx * L[0] + any * L[1] + anz * L[2])
        const shade = Math.min(1, 0.1 + diff * 0.95)
        const gv = Math.round(shade * 255)
        quads.push({ z: az, g: gv, pts: [p00, p10, p11, p01] })
      }
    }
    quads.sort((p, q) => p.z - q.z)

    for (let q = 0; q < quads.length; q++) {
      const Q = quads[q]
      octx.fillStyle = 'rgb(' + Q.g + ',' + Q.g + ',' + Q.g + ')'
      octx.beginPath()
      octx.moveTo(cx + Q.pts[0].x * scale, cy - Q.pts[0].y * scale)
      octx.lineTo(cx + Q.pts[1].x * scale, cy - Q.pts[1].y * scale)
      octx.lineTo(cx + Q.pts[2].x * scale, cy - Q.pts[2].y * scale)
      octx.lineTo(cx + Q.pts[3].x * scale, cy - Q.pts[3].y * scale)
      octx.closePath()
      octx.fill()
    }

    const img = octx.getImageData(0, 0, W, H).data
    g.clearRect(0, 0, W, H)
    g.fillStyle = isDark ? '#f1f1ec' : '#101010'
    const cell = Math.max(3, Math.round(4 * dpr))
    const maxR = cell * 0.72
    for (let yy = cell * 0.5; yy < H; yy += cell) {
      const rowOff = (yy | 0) * W * 4
      for (let xx = cell * 0.5; xx < W; xx += cell) {
        const idx = rowOff + (xx | 0) * 4
        if (img[idx + 3] < 128) continue
        const bright = img[idx] / 255
        let rad = (isDark ? bright : 1 - bright) * maxR
        if (rad < 0.35) rad = 0.35
        g.beginPath()
        g.arc(xx, yy, rad, 0, Math.PI * 2)
        g.fill()
      }
    }
  }

  /* rotation state */
  const baseRx = -1.02
  const baseRy = 0.62
  const baseRz = 0.34
  let autoY = 0
  let curMX = 0
  let curMY = 0
  let targetMX = 0
  let targetMY = 0

  let torusRect: DOMRect | null = null
  function updRect(): void {
    if (canvas) torusRect = canvas.getBoundingClientRect()
  }

  let rafId = 0
  let lastFrame = 0

  function onMouseMove(e: MouseEvent): void {
    if (!torusRect) updRect()
    if (!torusRect) return
    const w = torusRect.width
    const h = torusRect.height
    const cxp = torusRect.left + w / 2
    const cyp = torusRect.top + h / 2
    const dx = e.clientX - cxp
    const dy = e.clientY - cyp
    const d = Math.hypot(dx, dy)
    const maxD = Math.max(w, h)
    if (d < maxD * 1.7) {
      const rr = maxD * 0.95 || 1
      targetMX = Math.max(-1, Math.min(1, dx / rr))
      targetMY = Math.max(-1, Math.min(1, dy / rr))
    } else {
      targetMX = 0
      targetMY = 0
    }
  }

  function onMouseLeave(): void {
    targetMX = 0
    targetMY = 0
  }

  function frame(now: number): void {
    rafId = window.requestAnimationFrame(frame)
    if (now - lastFrame < 30) return // ~33fps cap keeps the halftone smooth
    lastFrame = now
    curMX += (targetMX - curMX) * 0.07
    curMY += (targetMY - curMY) * 0.07
    autoY += 0.01 // continuous 360° spin
    if (canvas && ctx) {
      drawTorus(
        canvas,
        ctx,
        baseRx + curMY * 0.5,
        baseRy + autoY + curMX * 0.7,
        baseRz + curMX * 0.15,
      )
    }
  }

  onMount(() => {
    if (!canvas) return
    ctx = canvas.getContext('2d')
    updRect()
    window.addEventListener('resize', updRect)
    window.addEventListener('scroll', updRect, { passive: true })
    window.addEventListener('load', updRect)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)
    rafId = window.requestAnimationFrame(frame)

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener('resize', updRect)
      window.removeEventListener('scroll', updRect)
      window.removeEventListener('load', updRect)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
    }
  })
</script>

<div class="torus-wrap">
  <canvas id="torus" bind:this={canvas} aria-hidden="true"></canvas>
</div>
