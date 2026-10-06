import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className="tech">Built with: {project.tech.join(', ')}</p>
      <div className="links">
        {project.demoUrl && (
          <a className="btn" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
        {project.repoUrl && (
          <a className="btn" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        )}
      </div>
    </article>
  )
}
