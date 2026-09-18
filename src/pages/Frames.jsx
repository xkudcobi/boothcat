import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FRAMES } from '../lib/frames.js'
import { store } from '../lib/storage.js'
import { useI18n } from '../lib/i18n.jsx'

export default function Frames() {
  const nav = useNavigate()
  const { t } = useI18n()
  const [frame, setFrame] = useState(() => store.getFrame())

  // No photos yet? Send the visitor back to the start.
  useEffect(() => {
    if (store.getPhotos().length < 4) nav('/start', { replace: true })
  }, [nav])

  function next() {
    store.setFrame(frame)
    nav('/print')
  }

  return (
    <section className="container page">
      <h1 className="center">{t('frames.titleA')} <em>{t('frames.titleB')}</em></h1>
      <div className="frame-grid">
        {FRAMES.map((f) => (
          <button key={f.id} className={`frame-tile ${frame === f.id ? 'on' : ''}`} onClick={() => setFrame(f.id)}>
            <div className="swatch" style={{ background: f.bg, borderColor: f.ink }}>
              <span /><span /><span />
            </div>
            {t(`frames.names.${f.id}`)}
          </button>
        ))}
      </div>
      <div className="row center" style={{ marginTop: 32 }}>
        <button className="btn ghost" onClick={() => nav(-1)}>{t('common.back')}</button>
        <button className="btn big" onClick={next}>{t('frames.next')}</button>
      </div>
    </section>
  )
}
