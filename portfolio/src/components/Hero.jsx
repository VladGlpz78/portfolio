

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <div className="hero__text">
          <p className="hero__pill">Full Stack Developer · Software & Automatización</p>

          <h1 className="hero__title">
            Hola, soy <span>Nicolas</span>.
            <br />
            Desarrollador web
          </h1>

          <p className="hero__subtitle">
           Trabajo en proyectos individuales y en equipo, con experiencia en desarrollos grupales universitarios y aplicaciones reales para negocios.
          </p>

          <div className="hero__buttons">
            <a className="btn btn--primary" href="#projects">
              Ver proyectos
            </a>
            <a className="btn btn--ghost" href="#contact">
              Contactarme
            </a>
          </div>

          <div className="hero__mini">
            <a href="https://github.com/VladGlpz78" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <span>·</span>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <span>·</span>
            <a
             href="https://mail.google.com/mail/?view=cm&fs=1&to=nicgonzalezg5@gmail.com&su=Consulta%20desde%20tu%20portfolio"
             target="_blank"
             rel="noreferrer"
               >
            Email
            </a>
          </div>
        </div>

        <div className="hero__card">
          <div className="hero__cardTop">
            <div className="dot red" />
            <div className="dot yellow" />
            <div className="dot green" />
          </div>

          <div className="hero__cardBody">
            <p className="codeLine">
              <span className="k">const</span> foco ={" "}
              <span className="s">"productos reales"</span>;
            </p>
            <p className="codeLine">
              <span className="k">const</span> stack = [
              <span className="s">"React"</span>, <span className="s">"Node"</span>,{" "}
              <span className="s">"Supabase"</span>];
            </p>
            <p className="codeLine">
              <span className="k">const</span> objetivo ={" "}
              <span className="s">"primer trabajo IT"</span>;
            </p>
            <p className="codeLine muted">// listo para construir 💪</p>
          </div>
        </div>
      </div>
    </section>
  );
}
