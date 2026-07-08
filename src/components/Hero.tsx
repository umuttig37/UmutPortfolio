export function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy section-shell">
        <h1>
          Hello, I&apos;m <span>Umut.</span>
        </h1>
        <p>I&apos;m a software developer.</p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button-primary" href="#projects">
            View my work <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
