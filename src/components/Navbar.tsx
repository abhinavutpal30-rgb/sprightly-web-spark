import { useState, useEffect } from "react";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Configuration", href: "#configuration" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background shadow-sm"
          : "bg-background/0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <span className={`font-display text-xl font-bold tracking-wider ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
            Assetz
          </span>
          <span className={`text-xs tracking-[0.2em] font-light ${scrolled ? 'text-muted-foreground' : 'text-primary-foreground/70'}`}>
            MIZUMI RESERVE
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors duration-200 ${
                scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`px-5 py-2 text-sm font-medium border transition-all ${
              scrolled
                ? "border-foreground text-foreground hover:bg-foreground hover:text-background"
                : "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
            }`}
          >
            Download Brochure
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-foreground/70 hover:text-foreground border-b border-border/50 text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block text-center px-5 py-2.5 bg-foreground text-background text-sm font-medium"
          >
            Download Brochure
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
