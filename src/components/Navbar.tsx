import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Properties", href: "/properties" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showTransparent = isHome && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showTransparent ? "bg-transparent" : "bg-background shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">G</span>
          </div>
          <span
            className={`font-display text-xl font-bold tracking-wide ${
              showTransparent ? "text-white" : "text-foreground"
            }`}
          >
            GharFinder
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm tracking-wide transition-colors duration-200 ${
                location.pathname === link.href
                  ? showTransparent
                    ? "text-white font-medium"
                    : "text-primary font-medium"
                  : showTransparent
                  ? "text-white/80 hover:text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919999999999"
            className={`flex items-center gap-2 text-sm ${
              showTransparent ? "text-white/90" : "text-muted-foreground"
            }`}
          >
            <Phone className="w-4 h-4" />
            +91 99999 99999
          </a>
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Book Appointment
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden ${showTransparent ? "text-white" : "text-foreground"}`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-6 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 border-b border-border/50 text-sm ${
                location.pathname === link.href
                  ? "text-primary font-medium"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 space-y-3">
            <a href="tel:+919999999999" className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" /> +91 99999 99999
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
