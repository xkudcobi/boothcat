import { FILTERS } from '../lib/filters.js'

export default function FilterPicker({ value, onChange }) {
  return (
    <div className="stack">
      <h3 style={{ margin: 0 }}>Filter</h3>
      <div className="filter-list" role="radiogroup" aria-label="Filter">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            role="radio"
            aria-checked={value === f.id}
            className={value === f.id ? 'on' : ''}
            onClick={() => onChange(f.id)}
          >
            <span className="swatch" style={{ filter: f.css }} />
            {f.name}
          </button>
        ))}
      </div>
    </div>
  )
}
