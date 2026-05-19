import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/vehicules", label: "Véhicules" },
  { to: "/services", label: "Services" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-18 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="h-10 w-10 rounded-lg bg-gradient-petrol flex items-center justify-center shadow-petrol">
            <span className="text-[11px] font-bold tracking-wider text-primary-foreground">MRT</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-display font-semibold text-foreground tracking-tight">MRT Auto Premium</div>
            <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Bouguenais — Nantes</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-smooth"
              activeProps={{ className: "text-petrol bg-accent" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+33624275116"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-foreground hover:text-petrol transition-colors"
          >
            <Phone size={16} /> 06 24 27 51 16
          </a>
          <a
            href="https://wa.me/33624275116"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-success hover:opacity-90 text-white text-sm font-medium px-5 py-2.5 rounded-lg shadow-soft transition-smooth"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground rounded-md hover:bg-secondary"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-5 py-5 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-md text-base font-medium text-muted-foreground hover:bg-secondary"
                activeProps={{ className: "text-petrol bg-accent" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+33624275116"
              className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg border border-border text-foreground font-medium"
            >
              <Phone size={16} /> 06 24 27 51 16
            </a>
            <a
              href="https://wa.me/33624275116"
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg bg-success text-white font-medium"
            >
              <MessageCircle size={18} /> Contacter sur WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
