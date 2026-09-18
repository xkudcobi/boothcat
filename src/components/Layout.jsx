import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { CatLogo } from './Art.jsx'
import { THEMES, useTheme } from '../lib/theme.jsx'

const NAV = [
  ['/', 'Home'],
  ['/features', 'Features'],
  ['/faq', 'FAQ'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
]

function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="theme-switch" role="group" aria-label="Visual theme">
      {THEMES.map((t) => (
        <button key={t.id} className={theme === t.id ? 'on' : ''} onClick={() => setTheme(t.id)}>
          {t.label}
        </button>
      ))}
    </div>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
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
            {NAV.map(([to, label]) => (
              <NavLink key={to} to={to} end={to === '/'}>
                {label}
              </NavLink>
            ))}
          </nav>
          <ThemeSwitch />
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">
          <span>© {new Date().getFullYear()} boothcat · runs 100% in your browser</span>
          <span>
            <Link to="/privacy">Privacy</Link>
            <Link to="/contact">Contact</Link>
          </span>
        </div>
      </footer>
    </>
  )
}
