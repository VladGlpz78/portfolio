export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section__inner">

        <div className="contact__header">
          <h2 className="section__title">Contacto</h2>
          <p className="section__subtitle">
            Ante cualquier inquietud no lo dudes, escribime.
          </p>
        </div>

        <div className="contact__actions">
        <a
        className="btn btn--primary"
        href="https://wa.me/5493815883047"
        target="_blank"
        rel="noreferrer"
        >
        WhatsApp
        </a>
          <a className="btn btn--ghost" href="https://www.linkedin.com/in/vladimir-nicolas-gonzalez-5711a8303/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <a className="btn btn--ghost" href="https://github.com/VladGlpz78" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
