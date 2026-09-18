import { Link } from 'react-router-dom'
import { Lock, Bolt, Palette, Printer, Camera, Upload } from '../components/Art.jsx'
import { useI18n } from '../lib/i18n.jsx'

const FEATURE_ICONS = [Camera, Upload, Palette, Printer, Lock, Bolt]

export function Features() {
  const { t } = useI18n()
  return (
    <section className="container page">
      <h1 className="center">
        {t('features.titleA')} <em>{t('features.titleB')}</em> {t('features.titleC')}
      </h1>
      <div className="features">
        {t('features.items').map(([title, text], i) => {
          const Icon = FEATURE_ICONS[i]
          return (
            <div key={title} className="card feature">
              <Icon className="feature-icon" />
              <h3>{title}</h3>
              <p className="muted">{text}</p>
            </div>
          )
        })}
      </div>
      <div className="row center" style={{ marginTop: 40 }}>
        <Link to="/start" className="btn big">{t('common.tryNow')}</Link>
      </div>
    </section>
  )
}

export function Faq() {
  const { t } = useI18n()
  return (
    <section className="container page">
      <h1 className="center">{t('faq.titleA')} <em>{t('faq.titleB')}</em></h1>
      <div className="faq prose" style={{ marginInline: 'auto' }}>
        {t('faq.items').map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export function About() {
  const { t } = useI18n()
  return (
    <section className="container page">
      <div className="prose" style={{ marginInline: 'auto' }}>
        <h1>{t('about.titleA')} <em>{t('about.titleB')}</em></h1>
        <p>{t('about.p1')}</p>
        <p>{t('about.p2')}</p>
        <h2>{t('about.builtWith')}</h2>
        <ul>
          {t('about.stack').map((s) => <li key={s}>{s}</li>)}
        </ul>
        <h2>{t('about.openSource')}</h2>
        <p>{t('about.openSourceText')}</p>
      </div>
    </section>
  )
}

export function Contact() {
  const { t } = useI18n()
  return (
    <section className="container page">
      <div className="prose" style={{ marginInline: 'auto' }}>
        <h1>{t('contact.titleA')} <em>{t('contact.titleB')}</em></h1>
        <p>{t('contact.p1')}</p>
        <p className="muted">{t('contact.p2')}</p>
      </div>
    </section>
  )
}

export function Privacy() {
  const { t } = useI18n()
  return (
    <section className="container page">
      <div className="prose" style={{ marginInline: 'auto' }}>
        <h1>{t('privacy.title')}</h1>
        <p>{t('privacy.lead')}</p>
        {t('privacy.sections').map(([h, p]) => (
          <div key={h}>
            <h2>{h}</h2>
            <p>{p}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function NotFound() {
  const { t } = useI18n()
  return (
    <section className="container page center">
      <h1>{t('notFound.title')}</h1>
      <p className="muted">{t('notFound.text')}</p>
      <Link to="/" className="btn">{t('notFound.home')}</Link>
    </section>
  )
}
