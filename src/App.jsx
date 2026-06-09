import { useEffect } from "react";
import { personal, contact, skills, projects } from "./data/portfolio";

import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import Skills     from "./components/Skills";
import Projects   from "./components/Projects";
import About      from "./components/About";
//import Experience from "./components/Experience";
import Contact    from "./components/Contact";

export default function App() {
  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid-texture relative">
      {/* Ambient glow orbs */}
      <div
        className="orb w-[600px] h-[600px] top-[-200px] right-[-150px]"
        style={{ background: "rgba(0,245,212,0.06)" }}
      />
      <div
        className="orb w-[500px] h-[500px] bottom-[10vh] left-[-200px]"
        style={{ background: "rgba(124,58,237,0.08)" }}
      />

      <Navbar name={personal.name} />

      <main>
        <Hero       personal={personal} contact={contact} />
        <Skills     skills={skills} />
        <Projects   projects={projects} />
        <About      personal={personal} />
        <Contact    contact={contact} />
      </main>

      <footer className="relative z-10 text-center px-16 py-12 mt-24 border-t border-white/[0.06] font-mono text-xs text-muted tracking-widest">
        <span className="text-cyan">{personal.name}</span> · Built with React + Tailwind · 2026
      </footer>
    </div>
  );
}
