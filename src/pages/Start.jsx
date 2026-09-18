import { Link } from 'react-router-dom'
import { Camera, Upload } from '../components/Art.jsx'
import { store } from '../lib/storage.js'
import { useI18n } from '../lib/i18n.jsx'

export default function Start() {
  const { t } = useI18n()
  // Starting a new session always begins with an empty strip.
  const reset = () => store.clearSession()
  return (
    <section className="container page">
      <h1 className="center">{t('start.titleA')} <em>{t('start.titleB')}</em></h1>
      <p className="center muted">{t('start.lead')}</p>
      <div className="choices" style={{ marginTop: 32 }}>
        <Link to="/shoot" className="card choice" onClick={reset}>
          <Camera />
          <h2>{t('start.camera')}</h2>
          <span className="muted">{t('start.cameraSub')}</span>
        </Link>
        <Link to="/upload" className="card choice" onClick={reset}>
          <Upload />
          <h2>{t('start.upload')}</h2>
          <span className="muted">{t('start.uploadSub')}</span>
        </Link>
      </div>
    </section>
  )
}
