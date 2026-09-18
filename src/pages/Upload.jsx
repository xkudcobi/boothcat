import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { store } from '../lib/storage.js'
import { fileToDataUrl } from '../lib/strip.js'
import FilterPicker from '../components/FilterPicker.jsx'
import { getFilter } from '../lib/filters.js'

export default function Upload() {
  const nav = useNavigate()
  const [photos, setPhotos] = useState(() => store.getPhotos())
  const [filter, setFilter] = useState(() => store.getFilter())
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  async function onFiles(e) {
    const files = Array.from(e.target.files || []).filter((f) => f.type.startsWith('image/'))
    if (!files.length) return
    setBusy(true)
    setError('')
    try {
      const urls = await Promise.all(files.map((f) => fileToDataUrl(f)))
      const next = [...photos, ...urls].slice(0, 4)
      setPhotos(next)
      store.setPhotos(next)
    } catch {
      setError('One of those files could not be read. Try a JPEG or PNG.')
    } finally {
      setBusy(false)
      e.target.value = ''
    }
  }

  function remove(i) {
    const next = photos.filter((_, j) => j !== i)
    setPhotos(next)
    store.setPhotos(next)
  }

  function next() {
    store.setFilter(filter)
    nav('/frames')
  }

  return (
    <section className="container page">
      <h1 className="center">Pick <em>four</em> photos</h1>
      <div className="booth">
        <div className="stack">
          <label className="card choice" style={{ padding: 28 }}>
            <input type="file" accept="image/*" multiple onChange={onFiles} className="sr-only" disabled={busy || photos.length >= 4} />
            <h3>{photos.length >= 4 ? 'All four slots are full' : busy ? 'Reading…' : 'Tap to choose images'}</h3>
            <span className="muted">Landscape shots work best. {4 - photos.length} left.</span>
          </label>
          {error && <p className="muted">{error}</p>}
          <div className="thumbs">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="slot" onClick={() => photos[i] && remove(i)} title={photos[i] ? 'Remove' : ''}>
                {photos[i] ? <img src={photos[i]} alt={`Photo ${i + 1}`} style={{ filter: getFilter(filter).css }} /> : `#${i + 1}`}
              </div>
            ))}
          </div>
          <p className="muted center" style={{ fontSize: '0.95rem' }}>Click a thumbnail to remove it.</p>
        </div>
        <aside className="stack">
          <FilterPicker value={filter} onChange={setFilter} />
          <button className="btn big" disabled={photos.length < 4} onClick={next}>Choose a frame →</button>
        </aside>
      </div>
    </section>
  )
}
