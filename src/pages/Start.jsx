import { Link } from 'react-router-dom'
import { Camera, Upload } from '../components/Art.jsx'
import { store } from '../lib/storage.js'

export default function Start() {
  // Starting a new session always begins with an empty strip.
  const reset = () => store.clearSession()
  return (
    <section className="container page">
      <h1 className="center">How do you want to <em>shoot?</em></h1>
      <p className="center muted">Both options end with the same strip. Nothing is uploaded either way.</p>
      <div className="choices" style={{ marginTop: 32 }}>
        <Link to="/shoot" className="card choice" onClick={reset}>
          <Camera />
          <h2>Use my camera</h2>
          <span className="muted">Four shots with a countdown, like a real booth.</span>
        </Link>
        <Link to="/upload" className="card choice" onClick={reset}>
          <Upload />
          <h2>Upload photos</h2>
          <span className="muted">Pick four pictures you already have.</span>
        </Link>
      </div>
    </section>
  )
}
