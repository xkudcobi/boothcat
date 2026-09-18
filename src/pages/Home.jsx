import { Link } from 'react-router-dom'
import { Strip, Sparkle, Heart, Lock, Bolt, Palette, Printer } from '../components/Art.jsx'
import { useI18n } from '../lib/i18n.jsx'

const PERK_ICONS = [Lock, Bolt, Palette, Printer]

export default function Home() {
  const { t } = useI18n()
  return (
    <>
      <section className="container hero">
        <div>
          <h1>
            {t('home.titleA')} <em>{t('home.titleB')}</em>
          </h1>
          <p className="lead muted">{t('home.lead')}</p>
          <div className="row">
            <Link to="/start" className="btn big">{t('home.start')}</Link>
            <Link to="/features" className="btn ghost">{t('home.see')}</Link>
          </div>
        </div>
        <div className="hero-art">
          <Strip style={{ width: 200, margin: '0 auto' }} className="float" />
          <Sparkle className="doodle wiggle" style={{ width: 40, top: 10, left: '12%', color: 'var(--accent)' }} />
          <Heart className="doodle float" style={{ width: 34, bottom: 30, right: '14%', color: 'var(--accent-2)' }} />
          <Sparkle className="doodle wiggle" style={{ width: 26, bottom: 80, left: '18%', color: 'var(--accent-2)' }} />
        </div>
      </section>

      <section className="container page">
        <h2 className="center">{t('home.how')}</h2>
        <div className="steps">
          {t('home.steps').map(([title, text]) => (
            <div key={title} className="card step"><h3>{title}</h3><p className="muted">{text}</p></div>
          ))}
        </div>
      </section>

      <section className="container page">
        <div className="features">
          {t('home.perks').map(([title, text], i) => {
            const Icon = PERK_ICONS[i]
            return (
              <div key={title} className="card feature">
                <Icon className="feature-icon" />
                <h3>{title}</h3>
                <p className="muted">{text}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
