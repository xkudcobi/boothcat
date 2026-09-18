import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FRAMES } from '../lib/frames.js'
import { store } from '../lib/storage.js'

export default function Frames() {
  const nav = useNavigate()
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
      <h1 className="center">Pick a <em>frame</em></h1>
      <div className="frame-grid">
        {FRAMES.map((f) => (
          <button key={f.id} className={`frame-tile ${frame === f.id ? 'on' : ''}`} onClick={() => setFrame(f.id)}>
            <div className="swatch" style={{ background: f.bg, borderColor: f.ink }}>
              <span /><span /><span />
            </div>
            {f.name}
          </button>
        ))}
      </div>
      <div className="row center" style={{ marginTop: 32 }}>
        <button className="btn ghost" onClick={() => nav(-1)}>← Back</button>
        <button className="btn big" onClick={next}>Print my strip →</button>
      </div>
    </section>
  )
}
