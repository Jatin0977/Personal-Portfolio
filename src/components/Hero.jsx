import { useEffect, useState } from "react";

export default function Hero({ personal, contact }) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrases = personal.roles;
    const current = phrases[phraseIdx];
    let timeout;

    if (!deleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 90);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, 50);
      } else {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % phrases.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, personal.roles]);

  // Split name: everything before the last word is white, last word is cyan
  const nameParts = personal.name.split(" ");
  const firstName = nameParts.slice(0, -1).join(" ");
  const lastName = nameParts[nameParts.length - 1];

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col justify-center pt-20 max-w-5xl mx-auto px-16"
    >
      {/* Eyebrow */}
      <p className="flex items-center gap-3 font-mono text-xs tracking-[0.15em] text-cyan uppercase mb-5 before:content-[''] before:inline-block before:w-8 before:h-px before:bg-cyan">
        {personal.eyebrow}
      </p>

      {/* Name */}
      <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white mb-2">
        {firstName && <>{firstName}<br /></>}
        <span className="text-cyan">{lastName}.</span>
      </h1>

      {/* Typed role */}
      <p className="font-mono text-[clamp(1rem,2vw,1.4rem)] text-muted-2 font-light mb-8">
        {displayed}
        <span className="cursor-blink" />
      </p>

      {/* Bio */}
      <p className="max-w-[560px] text-[1.05rem] text-muted-2 leading-[1.8] mb-10">
        {personal.bio}
      </p>

      {/* CTA buttons */}
      <div className="flex gap-4 flex-wrap">
        <a
          href="#projects"
          className="btn-clip inline-flex items-center gap-2 px-8 py-[0.85rem] bg-cyan text-bg font-mono text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5"
        >
          View Projects →
        </a>
        <a
          href="#contact"
          className="btn-clip inline-flex items-center gap-2 px-8 py-[0.85rem] bg-transparent text-cyan font-mono text-xs font-medium tracking-widest uppercase border border-cyan/25 transition-all duration-200 hover:bg-cyan/10 hover:-translate-y-0.5"
        >
          Get in Touch
        </a>
      </div>

      {/* Stats */}
      <div className="flex gap-12 mt-16 pt-8 border-t border-white/[0.06]">
        {personal.stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-mono text-[2rem] font-semibold text-white leading-none">
              {stat.value}
              <span className="text-cyan">{stat.suffix}</span>
            </div>
            <div className="text-[0.75rem] text-muted uppercase tracking-widest mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
