// Filters are plain CSS filter strings so the same value drives the live
// camera preview (via style) and the final canvas render (via ctx.filter).
export const FILTERS = [
  { id: 'none', name: 'Natural', css: 'none' },
  { id: 'mono', name: 'Mono', css: 'grayscale(1) contrast(1.1)' },
  { id: 'warm', name: 'Warm film', css: 'sepia(0.35) saturate(1.3) contrast(1.05)' },
  { id: 'cool', name: 'Cool film', css: 'saturate(0.85) hue-rotate(-10deg) brightness(1.05) contrast(1.05)' },
  { id: 'fade', name: 'Faded', css: 'contrast(0.85) brightness(1.1) saturate(0.8)' },
  { id: 'pop', name: 'Pop', css: 'saturate(1.6) contrast(1.15)' },
  { id: 'noir', name: 'Noir', css: 'grayscale(1) contrast(1.4) brightness(0.9)' },
  { id: 'vintage', name: 'Vintage', css: 'sepia(0.6) contrast(0.9) brightness(1.05)' },
]

export const getFilter = (id) => FILTERS.find((f) => f.id === id) ?? FILTERS[0]
