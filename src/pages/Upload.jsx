import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { store } from '../lib/storage.js'
import { fileToDataUrl } from '../lib/strip.js'
import FilterPicker from '../components/FilterPicker.jsx'
import { getFilter } from '../lib/filters.js'
import { useI18n } from '../lib/i18n.jsx'

export default function Upload() {
  const nav = useNavigate()
  const { t } = useI18n()
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
      setError(t('upload.error'))
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

  const label = photos.length >= 4 ? t('upload.full') : busy ? t('upload.reading') : t('upload.tap')

  return (
    <section className="container page">
      <h1 className="center">
        {t('upload.titleA')} <em>{t('upload.titleB')}</em> {t('upload.titleC')}
      </h1>
      <div className="booth">
        <div className="stack">
          <label className="card choice" style={{ padding: 28 }}>
            <input type="file" accept="image/*" multiple onChange={onFiles} className="sr-only" disabled={busy || photos.length >= 4} />
            <h3>{label}</h3>
            <span className="muted">{t('upload.hint')} {4 - photos.length} {t('upload.left')}</span>
          </label>
          {error && <p className="muted">{error}</p>}
          <div className="thumbs">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="slot" onClick={() => photos[i] && remove(i)}>
                {photos[i] ? <img src={photos[i]} alt={`#${i + 1}`} style={{ filter: getFilter(filter).css }} /> : `#${i + 1}`}
              </div>
            ))}
          </div>
          <p className="muted center" style={{ fontSize: '0.95rem' }}>{t('upload.remove')}</p>
        </div>
        <aside className="stack">
          <FilterPicker value={filter} onChange={setFilter} />
          <button className="btn big" disabled={photos.length < 4} onClick={next}>{t('upload.next')}</button>
        </aside>
      </div>
    </section>
  )
}
