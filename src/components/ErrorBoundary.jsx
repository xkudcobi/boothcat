import { Component } from 'react'

// Last line of defence: instead of an empty page, show what went wrong.
export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error) {
    console.error('[boothcat]', error)
  }

  render() {
    if (!this.state.error) return this.props.children
    const err = this.state.error
    const stack = String(err?.stack || '').split('\n').slice(0, 8).join('\n')
    return (
      <section className="container page center">
        <h1>Something broke</h1>
        <p className="muted">{String(err?.message || err)}</p>
        <pre style={{ textAlign: 'left', fontSize: 12, overflow: 'auto' }}>{stack}</pre>
        <button className="btn" onClick={() => window.location.reload()}>Reload</button>
      </section>
    )
  }
}
