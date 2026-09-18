# boothcat

> **Work in progress — the look is temporary.** The current sketchbook design is a functional first pass, not the final visual direction. I am reworking the whole interface into a more polished, more interactive experience: richer animations, a live strip preview while you shoot, drag-and-drop photo ordering, and custom frame editing. The booth logic underneath (camera, filters, canvas rendering) is stable; the UI on top of it will change a lot.

**Live:** https://xkudcobi.github.io/boothcat/

A photo booth that runs entirely in your browser. Snap four photos with your webcam (or upload your own), pick a filter and a frame, and download a print-ready strip. No server, no accounts, no tracking.

## Features

- **Live booth** — 3-second countdown × 4 shots with a flash, mirrored preview
- **Upload mode** — use four photos from your gallery instead
- **8 filters** — CSS filter presets applied to both the live preview and the final render
- **10 frames** — drawn procedurally on the canvas (hearts, stars, doodles, film sprockets, a cat…), no image assets
- **Caption + date** — printed on the strip footer
- **Print-ready** — 600×1832 JPEG, the proportions of a classic 2×6″ strip
- **English / Turkish** — auto-detected from the browser, switchable from the header
- **Private** — photos live in `localStorage` only; nothing is uploaded

## Stack

React 19 · React Router 7 · Vite · Canvas 2D + MediaDevices APIs · hand-written CSS

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the build
```

Camera access requires `https://` or `localhost`.

## Project layout

```
src/
  lib/
    strip.js      canvas renderer: layout, procedural frame decorations, capture helpers
    filters.js    filter presets
    frames.js     frame presets
    storage.js    localStorage wrapper
    i18n.jsx      language context; strings live in src/locales/
  components/     layout, shared UI, inline SVG illustrations
  pages/          one file per route
  styles/
    global.css    base tokens + component styles
    sketch.css    the notebook look
```

## Roadmap

- [ ] Redesigned, more interactive UI (see note above)
- [ ] Live strip preview during the shoot
- [ ] Reorder photos by drag and drop
- [ ] Custom frame colours and stickers
- [ ] More strip layouts (2×2, single polaroid)
- [ ] PWA / offline install

## Deploying

Pushes to `main` are deployed to GitHub Pages by `.github/workflows/deploy.yml`. It's a static site, so any other host works too: `dist/` works; make sure unknown paths fall back to `index.html` for client-side routing (`public/_redirects` handles this on Netlify/Cloudflare Pages, `vercel.json` on Vercel).

## License

MIT
