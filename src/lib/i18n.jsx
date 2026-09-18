import { createContext, useContext, useEffect, useState } from 'react'
import { en } from '../locales/en.js'
import { tr } from '../locales/tr.js'

const DICTS = { en, tr }
export const LANGS = [
  { id: 'en', label: 'EN' },
  { id: 'tr', label: 'TR' },
]
const KEY = 'boothcat:lang'

function detect() {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved in DICTS) return saved
  } catch {}
  const nav = (navigator.language || '').toLowerCase()
  return nav.startsWith('tr') ? 'tr' : 'en'
}

const Ctx = createContext({ lang: 'en', setLang: () => {}, t: (k) => k })

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(detect)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = DICTS[lang].meta.title
    try { localStorage.setItem(KEY, lang) } catch {}
  }, [lang])

  // t('a.b.c') walks the dictionary; falls back to English, then the key.
  const t = (path) => {
    const get = (d) => path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), d)
    return get(DICTS[lang]) ?? get(en) ?? path
  }

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>
}

export const useI18n = () => useContext(Ctx)
