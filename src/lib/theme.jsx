import { createContext, useContext, useEffect, useState } from 'react'

const ThemeCtx = createContext({ theme: 'sketch', setTheme: () => {} })
const KEY = 'boothcat:theme'

export const THEMES = [
  { id: 'sketch', label: 'Sketchbook' },
  { id: 'retro', label: 'Retro film' },
]

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem(KEY) === 'retro' ? 'retro' : 'sketch'
    } catch {
      return 'sketch'
    }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem(KEY, theme) } catch {}
  }, [theme])

  return <ThemeCtx.Provider value={{ theme, setTheme }}>{children}</ThemeCtx.Provider>
}

export const useTheme = () => useContext(ThemeCtx)
