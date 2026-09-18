import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FilterPicker from '../components/FilterPicker.jsx'
import { getFilter } from '../lib/filters.js'
import { store } from '../lib/storage.js'
import { captureFrame } from '../lib/strip.js'
import { useI18n } from '../lib/i18n.jsx'

const COUNTDOWN = 3
const SHOTS = 4

export default function Shoot() {
  const nav = useNavigate()
  const { t } = useI18n()
  const videoRef = useRef(null)
  const streamRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [blocked, setBlocked] = useState(false)
  const [filter, setFilter] = useState(() => store.getFilter())
  const [photos, setPhotos] = useState([])
  const [count, setCount] = useState(null) // number shown in the viewfinder
  const [flash, setFlash] = useState(false)
  const [running, setRunning] = useState(false)
  const cancelRef = useRef(false)

  // Open the camera on mount, release it on unmount.
  useEffect(() => {
    let active = true
    navigator.mediaDevices
      ?.getUserMedia({ video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 960 } }, audio: false })
      .then((stream) => {
        if (!active) {
          stream.getTracks().forEach((track) => track.stop())
          return
        }
        streamRef.current = stream
        if (videoRef.current) {
          videoRef.current.srcObject = stream
          videoRef.current.onloadedmetadata = () => setReady(true)
        }
      })
      .catch(() => setBlocked(true))
    return () => {
      active = false
      streamRef.current?.getTracks().forEach((track) => track.stop())
    }
  }, [])

  const wait = (ms) => new Promise((r) => setTimeout(r, ms))

  async function runSession() {
    if (running || !ready) return
    setRunning(true)
    cancelRef.current = false
    const taken = []
    for (let shot = 0; shot < SHOTS; shot++) {
      for (let n = COUNTDOWN; n > 0; n--) {
        if (cancelRef.current) return finish(taken)
        setCount(n)
        await wait(1000)
      }
      setCount(null)
      setFlash(true)
      taken.push(captureFrame(videoRef.current))
      setPhotos([...taken])
      await wait(350)
      setFlash(false)
      await wait(650)
    }
    finish(taken)
  }

  function finish(taken) {
    setCount(null)
    setFlash(false)
    setRunning(false)
    if (taken.length === SHOTS) {
      store.setPhotos(taken)
      store.setFilter(filter)
    }
  }

  function retake() {
    cancelRef.current = true
    setPhotos([])
    setRunning(false)
  }

  function next() {
    store.setFilter(filter)
    nav('/frames')
  }

  const done = photos.length === SHOTS && !running

  return (
    <section className="container page">
      <h1 className="center">{t('shoot.titleA')} <em>{t('shoot.titleB')}</em></h1>
      <div className="booth">
        <div className="stack">
          <div className="viewfinder">
            <video ref={videoRef} autoPlay playsInline muted style={{ filter: getFilter(filter).css }} />
            {count != null && <div className="count">{count}</div>}
            <div className={`flash ${flash ? 'on' : ''}`} />
            {blocked && <div className="msg"><p>{t('shoot.blocked')}</p></div>}
            {!blocked && !ready && <div className="msg"><p>{t('shoot.waking')}</p></div>}
          </div>
          <div className="thumbs">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="slot">
                {photos[i] ? <img src={photos[i]} alt={`#${i + 1}`} style={{ filter: getFilter(filter).css }} /> : `#${i + 1}`}
              </div>
            ))}
          </div>
          <div className="row center">
            {!done && (
              <button className="btn big" onClick={runSession} disabled={!ready || running}>
                {running ? t('shoot.smile') : t('shoot.start')}
              </button>
            )}
            {running && <button className="btn ghost" onClick={retake}>{t('shoot.cancel')}</button>}
            {done && (
              <>
                <button className="btn ghost" onClick={retake}>{t('shoot.retake')}</button>
                <button className="btn big" onClick={next}>{t('shoot.next')}</button>
              </>
            )}
            {blocked && <button className="btn ghost" onClick={() => nav('/upload')}>{t('shoot.uploadInstead')}</button>}
          </div>
        </div>
        <aside>
          <FilterPicker value={filter} onChange={setFilter} />
        </aside>
      </div>
    </section>
  )
}
