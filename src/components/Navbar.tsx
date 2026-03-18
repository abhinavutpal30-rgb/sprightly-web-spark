import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        showTransparent
          ? "bg-transparent py-6"
          : "bg-background/90 backdrop-blur-2xl shadow-[0_1px_0_hsl(var(--border)/0.5)] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
            showTransparent 
              ? "bg-white/10 backdrop-blur-sm border border-white/20" 
              : "bg-primary shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
          }`}>
            <span className={`font-display font-bold text-base ${showTransparent ? "text-white" : "text-primary-foreground"}`}>I</span>
          </div>
          <span
            className={`font-display text-xl font-bold tracking-wide transition-colors duration-500 ${
              showTransparent ? "text-white" : "text-foreground"
            }`}
          >
            IRVANA
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-4 py-2 text-[13px] tracking-wide font-medium rounded-lg transition-all duration-300 ${
                  isActive
                    ? showTransparent
                      ? "text-white bg-white/10"
                      : "text-primary bg-primary/8"
                    : showTransparent
                    ? "text-white/70 hover:text-white hover:bg-white/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919999999999"
            className={`flex items-center gap-2 text-[13px] font-medium transition-colors ${
              showTransparent ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            +91 99999 99999
          </a>
          <Link
            to="/contact"
            className="group flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground text-[13px] font-semibold rounded-full hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-500"
          >
            Book Appointment
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            showTransparent ? "text-white hover:bg-white/10" : "text-foreground hover:bg-secondary"
          }`}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border/50 overflow-hidden"
          >
            <div className="px-6 pb-6 pt-3">
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
                  className="block text-center px-5 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-full"
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
