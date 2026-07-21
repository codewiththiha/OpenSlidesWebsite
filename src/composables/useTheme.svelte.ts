export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'openslides-theme'

function applyTheme(t: Theme): void {
  document.documentElement.setAttribute('data-theme', t)
}

/**
 * Seed from whatever the no-flash inline script in index.html already wrote
 * to <html data-theme="…"> (localStorage → prefers-color-scheme).
 */
function getInitial(): Theme {
  const current = document.documentElement.getAttribute('data-theme')
  if (current === 'light' || current === 'dark') return current

  let stored: string | null = null
  try {
    stored = localStorage.getItem(STORAGE_KEY)
  } catch {
    /* ignore */
  }
  if (stored === 'light' || stored === 'dark') return stored
  if (typeof matchMedia !== 'undefined' && matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

/** Singleton reactive theme, shared by every toggle + the torus. */
export const themeState = $state<{ current: Theme }>({ current: getInitial() })
applyTheme(themeState.current)

export function toggleTheme(): void {
  themeState.current = themeState.current === 'dark' ? 'light' : 'dark'
  applyTheme(themeState.current)
  try {
    localStorage.setItem(STORAGE_KEY, themeState.current)
  } catch {
    /* ignore */
  }
}
