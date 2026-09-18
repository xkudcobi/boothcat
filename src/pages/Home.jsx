import { Link } from 'react-router-dom'
import { Strip, Sparkle, Heart, Lock, Bolt, Palette, Printer } from '../components/Art.jsx'

const PERKS = [
  { Icon: Lock, title: 'Nothing leaves your device', text: 'Photos are processed with the canvas API and kept in your browser. No uploads, no accounts.' },
  { Icon: Bolt, title: 'Four shots, ten seconds', text: 'A countdown, a flash, and a strip. It feels like the real thing, minus the coins.' },
  { Icon: Palette, title: 'Filters and frames', text: 'Eight film-inspired filters and ten frames drawn on the fly, from plain white to hearts and stars.' },
  { Icon: Printer, title: 'Print-ready strip', text: 'Download a high-resolution JPEG sized like a classic 2×6 booth strip.' },
]

export default function Home() {
  return (
    <>
      <section className="container hero">
        <div>
          <h1>
            A photo booth <em>in your browser.</em>
          </h1>
          <p className="lead muted">
            Snap four photos with your webcam or upload your own, pick a filter and a frame, and download a strip you can print, share or stick on the fridge.
          </p>
          <div className="row">
            <Link to="/start" className="btn big">Start the booth</Link>
            <Link to="/features" className="btn ghost">See what it does</Link>
          </div>
        </div>
        <div className="hero-art">
          <Strip style={{ width: 200, margin: '0 auto' }} className="float" />
          <Sparkle className="doodle wiggle" style={{ width: 40, top: 10, left: '12%', color: 'var(--accent)' }} />
          <Heart className="doodle float" style={{ width: 34, bottom: 30, right: '14%', color: 'var(--accent-2)' }} />
          <Sparkle className="doodle wiggle" style={{ width: 26, bottom: 80, left: '18%', color: 'var(--accent-2)' }} />
        </div>
      </section>

      <section className="container page">
        <h2 className="center">How it works</h2>
        <div className="steps">
          <div className="card step"><h3>Choose a source</h3><p className="muted">Live camera or four pictures from your gallery.</p></div>
          <div className="card step"><h3>Take the shots</h3><p className="muted">A 3-second countdown fires four times. Pick a filter while you pose.</p></div>
          <div className="card step"><h3>Frame it</h3><p className="muted">Pick one of ten frames and add a caption.</p></div>
          <div className="card step"><h3>Download</h3><p className="muted">Grab the strip as a JPEG and print it anywhere.</p></div>
        </div>
      </section>

      <section className="container page">
        <div className="features">
          {PERKS.map(({ Icon, title, text }) => (
            <div key={title} className="card feature">
              <Icon className="feature-icon" />
              <h3>{title}</h3>
              <p className="muted">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
