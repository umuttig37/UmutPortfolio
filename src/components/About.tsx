const skills = [
  { label: 'HTML', icon: '5' },
  { label: 'CSS', icon: '3' },
  { label: 'JavaScript', icon: 'JS' },
  { label: 'TypeScript', icon: 'TS' },
  { label: 'React', icon: 'R' },
  { label: 'Node.js', icon: 'JS' },
  { label: 'Python', icon: 'PY' },
  { label: 'Java', icon: 'J' },
  { label: 'SQL', icon: 'DB' },
  { label: 'Git', icon: 'G' },
]

export function About() {
  return (
    <section className="about-section section-shell" id="about">
      <h2 className="section-title">About</h2>
      <div className="about-layout">
        <div className="about-copy">
          <svg className="profile-line" viewBox="0 0 260 260" role="img" aria-label="Minimal profile outline">
            <defs>
              <linearGradient id="profile-gradient" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#4ca4ef" />
                <stop offset="100%" stopColor="#ff4d67" />
              </linearGradient>
            </defs>
            <path d="M130 32c38 0 58 25 58 64s-20 66-58 66-58-27-58-66 20-64 58-64Z" />
            <path d="M74 154c-27 14-42 20-48 36-5 13-5 28-3 42 27 17 64 25 107 25s80-8 107-25c2-14 2-29-3-42-6-16-21-22-48-36" />
          </svg>
          <p>
            I&apos;m a junior software developer based in Finland. I studied ICT and have learned the most by working on projects with real constraints: forms people need to finish, data that has to stay organised and workflows that cannot be confusing.
          </p>
          <p>
            I enjoy working across the frontend and backend. Lately that has meant React and TypeScript interfaces, Python and Java backend work, automation and business-oriented tools. For me, good software starts with understanding the problem before choosing the technology.
          </p>
        </div>

        <div className="skill-card-grid" aria-label="Technical skills">
          {skills.map((skill) => (
            <article className="tech-card" key={skill.label}>
              <strong>{skill.icon}</strong>
              <span>{skill.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
