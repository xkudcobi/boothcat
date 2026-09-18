// Small, original inline SVG illustrations. All drawn with basic shapes so
// they inherit `currentColor` and work in both themes.

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function CatLogo(props) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <rect x="6" y="18" width="52" height="36" rx="8" fill="currentColor" />
      <path d="M14 20 L8 8 L24 16 Z M50 20 L56 8 L40 16 Z" fill="currentColor" />
      <circle cx="32" cy="37" r="11" fill="var(--accent)" />
      <circle cx="32" cy="37" r="6" fill="currentColor" />
      <circle cx="35" cy="34" r="2" fill="#fff" />
      <circle cx="20" cy="30" r="2.5" fill="#fff" />
      <circle cx="44" cy="30" r="2.5" fill="#fff" />
    </svg>
  )
}

export function Camera(props) {
  return (
    <svg viewBox="0 0 96 96" aria-hidden="true" {...props}>
      <rect x="10" y="30" width="76" height="50" rx="8" {...stroke} />
      <path d="M34 30 l6 -10 h16 l6 10" {...stroke} />
      <circle cx="48" cy="55" r="15" {...stroke} />
      <circle cx="48" cy="55" r="7" fill="var(--accent)" />
      <circle cx="72" cy="42" r="3" fill="currentColor" />
    </svg>
  )
}

export function Upload(props) {
  return (
    <svg viewBox="0 0 96 96" aria-hidden="true" {...props}>
      <path d="M20 66 v12 h56 v-12" {...stroke} />
      <path d="M48 62 V22 M32 38 l16 -16 l16 16" {...stroke} />
      <path d="M26 20 c 4 -6 10 -6 14 0" {...stroke} strokeWidth="2" />
    </svg>
  )
}

export function Strip(props) {
  // a 4-frame photo strip with a little cat peeking from the top
  return (
    <svg viewBox="0 0 120 300" aria-hidden="true" {...props}>
      <rect x="10" y="20" width="100" height="270" rx="6" fill="var(--card)" stroke="currentColor" strokeWidth="3" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="20" y={32 + i * 63} width="80" height="54" rx="3" fill="var(--accent)" opacity={0.9 - i * 0.15} />
      ))}
      <g transform="translate(60 18)">
        <ellipse cx="0" cy="0" rx="18" ry="14" fill="var(--card)" stroke="currentColor" strokeWidth="3" />
        <path d="M-14 -7 l-4 -14 l12 8 M14 -7 l4 -14 l-12 8" {...stroke} />
        <circle cx="-6" cy="-2" r="2" fill="currentColor" />
        <circle cx="6" cy="-2" r="2" fill="currentColor" />
        <path d="M-2 4 h4 l-2 3z" fill="currentColor" />
      </g>
    </svg>
  )
}

export function Sparkle(props) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
      <path d="M20 2 C22 14 26 18 38 20 C26 22 22 26 20 38 C18 26 14 22 2 20 C14 18 18 14 20 2 Z" fill="currentColor" />
    </svg>
  )
}

export function Heart(props) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
      <path d="M20 35 C6 24 2 18 2 12 A8 8 0 0 1 20 8 A8 8 0 0 1 38 12 C38 18 34 24 20 35 Z" fill="currentColor" />
    </svg>
  )
}

export function Lock(props) {
  return (
    <svg viewBox="0 0 96 96" aria-hidden="true" {...props}>
      <rect x="22" y="42" width="52" height="40" rx="6" {...stroke} />
      <path d="M32 42 v-10 a16 16 0 0 1 32 0 v10" {...stroke} />
      <circle cx="48" cy="60" r="5" fill="currentColor" />
      <path d="M48 64 v8" {...stroke} />
    </svg>
  )
}

export function Bolt(props) {
  return (
    <svg viewBox="0 0 96 96" aria-hidden="true" {...props}>
      <path d="M54 12 L28 54 h20 l-6 30 l30 -46 h-20 z" {...stroke} fill="var(--accent)" />
    </svg>
  )
}

export function Palette(props) {
  return (
    <svg viewBox="0 0 96 96" aria-hidden="true" {...props}>
      <path d="M48 14 c-22 0 -34 16 -34 32 c0 18 14 30 30 30 c6 0 6 -6 4 -10 c-2 -6 2 -10 8 -10 h6 c10 0 18 -6 18 -16 C80 26 68 14 48 14 z" {...stroke} />
      <circle cx="34" cy="38" r="5" fill="var(--accent)" />
      <circle cx="50" cy="30" r="5" fill="var(--accent-2)" />
      <circle cx="64" cy="40" r="5" fill="currentColor" />
    </svg>
  )
}

export function Printer(props) {
  return (
    <svg viewBox="0 0 96 96" aria-hidden="true" {...props}>
      <rect x="14" y="38" width="68" height="32" rx="6" {...stroke} />
      <path d="M28 38 v-20 h40 v20 M28 60 h40 v22 h-40 z" {...stroke} />
      <circle cx="70" cy="48" r="3" fill="var(--accent)" />
    </svg>
  )
}
