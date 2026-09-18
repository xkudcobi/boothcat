import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FilterPicker from '../components/FilterPicker.jsx'
import { getFilter } from '../lib/filters.js'
import { store } from '../lib/storage.js'
import { captureFrame } from '../lib/strip.js'

const COUNTDOWN = 3
const SHOTS = 4

export default function Shoot() {
  const nav = useNavigate()
  const videoRef = useRef(null)
  const streamRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [error, setError] = useState('')
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
        if (!active) return stream.getTracks().forEach((t) => t.stop())
        streamRef.current = stream
        if (videoRef.current) {
          videoRef.current.srcObject = stream
          videoRef.current.onloadedmetadata = () => setReady(true)
        }
      })
      .catch(() => setError('Camera access was blocked. Allow it in your browser, or upload photos instead.'))
    return () => {
      active = false
      streamRef.current?.getTracks().forEach((t) => t.stop())
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
      <h1 className="center">Strike a <em>pose</em></h1>
      <div className="booth">
        <div className="stack">
          <div className="viewfinder">
            <video ref={videoRef} autoPlay playsInline muted style={{ filter: getFilter(filter).css }} />
            {count != null && <div className="count">{count}</div>}
            <div className={`flash ${flash ? 'on' : ''}`} />
            {error && <div className="msg"><p>{error}</p></div>}
            {!error && !ready && <div className="msg"><p>Waking up the camera…</p></div>}
          </div>
          <div className="thumbs">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="slot">
                {photos[i] ? <img src={photos[i]} alt={`Shot ${i + 1}`} style={{ filter: getFilter(filter).css }} /> : `#${i + 1}`}
              </div>
            ))}
          </div>
          <div className="row center">
            {!done && (
              <button className="btn big" onClick={runSession} disabled={!ready || running}>
                {running ? 'Smile…' : 'Start countdown'}
              </button>
            )}
            {running && <button className="btn ghost" onClick={retake}>Cancel</button>}
            {done && (
              <>
                <button className="btn ghost" onClick={retake}>Retake</button>
                <button className="btn big" onClick={next}>Choose a frame →</button>
              </>
            )}
            {error && <button className="btn ghost" onClick={() => nav('/upload')}>Upload instead</button>}
          </div>
        </div>
        <aside>
          <FilterPicker value={filter} onChange={setFilter} />
        </aside>
      </div>
    </section>
  )
}
