import { useState, useEffect } from "react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Agenda", href: "#agenda" },
  { label: "Repertório", href: "#repertorio" },
  { label: "Contato", href: "#contato" },
];

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "header-blur" : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between py-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-display text-sm md:text-base tracking-[0.2em] text-foreground"
        >
          CAMADA LIMITE
        </a>
        <nav className="flex gap-4 md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="font-body text-xs md:text-sm tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
