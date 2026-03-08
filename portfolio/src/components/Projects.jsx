import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section__inner">
        <div className="projects__header">
          <h2 className="section__title">Proyectos</h2>
          <p className="section__subtitle">
            Algunos proyectos en los que colaboré y vengo trabajando.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
