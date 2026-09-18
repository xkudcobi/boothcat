import { FILTERS } from '../lib/filters.js'
import { useI18n } from '../lib/i18n.jsx'

export default function FilterPicker({ value, onChange }) {
  const { t } = useI18n()
  return (
    <div className="stack">
      <h3 style={{ margin: 0 }}>{t('filter.title')}</h3>
      <div className="filter-list" role="radiogroup" aria-label={t('filter.title')}>
        {FILTERS.map((f) => (
          <button
            key={f.id}
            role="radio"
            aria-checked={value === f.id}
            className={value === f.id ? 'on' : ''}
            onClick={() => onChange(f.id)}
          >
            <span className="swatch" style={{ filter: f.css }} />
            {t(`filter.names.${f.id}`)}
          </button>
        ))}
      </div>
    </div>
  )
}
