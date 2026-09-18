import { getFilter } from './filters.js'
import { getFrame } from './frames.js'

// Layout of a classic 4-up strip. Sizes are in canvas pixels.
export const STRIP = {
  width: 600,
  photoW: 520,
  photoH: 390,
  pad: 40,
  gap: 28,
  footer: 120,
}
STRIP.height = STRIP.pad + 4 * STRIP.photoH + 3 * STRIP.gap + STRIP.footer

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

// Draw `img` into a box with object-fit: cover semantics.
function drawCover(ctx, img, x, y, w, h) {
  const s = Math.max(w / img.width, h / img.height)
  const dw = img.width * s
  const dh = img.height * s
  ctx.save()
  ctx.beginPath()
  ctx.rect(x, y, w, h)
  ctx.clip()
  ctx.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh)
  ctx.restore()
}

/* ---------- procedural decorations ---------- */

function heart(ctx, x, y, s) {
  ctx.beginPath()
  ctx.moveTo(x, y + s * 0.3)
  ctx.bezierCurveTo(x, y, x - s * 0.5, y, x - s * 0.5, y + s * 0.3)
  ctx.bezierCurveTo(x - s * 0.5, y + s * 0.6, x, y + s * 0.8, x, y + s)
  ctx.bezierCurveTo(x, y + s * 0.8, x + s * 0.5, y + s * 0.6, x + s * 0.5, y + s * 0.3)
  ctx.bezierCurveTo(x + s * 0.5, y, x, y, x, y + s * 0.3)
  ctx.closePath()
  ctx.fill()
}

function star(ctx, x, y, r) {
  ctx.beginPath()
  for (let i = 0; i < 10; i++) {
    const rad = i % 2 ? r * 0.45 : r
    const a = (Math.PI / 5) * i - Math.PI / 2
    const px = x + Math.cos(a) * rad
    const py = y + Math.sin(a) * rad
    if (i === 0) ctx.moveTo(px, py)
    else ctx.lineTo(px, py)
  }
  ctx.closePath()
  ctx.fill()
}

export function catFace(ctx, x, y, s) {
  ctx.save()
  ctx.translate(x, y)
  ctx.lineWidth = s * 0.08
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'
  ctx.beginPath()
  ctx.ellipse(0, 0, s * 0.5, s * 0.42, 0, 0, Math.PI * 2)
  ctx.stroke()
  // ears
  ctx.beginPath()
  ctx.moveTo(-s * 0.4, -s * 0.2)
  ctx.lineTo(-s * 0.48, -s * 0.62)
  ctx.lineTo(-s * 0.12, -s * 0.4)
  ctx.moveTo(s * 0.4, -s * 0.2)
  ctx.lineTo(s * 0.48, -s * 0.62)
  ctx.lineTo(s * 0.12, -s * 0.4)
  ctx.stroke()
  // eyes + nose
  ctx.beginPath()
  ctx.arc(-s * 0.18, -s * 0.05, s * 0.05, 0, Math.PI * 2)
  ctx.arc(s * 0.18, -s * 0.05, s * 0.05, 0, Math.PI * 2)
  ctx.fill()
  ctx.beginPath()
  ctx.moveTo(-s * 0.06, s * 0.1)
  ctx.lineTo(s * 0.06, s * 0.1)
  ctx.lineTo(0, s * 0.18)
  ctx.closePath()
  ctx.fill()
  // whiskers
  ctx.beginPath()
  for (const d of [-1, 1]) {
    ctx.moveTo(d * s * 0.2, s * 0.12)
    ctx.lineTo(d * s * 0.62, s * 0.05)
    ctx.moveTo(d * s * 0.2, s * 0.18)
    ctx.lineTo(d * s * 0.62, s * 0.22)
  }
  ctx.stroke()
  ctx.restore()
}

// Deterministic pseudo-random so the same frame always looks the same.
function rng(seed) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return s / 2147483647
  }
}

