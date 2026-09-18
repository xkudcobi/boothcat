import { Link } from 'react-router-dom'
import { Lock, Bolt, Palette, Printer, Camera, Upload } from '../components/Art.jsx'

export function Features() {
  const items = [
    { Icon: Camera, title: 'Live camera booth', text: 'A 3-second countdown fires four times with a flash between shots, exactly like a coin-op booth. The preview is mirrored so you can pose naturally.' },
    { Icon: Upload, title: 'Bring your own photos', text: 'No webcam? Pick four images from your gallery. They are resized in the browser before anything is stored.' },
    { Icon: Palette, title: 'Eight filters, ten frames', text: 'Filters are CSS filter presets applied both to the live preview and the final canvas render, so what you see is what you get. Frames are drawn procedurally: hearts, stars, doodles, film sprockets, and a cat.' },
    { Icon: Printer, title: 'Print-ready output', text: 'The strip is rendered on a 600×1832 canvas, the proportions of a 2×6 inch strip, and exported as a high-quality JPEG.' },
    { Icon: Lock, title: 'Private by design', text: 'No server, no analytics, no cookies. Session data lives in localStorage and is cleared when you start over.' },
    { Icon: Bolt, title: 'Works offline', text: 'Once the page has loaded it needs nothing from the network. Every feature runs on the canvas and MediaDevices APIs.' },
  ]
  return (
    <section className="container page">
      <h1 className="center">Everything the <em>booth</em> does</h1>
      <div className="features">
        {items.map(({ Icon, title, text }) => (
          <div key={title} className="card feature">
            <Icon className="feature-icon" />
            <h3>{title}</h3>
            <p className="muted">{text}</p>
          </div>
        ))}
      </div>
      <div className="row center" style={{ marginTop: 40 }}>
        <Link to="/start" className="btn big">Try it now</Link>
      </div>
    </section>
  )
}

export function Faq() {
  const qa = [
    ['Is it free?', 'Yes. There is nothing to buy, no watermark, and no sign-up.'],
    ['Where do my photos go?', 'Nowhere. They are captured with the canvas API and kept in your browser\'s localStorage until you press "Start over". You can verify this in the network tab: no requests are made after the page loads.'],
    ['Why is the camera preview mirrored?', 'Because that is how a mirror works and it makes posing easier. The captured photos are mirrored to match the preview.'],
    ['Can I use it on my phone?', 'Yes. It works in any modern mobile browser that supports getUserMedia. On iOS use Safari.'],
    ['The camera does not turn on.', 'Your browser needs permission to use the camera. Look for the camera icon in the address bar, allow access, and reload. Camera access also requires HTTPS (or localhost).'],
    ['What size should I print at?', 'The strip has 2:6 proportions. Print it at 2×6 inches or 5×15 cm; most photo labs offer this as a "photo strip" option.'],
    ['Can I change the filter after shooting?', 'The filter chosen while shooting is baked into the final render. Press "Retake" to shoot again with a different one; the frame and caption can be changed at any time.'],
  ]
  return (
    <section className="container page">
      <h1 className="center">Questions, <em>answered</em></h1>
      <div className="faq prose" style={{ marginInline: 'auto' }}>
        {qa.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export function About() {
  return (
    <section className="container page">
      <div className="prose" style={{ marginInline: 'auto' }}>
        <h1>About <em>boothcat</em></h1>
        <p>
          boothcat started as a weekend experiment: could the whole photo-booth experience, from the countdown to the printed strip, run inside a browser tab with no backend at all?
        </p>
        <p>
          It turns out it can. The camera comes from <code>getUserMedia</code>, the shots are frozen onto a <code>&lt;canvas&gt;</code>, filters are ordinary CSS filter functions that the canvas API happens to understand too, and the frames are drawn with a few dozen lines of path code instead of image files. The result is a small, fast site that keeps your photos where they belong: with you.
        </p>
        <h2>Built with</h2>
        <ul>
          <li>React 19 and React Router 7</li>
          <li>Vite</li>
          <li>The Canvas 2D and MediaDevices web APIs</li>
          <li>Hand-written CSS with a sketchbook look</li>
        </ul>
        <h2>Open source</h2>
        <p>The code is published on GitHub under the MIT licence. Bug reports and pull requests are welcome.</p>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section className="container page">
      <div className="prose" style={{ marginInline: 'auto' }}>
        <h1>Say <em>hello</em></h1>
        <p>Found a bug, have a frame idea, or printed a strip you are proud of? The best place to reach me is the GitHub repository: open an issue and I will get back to you.</p>
        <p className="muted">There is no contact form on purpose: this site has no server to send it to.</p>
      </div>
    </section>
  )
}

export function Privacy() {
  return (
    <section className="container page">
      <div className="prose" style={{ marginInline: 'auto' }}>
        <h1>Privacy</h1>
        <p>The short version: boothcat does not collect anything.</p>
        <h2>Photos</h2>
        <p>Photos taken or uploaded are processed in your browser and stored in <code>localStorage</code> under keys starting with <code>boothcat:</code>. They are never transmitted. "Start over" deletes them; clearing site data in your browser does too.</p>
        <h2>Camera</h2>
        <p>Camera access is requested only on the shooting page and released as soon as you leave it.</p>
        <h2>Tracking</h2>
        <p>There are no analytics scripts, advertising tags, or cookies. Fonts are loaded from Google Fonts, which may log the request as any web font host would.</p>
      </div>
    </section>
  )
}

export function NotFound() {
  return (
    <section className="container page center">
      <h1>404</h1>
      <p className="muted">That page wandered off. Cats do that.</p>
      <Link to="/" className="btn">Back home</Link>
    </section>
  )
}
