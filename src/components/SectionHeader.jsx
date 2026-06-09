export default function SectionHeader({ tag, title }) {
  return (
    <div className="mb-12 mt-24">
      <p className="flex items-center gap-3 font-mono text-xs tracking-[0.15em] text-cyan uppercase mb-3 before:content-[''] before:inline-block before:w-6 before:h-px before:bg-cyan">
        {tag}
      </p>
      <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white tracking-[-0.02em] leading-[1.15]">
        {title}
      </h2>
    </div>
  );
}
