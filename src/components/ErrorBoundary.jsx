import { Component } from 'react'

// Last line of defence: instead of an empty page, show what went wrong.
export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (!this.state.error) return this.props.children
    return (
      <section className="container page center">
        <h1>Something broke</h1>
        <p className="muted">{String(this.state.error?.message || this.state.error)}</p>
        <button className="btn" onClick={() => window.location.reload()}>Reload</button>
      </section>
    )
  }
}
