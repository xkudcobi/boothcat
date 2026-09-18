import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { store } from '../lib/storage.js'
import { renderStrip } from '../lib/strip.js'
import { FRAMES } from '../lib/frames.js'

export default function Print() {
  const nav = useNavigate()
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
      .then(() => renderStrip(photos, { filter: store.getFilter(), frame, caption, showDate }))
      .then((url) => {
        if (!live) return
        setStrip(url)
        store.setStrip(url)
      })
      .finally(() => live && setRendering(false))
    return () => { live = false }
  }, [caption, showDate, frame, nav])

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
        await navigator.share({ files: [file], title: 'My boothcat strip' })
      } else download()
    } catch {
      /* user cancelled */
    }
  }

  return (
    <section className="container page">
      <h1 className="center">Here's your <em>strip</em></h1>
      <div className="result">
        <div>
          {strip ? (
            <img src={strip} alt="Your photo strip" className="strip-preview" style={{ opacity: rendering ? 0.6 : 1 }} />
          ) : (
            <div className="strip-preview" style={{ aspectRatio: '600 / 1832', display: 'grid', placeItems: 'center' }}>Developing…</div>
          )}
        </div>
        <div className="stack card" style={{ width: '100%' }}>
          <div className="field">
            <label htmlFor="caption">Caption</label>
            <input id="caption" type="text" maxLength={32} value={caption} onChange={(e) => setCaption(e.target.value)} />
          </div>
          <label className="row" style={{ gap: 8 }}>
            <input type="checkbox" checked={showDate} onChange={(e) => setShowDate(e.target.checked)} /> Print today's date
          </label>
          <div className="field">
            <label>Frame</label>
            <div className="row">
              {FRAMES.map((f) => (
                <button
                  key={f.id}
                  title={f.name}
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
            <button className="btn big" onClick={download} disabled={!strip}>Download JPEG</button>
            <button className="btn ghost" onClick={share} disabled={!strip}>Share</button>
          </div>
          <div className="row">
            <Link to="/frames" className="btn ghost">← Frames</Link>
            <Link to="/start" className="btn ghost" onClick={() => store.clearSession()}>Start over</Link>
          </div>
          <p className="muted" style={{ fontSize: '0.95rem', margin: 0 }}>
            Tip: print at 2×6 inches (5×15 cm) for the classic booth size.
          </p>
        </div>
      </div>
    </section>
  )
}
