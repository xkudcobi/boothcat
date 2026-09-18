import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { CatLogo } from './Art.jsx'
import { LANGS, useI18n } from '../lib/i18n.jsx'

const NAV = [
  ['/', 'home'],
  ['/features', 'features'],
  ['/faq', 'faq'],
  ['/about', 'about'],
  ['/contact', 'contact'],
]

function LangSwitch() {
  const { lang, setLang } = useI18n()
  return (
    <div className="lang-switch" role="group" aria-label="Language">
      {LANGS.map((l) => (
        <button key={l.id} className={lang === l.id ? 'on' : ''} onClick={() => setLang(l.id)} lang={l.id}>
          {l.label}
        </button>
      ))}
    </div>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  const { t } = useI18n()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <header className="site-header">
        <div className="container">
          <Link to="/" className="brand">
            <CatLogo /> boothcat
          </Link>
          <nav className="nav" aria-label="Main">
            {NAV.map(([to, key]) => (
              <NavLink key={to} to={to} end={to === '/'}>
                {t(`nav.${key}`)}
              </NavLink>
            ))}
          </nav>
          <LangSwitch />
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">
          <span>© {new Date().getFullYear()} boothcat · {t('footer.tagline')}</span>
          <span>
            <Link to="/privacy">{t('nav.privacy')}</Link>
            <Link to="/contact">{t('nav.contact')}</Link>
          </span>
        </div>
      </footer>
    </>
  )
}
