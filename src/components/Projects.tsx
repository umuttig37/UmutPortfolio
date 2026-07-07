import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section className="content-section section-shell" id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work, kept honest"
        text="A first pass focused on real projects and clear case-study notes. More polished project pages can come after the actual apps are ready to show."
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
