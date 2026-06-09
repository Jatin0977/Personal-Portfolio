const navLinks = [
  { label: "Skills",      href: "#skills" },
  { label: "Projects",    href: "#projects" },
  { label: "Experience",  href: "#experience" },
  { label: "Contact",     href: "#contact" },
];

export default function Navbar({ name }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-16 py-5 bg-bg/85 backdrop-blur-md border-b border-white/[0.06]">
      <a
        href="#hero"
        className="font-mono text-sm text-cyan tracking-widest no-underline"
      >
        &lt;<span className="text-muted-2">{initials}</span>/&gt;
      </a>

      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="nav-link relative font-mono text-xs tracking-widest uppercase text-muted-2 no-underline hover:text-cyan transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
