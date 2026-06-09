import SectionHeader from "./SectionHeader";

function ProjectCard({ project, index }) {
  return (
    <div
      className="reveal card-corner-lg relative bg-card border border-white/[0.06] p-8 overflow-hidden flex flex-col transition-all duration-300 hover:border-cyan/25 hover:-translate-y-1.5"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {/* subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cyan/[0.03] pointer-events-none" />

      <div className="font-mono text-[0.7rem] text-cyan tracking-[0.15em] mb-4 opacity-60">
        // {project.num}
      </div>

      <h3 className="text-[1.2rem] font-semibold text-white leading-snug mb-3">
        {project.title}
      </h3>

      <p className="text-[0.9rem] text-muted-2 leading-[1.7] mb-6 flex-1">
        {project.desc}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[0.7rem] text-cyan bg-cyan/10 border border-cyan/25 px-2 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.url}
          className="font-mono text-[0.72rem] text-cyan no-underline tracking-widest uppercase flex items-center gap-1.5 transition-all duration-200 hover:gap-3"
        >
          View →
        </a>
      </div>
    </div>
  );
}

export default function Projects({ projects }) {
  return (
    <section id="projects" className="relative z-10 max-w-5xl mx-auto px-16">
      <SectionHeader tag="What I've shipped" title="Featured Projects" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
