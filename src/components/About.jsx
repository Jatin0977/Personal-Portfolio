import SectionHeader from "./SectionHeader";

export default function About({ personal }) {
  return (
    <section id="about" className="relative z-10 max-w-5xl mx-auto px-16">
      <SectionHeader tag="The human behind the screen" title="About Me" />

      <div className="reveal terminal-clip bg-[#080d1a] border border-white/[0.06] border-t-2 border-t-cyan font-mono text-[0.88rem] p-8 leading-[1.9]">

        {/* Terminal title bar */}
        <div className="flex items-center gap-1.5 mb-5 pb-3 border-b border-white/[0.06]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-auto text-[0.72rem] text-muted tracking-widest">
            {personal.name.toLowerCase().replace(" ", "")}@portfolio ~ bash
          </span>
        </div>

        {/* Command */}
        <div>
          <span className="text-cyan">
            {personal.name.toLowerCase().replace(" ", "")}@portfolio
          </span>
          <span className="text-muted">:</span>
          <span className="text-purple-400">~</span>
          <span className="text-muted"> $ </span>
          <span className="text-white">cat about.json</span>
        </div>

        <br />

        {/* JSON output */}
        <div><span className="text-muted">{`{`}</span></div>
        <Line k="name"             v={`"${personal.name}"`} />
        <Line k="university"       v={`"${personal.university}"`} />
        <Line k="year"             v={`"${personal.year}"`} />
        {personal.gpa && <Line k="gpa" v={personal.gpa} />}
        <Line k="interests"        v={`[${personal.interests.map((x) => `"${x}"`).join(", ")}]`} />
        <Line k="hobbies"          v={`[${personal.hobbies.map((x) => `"${x}"`).join(", ")}]`} />
        <Line k="currently_reading" v={`"${personal.currentlyReading}"`} />
        <Line k="open_to"          v={`"${personal.openTo}"`} last />
        <div><span className="text-muted">{`}`}</span></div>

        <br />

        {/* Empty prompt with cursor */}
        <div>
          <span className="text-cyan">
            {personal.name.toLowerCase().replace(" ", "")}@portfolio
          </span>
          <span className="text-muted">:</span>
          <span className="text-purple-400">~</span>
          <span className="text-muted"> $ </span>
          <span className="cursor-blink" />
        </div>
      </div>
    </section>
  );
}

function Line({ k, v, last = false }) {
  return (
    <div>
      &nbsp;&nbsp;
      <span className="text-purple-300">"{k}"</span>
      <span className="text-muted">: </span>
      <span className="text-cyan">{v}</span>
      {!last && <span className="text-muted">,</span>}
    </div>
  );
}
