import SectionHeader from "./SectionHeader";

function Tag({ label, variant = "cyan" }) {
  if (variant === "purple") {
    return (
      <span className="font-mono text-[0.7rem] text-purple-300 bg-purple/15 border border-purple/30 px-2 py-0.5 tracking-wide">
        {label}
      </span>
    );
  }
  return (
    <span className="font-mono text-[0.7rem] text-cyan bg-cyan/10 border border-cyan/25 px-2 py-0.5 tracking-wide">
      {label}
    </span>
  );
}

function SkillCard({ card, index }) {
  const purpleStart = card.variant === "mixed" ? Math.floor(card.tags.length / 2) : Infinity;

  return (
    <div
      className="reveal card-corner relative bg-card border border-white/[0.06] p-6 overflow-hidden transition-all duration-300 hover:border-cyan/25 hover:-translate-y-1"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="text-2xl mb-3">{card.icon}</div>
      <div className="text-[0.85rem] font-semibold text-white tracking-widest uppercase mb-3">
        {card.title}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {card.tags.map((tag, i) => (
          <Tag
            key={tag}
            label={tag}
            variant={i >= purpleStart ? "purple" : "cyan"}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills({ skills }) {
  return (
    <section id="skills" className="relative z-10 max-w-5xl mx-auto px-16">
      <SectionHeader tag="What I work with" title="Technical Arsenal" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
        {skills.map((card, i) => (
          <SkillCard key={card.title} card={card} index={i} />
        ))}
      </div>
    </section>
  );
}
