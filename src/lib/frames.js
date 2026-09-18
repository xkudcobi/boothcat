// Frame definitions. `decor` names a procedural decoration drawn on the canvas
// by strip.js, so no image assets are needed.
export const FRAMES = [
  { id: 'classic', name: 'Classic white', bg: '#fdfcf8', ink: '#1d1a17', decor: null },
  { id: 'night', name: 'Midnight', bg: '#161513', ink: '#f6f1e7', decor: null },
  { id: 'butter', name: 'Butter', bg: '#ffe08a', ink: '#3b2f14', decor: null },
  { id: 'mint', name: 'Mint', bg: '#cfeee0', ink: '#144033', decor: null },
  { id: 'blush', name: 'Blush', bg: '#ffd6e0', ink: '#5a1f33', decor: null },
  { id: 'hearts', name: 'Hearts', bg: '#fff1f4', ink: '#c2325a', decor: 'hearts' },
  { id: 'stars', name: 'Stars', bg: '#1b1f3a', ink: '#ffe28a', decor: 'stars' },
  { id: 'doodle', name: 'Doodle', bg: '#fdfcf8', ink: '#1d1a17', decor: 'doodle' },
  { id: 'cat', name: 'Boothcat', bg: '#fff7e6', ink: '#1d1a17', decor: 'cat' },
  { id: 'film', name: 'Film', bg: '#111111', ink: '#f2f2f2', decor: 'film' },
]

export const getFrame = (id) => FRAMES.find((f) => f.id === id) ?? FRAMES[0]
