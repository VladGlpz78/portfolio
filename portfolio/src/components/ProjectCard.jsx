export default function ProjectCard({ project }) {
  return (
    <article className="projects__card card">
      {project.tag && <span className="projects__tag">{project.tag}</span>}

      <h3>{project.title}</h3>
      <p className="projects__desc">{project.description}</p>

      {project.stack?.length ? (
        <p className="projects__stack">{project.stack.join(" · ")}</p>
      ) : null}

      <div className="projects__actions">
        {project.demo && project.demo !== "#" && (
          <a className="btn btn--primary" href={project.demo} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}

        {project.github && project.github !== "#" && (
          <a className="btn btn--ghost" href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
