// Global
import "./styles/globals.css";
import "./styles/section.css";

// Componentes
import "./styles/components/navbar.css";
import "./styles/components/hero.css";
import "./styles/components/about.css";
import "./styles/components/projects.css";
import "./styles/components/skills.css";
import "./styles/components/contact.css";
import "./styles/components/footer.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <div className="sectionDivider" />
        <Projects />
        <div className="sectionDivider" />
        <Skills />
        <div className="sectionDivider" />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}
