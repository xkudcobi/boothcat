// Tiny persistence layer. Photos are small JPEG data URLs, so localStorage is
// plenty; everything stays on the visitor's device.
const KEY = 'boothcat:'

function read(name, fallback) {
  try {
    const raw = localStorage.getItem(KEY + name)
    return raw == null ? fallback : JSON.parse(raw)
  } catch {
    return fallback
  }
}

function write(name, value) {
  try {
    localStorage.setItem(KEY + name, JSON.stringify(value))
  } catch {
    /* quota exceeded or storage blocked; the session simply won't persist */
  }
}

export const store = {
  getPhotos: () => read('photos', []),
  setPhotos: (photos) => write('photos', photos),
  getFilter: () => read('filter', 'none'),
  setFilter: (id) => write('filter', id),
  getFrame: () => read('frame', 'classic'),
  setFrame: (id) => write('frame', id),
  getStrip: () => read('strip', null),
  setStrip: (dataUrl) => write('strip', dataUrl),
  clearSession() {
    for (const k of ['photos', 'strip']) {
      try { localStorage.removeItem(KEY + k) } catch {}
    }
  },
}
