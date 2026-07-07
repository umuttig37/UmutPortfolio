import { skillGroups } from '../data/skills'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section className="content-section section-shell" id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I use to turn ideas into working products"
        text="A compact mix of web, backend, data and creative tech experience."
      />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div>
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
