import SectionHeader from "./SectionHeader";

function ContactItem({ icon, label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="reveal contact-clip relative bg-card border border-white/[0.06] p-5 flex items-center gap-4 no-underline transition-all duration-200 hover:border-cyan/25 hover:translate-x-1"
    >
      <span className="text-lg text-cyan font-mono">{icon}</span>
      <div>
        <div className="font-mono text-[0.72rem] text-muted uppercase tracking-widest mb-0.5">
          {label}
        </div>
        <div className="text-[0.88rem] text-slate-200">{value}</div>
      </div>
    </a>
  );
}

export default function Contact({ contact }) {
  const items = [
    { icon: "✉",    label: "Email",    value: contact.email,    href: `mailto:${contact.email}` },
    { icon: "in",   label: "LinkedIn", value: contact.linkedin, href: contact.linkedinUrl },
    { icon: "</>",  label: "GitHub",   value: contact.github,   href: contact.githubUrl },
    { icon: "↓",    label: "Resume",   value: "Download PDF",   href: contact.resumeUrl },
  ];

  return (
    <section id="contact" className="relative z-10 max-w-5xl mx-auto px-16">
      <SectionHeader tag="Let's build something" title="Get in Touch" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        {items.map((item) => (
          <ContactItem key={item.label} {...item} />
        ))}
      </div>
    </section>
  );
}
