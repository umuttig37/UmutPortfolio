const highlights = ['React + TypeScript', 'Business apps', 'Automation']

export function Hero() {
  return (
    <section className="hero-section section-shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Finnish junior software developer</p>
        <h1>
          Umut Efe Uygur
          <span>Software Developer</span>
        </h1>
        <p className="hero-intro">
          I build practical web applications with clean interfaces and clear workflows. I am especially interested in full stack projects where the software has to support real business work, not just look good on the surface.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button-primary" href="#projects">
            View Projects
          </a>
          <a className="button button-secondary" href="#contact">
            Contact Me
          </a>
        </div>
        <div className="hero-highlights" aria-label="Developer focus areas">
          {highlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="code-window">
          <div className="window-top">
            <span />
            <span />
            <span />
          </div>
          <div className="code-lines">
            <i className="line wide" />
            <i className="line medium" />
            <i className="line short" />
            <i className="line medium muted" />
            <i className="line wide" />
          </div>
          <div className="signal-grid">
            <b />
            <b />
            <b />
            <b />
          </div>
        </div>
      </div>
    </section>
  )
}
