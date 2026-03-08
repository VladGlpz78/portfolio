

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>© {new Date().getFullYear()} Nico estuvo aqui</span>
        <span className="footer__sep">·</span>
        <span className="footer__tag">Hecho con React + Vite</span>
      </div>
    </footer>
  );
}
