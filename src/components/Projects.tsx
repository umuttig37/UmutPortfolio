import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section className="content-section section-shell" id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Projects"
        text="Some of the work I have been involved in so far. A few projects are private or still in development, so I explain my part in them instead of adding empty demo links."
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
