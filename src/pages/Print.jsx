import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { store } from '../lib/storage.js'
import { renderStrip } from '../lib/strip.js'
import { FRAMES } from '../lib/frames.js'
import { useI18n } from '../lib/i18n.jsx'

export default function Print() {
  const nav = useNavigate()
  const { t, lang } = useI18n()
  const [caption, setCaption] = useState('boothcat')
  const [showDate, setShowDate] = useState(true)
  const [frame, setFrame] = useState(() => store.getFrame())
  const [strip, setStrip] = useState(null)
  const [rendering, setRendering] = useState(false)

  useEffect(() => {
    const photos = store.getPhotos()
    if (photos.length < 4) {
      nav('/start', { replace: true })
      return
    }
    let live = true
    setRendering(true)
    // Wait for web fonts so the caption renders with the right face.
    ;(document.fonts?.ready ?? Promise.resolve())
      .then(() => renderStrip(photos, { filter: store.getFilter(), frame, caption, showDate, locale: lang }))
      .then((url) => {
        if (!live) return
        setStrip(url)
        store.setStrip(url)
      })
      .finally(() => live && setRendering(false))
    return () => { live = false }
  }, [caption, showDate, frame, lang, nav])

  function changeFrame(id) {
    setFrame(id)
    store.setFrame(id)
  }

  function download() {
    const a = document.createElement('a')
    a.href = strip
    a.download = `boothcat-${Date.now()}.jpg`
    a.click()
  }

  async function share() {
    try {
      const blob = await (await fetch(strip)).blob()
      const file = new File([blob], 'boothcat.jpg', { type: 'image/jpeg' })
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: 'boothcat' })
      } else download()
    } catch {
      /* user cancelled */
    }
  }

  return (
    <section className="container page">
      <h1 className="center">{t('print.titleA')} <em>{t('print.titleB')}</em></h1>
      <div className="result">
        <div>
          {strip ? (
            <img src={strip} alt={t('print.alt')} className="strip-preview" style={{ opacity: rendering ? 0.6 : 1 }} />
          ) : (
            <div className="strip-preview" style={{ aspectRatio: '600 / 1832', display: 'grid', placeItems: 'center' }}>{t('print.developing')}</div>
          )}
        </div>
        <div className="stack card" style={{ width: '100%' }}>
          <div className="field">
            <label htmlFor="caption">{t('print.caption')}</label>
            <input id="caption" type="text" maxLength={32} value={caption} onChange={(e) => setCaption(e.target.value)} />
          </div>
          <label className="row" style={{ gap: 8 }}>
            <input type="checkbox" checked={showDate} onChange={(e) => setShowDate(e.target.checked)} /> {t('print.date')}
          </label>
          <div className="field">
            <label>{t('print.frame')}</label>
            <div className="row">
              {FRAMES.map((f) => (
                <button
                  key={f.id}
                  title={t(`frames.names.${f.id}`)}
                  onClick={() => changeFrame(f.id)}
                  style={{
                    width: 34, height: 34, borderRadius: 8, background: f.bg,
                    border: `2px solid ${f.ink}`,
                    outline: frame === f.id ? '3px solid var(--accent)' : 'none', outlineOffset: 2,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="row">
            <button className="btn big" onClick={download} disabled={!strip}>{t('print.download')}</button>
            <button className="btn ghost" onClick={share} disabled={!strip}>{t('print.share')}</button>
          </div>
          <div className="row">
            <Link to="/frames" className="btn ghost">{t('print.toFrames')}</Link>
            <Link to="/start" className="btn ghost" onClick={() => store.clearSession()}>{t('common.startOver')}</Link>
          </div>
          <p className="muted" style={{ fontSize: '0.95rem', margin: 0 }}>{t('print.tip')}</p>
        </div>
      </div>
    </section>
  )
}
