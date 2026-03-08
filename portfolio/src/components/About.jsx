import "../styles/section.css";
import "../styles/components/about.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section__inner">
        <div className="about__header">
          <h2 className="section__title">Sobre mí</h2>
          <p className="section__subtitle">
            Desarrollo soluciones web para negocios: sistemas de gestión, e-commerce y automatizaciones.
            Me enfoco en que sea rápido, claro y fácil de usar.
          </p>
        </div>

        <div className="about__grid">
          <div className="about__card">
            <h3>Lo que hago</h3>
            <ul>
              <li> Desarrollo de aplicaciones web y sistemas de gestión  </li>
              <li> Trabajo en proyectos individuales y grupales  </li>
              <li> Implementación de funcionalidades  (frontend + backend)</li>
              <li> Enfoque en código claro, mantenible y escalable</li>
            </ul>
          </div>

          <div className="about__card">
            <h3>Cómo trabajo</h3>
            <ul>
              <li>Entiendo el problema y propongo un plan simple</li>
              <li>Construyo por etapas y muestro avances rápido</li>
              <li>Me adapto al trabajo en equipo y a distintos roles  </li>
              <li>Valoro la comunicación y la responsabilidad en los proyectos</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
