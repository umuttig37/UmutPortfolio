import type { Project } from '../data/projects'

const statusLabels: Record<Project['status'], string> = {
  live: 'In progress',
  'case-study': 'Case study',
  planned: 'Coming soon',
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card project-${project.status} reveal-target`}>
      <div className="project-marker">
        <strong aria-hidden="true">{project.title.slice(0, 2)}</strong>
        <span>{statusLabels[project.status]}</span>
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span>{project.type}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        {project.role ? <p className="project-role">{project.role}</p> : null}
        <div className="project-focus" aria-label={`${project.title} focus areas`}>
          {project.focus.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="tech-list" aria-label={`${project.title} technologies`}>
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        {project.notes ? <p className="project-note">{project.notes}</p> : null}
        {project.links?.length ? (
          <div className="project-links">
            {project.links.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  )
}
