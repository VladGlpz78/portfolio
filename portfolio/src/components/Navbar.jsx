import { useEffect, useState } from "react";


const links = [
  { label: "Inicio", href: "#home" },
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Cerrar menú al hacer click en un link (mobile)
  const handleNavClick = (href) => (e) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  // Cerrar con ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="#home" onClick={handleNavClick("#home")}>
          <span className="nav__dot" />
          <span>Nicolas</span>
        </a>

        <nav className="nav__links">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={handleNavClick(l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a
            className="nav__cta"
            href="#contact"
            onClick={handleNavClick("#contact")}
          >
            Contactar
          </a>

          <button
            className="nav__burger"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="nav__mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={handleNavClick(l.href)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