function decorate(ctx, frame, W, H) {
  ctx.save()
  ctx.fillStyle = frame.ink
  ctx.strokeStyle = frame.ink
  const rand = rng(42)
  const margin = STRIP.pad

  if (frame.decor === 'hearts') {
    ctx.globalAlpha = 0.85
    for (let i = 0; i < 26; i++) {
      const side = i % 2 ? W - margin * 0.55 : margin * 0.55
      heart(ctx, side, margin + rand() * (H - margin * 2), 10 + rand() * 12)
    }
  } else if (frame.decor === 'stars') {
    for (let i = 0; i < 40; i++) {
      const side = i % 2 ? W - margin * 0.5 : margin * 0.5
      ctx.globalAlpha = 0.4 + rand() * 0.6
      star(ctx, side + (rand() - 0.5) * 14, margin * 0.5 + rand() * (H - margin), 4 + rand() * 9)
    }
  } else if (frame.decor === 'doodle') {
    ctx.lineWidth = 3
    ctx.lineCap = 'round'
    ctx.globalAlpha = 0.9
    // wobbly hand-drawn border
    ctx.beginPath()
    const pts = [[12, 12], [W - 12, 12], [W - 12, H - 12], [12, H - 12], [12, 12]]
    let first = true
    for (let p = 0; p < pts.length - 1; p++) {
      const [x0, y0] = pts[p]
      const [x1, y1] = pts[p + 1]
      for (let t = 0; t <= 1.0001; t += 0.05) {
        const x = x0 + (x1 - x0) * t + (rand() - 0.5) * 4
        const y = y0 + (y1 - y0) * t + (rand() - 0.5) * 4
        if (first) { ctx.moveTo(x, y); first = false } else ctx.lineTo(x, y)
      }
    }
    ctx.stroke()
    // little sparkles in the gutters
    for (let i = 0; i < 14; i++) {
      const side = i % 2 ? W - margin * 0.5 : margin * 0.5
      const y = margin + rand() * (H - margin * 2)
      ctx.beginPath()
      ctx.moveTo(side - 8, y)
      ctx.lineTo(side + 8, y)
      ctx.moveTo(side, y - 8)
      ctx.lineTo(side, y + 8)
      ctx.stroke()
    }
  } else if (frame.decor === 'cat') {
    ctx.globalAlpha = 0.9
    for (let i = 0; i < 4; i++) {
      const y = STRIP.pad + i * (STRIP.photoH + STRIP.gap) + STRIP.photoH / 2
      catFace(ctx, margin * 0.5, y, 26)
      catFace(ctx, W - margin * 0.5, y, 26)
    }
  } else if (frame.decor === 'film') {
    // sprocket holes down both edges
    ctx.fillStyle = '#ffffff'
    const hole = 14
    for (let y = 16; y < H - 16; y += 34) {
      ctx.fillRect(10, y, hole, hole * 1.4)
      ctx.fillRect(W - 10 - hole, y, hole, hole * 1.4)
    }
  }
  ctx.restore()
}

/**
 * Render a photo strip and return a JPEG data URL.
 * @param {string[]} photos  four data URLs
 * @param {{filter:string, frame:string, caption?:string, showDate?:boolean}} opts
 */
export async function renderStrip(photos, opts) {
  const frame = getFrame(opts.frame)
  const filter = getFilter(opts.filter)
  const { width: W, height: H, pad, photoW, photoH, gap } = STRIP

  const canvas = document.createElement('canvas')
  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = frame.bg
  ctx.fillRect(0, 0, W, H)

  const imgs = await Promise.all(photos.slice(0, 4).map(loadImage))
  imgs.forEach((img, i) => {
    const x = (W - photoW) / 2
    const y = pad + i * (photoH + gap)
    ctx.save()
    ctx.filter = filter.css
    drawCover(ctx, img, x, y, photoW, photoH)
    ctx.restore()
  })

  decorate(ctx, frame, W, H)

  // footer text
  ctx.fillStyle = frame.ink
  ctx.textAlign = 'center'
  ctx.font = '600 30px "Caveat", "Patrick Hand", cursive'
  const caption = (opts.caption || 'boothcat').slice(0, 32)
  ctx.fillText(caption, W / 2, H - 64)
  if (opts.showDate !== false) {
    ctx.font = '16px "Space Mono", monospace'
    ctx.globalAlpha = 0.7
    const date = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
    ctx.fillText(date, W / 2, H - 32)
  }

  return canvas.toDataURL('image/jpeg', 0.92)
}

/** Grab the current video frame, mirrored like a selfie, downscaled. */
export function captureFrame(video, mirror = true) {
  const c = document.createElement('canvas')
  const w = 640
  const h = Math.round((video.videoHeight / video.videoWidth) * w) || 480
  c.width = w
  c.height = h
  const ctx = c.getContext('2d')
  if (mirror) {
    ctx.translate(w, 0)
    ctx.scale(-1, 1)
  }
  ctx.drawImage(video, 0, 0, w, h)
  return c.toDataURL('image/jpeg', 0.85)
}

/** Read an uploaded image file and downscale it. */
export function fileToDataUrl(file, max = 900) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      const s = Math.min(1, max / Math.max(img.width, img.height))
      const c = document.createElement('canvas')
      c.width = Math.round(img.width * s)
      c.height = Math.round(img.height * s)
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height)
      URL.revokeObjectURL(url)
      resolve(c.toDataURL('image/jpeg', 0.85))
    }
    img.onerror = reject
    img.src = url
  })
}
