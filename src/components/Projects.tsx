import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section className="content-section section-shell" id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Projects"
        text="A small collection of real work and active builds. I keep private or unfinished projects as case studies instead of pretending everything has a public live demo."
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
