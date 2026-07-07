import { SectionHeading } from './SectionHeading'

const details = [
  'ICT and software development background',
  'Comfortable across frontend, backend and databases',
  'Interested in product thinking, automation and useful internal tools',
]

export function About() {
  return (
    <section className="content-section section-shell" id="about">
      <SectionHeading eyebrow="About" title="Building software with a practical edge" />
      <div className="about-grid">
        <p>
          I am a Finnish junior software developer with a background in ICT and software development. I like building applications where the interface, data model and business workflow all have to make sense together.
        </p>
        <p>
          My strongest interest is in full stack projects, automation and business-oriented web apps: tools that help people move work forward, reduce manual steps and make messy processes easier to understand.
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
