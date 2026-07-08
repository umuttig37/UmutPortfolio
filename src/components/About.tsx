import { SectionHeading } from './SectionHeading'

const details = [
  'ICT and software development background',
  'Frontend, backend and database experience',
  'Learning by building real product workflows',
]

export function About() {
  return (
    <section className="content-section section-shell" id="about">
      <SectionHeading eyebrow="About" title="Building software with a practical edge" />
      <div className="about-grid">
        <p>
          I am a Finnish junior software developer with a background in ICT and software development. I like projects where the interface, data model and business workflow all have to make sense together.
        </p>
        <p>
          My strongest interest is in full stack development, automation and business-oriented web apps. I enjoy turning rough ideas into tools that are easier to use, maintain and explain.
        </p>
        <ul>
          {details.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
