import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const showTransparent = isHome && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showTransparent
          ? "bg-transparent"
          : "bg-background/80 backdrop-blur-xl shadow-soft border-b border-border/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-premium transition-shadow duration-300">
            <span className="text-primary-foreground font-bold text-sm">G</span>
          </div>
          <span
            className={`font-display text-xl font-bold tracking-wide transition-colors duration-300 ${
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
              className={`relative text-[13px] tracking-wide font-medium transition-colors duration-200 ${
                location.pathname === link.href
                  ? showTransparent
                    ? "text-white"
                    : "text-primary"
                  : showTransparent
                  ? "text-white/75 hover:text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
              {location.pathname === link.href && (
                <motion.span
                  layoutId="navbar-indicator"
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                    showTransparent ? "bg-white" : "bg-primary"
                  }`}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+919999999999"
            className={`flex items-center gap-2 text-[13px] font-medium transition-colors ${
              showTransparent ? "text-white/85" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            +91 99999 99999
          </a>
          <Link
            to="/contact"
            className="group flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-[13px] font-medium rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-premium"
          >
            Book Appointment
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-1 transition-colors ${showTransparent ? "text-white" : "text-foreground"}`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className={`block py-3.5 border-b border-border/30 text-sm font-medium ${
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-5 space-y-3">
                <a href="tel:+919999999999" className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" /> +91 99999 99999
                </a>
                <Link
                  to="/contact"
                  className="block text-center px-5 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-xl"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
