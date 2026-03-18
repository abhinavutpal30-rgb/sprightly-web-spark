import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/70">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">G</span>
              </div>
              <span className="font-display text-xl font-bold text-background">GharFinder</span>
            </Link>
            <p className="text-sm leading-relaxed text-background/40 mb-6">
              Your trusted partner in finding the perfect property. We make real estate simple, transparent, and rewarding.
            </p>
            <div className="flex gap-3">
              {["Facebook", "Instagram", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-background/5 hover:bg-primary/20 flex items-center justify-center text-background/40 hover:text-primary text-xs font-bold transition-all duration-300"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-background font-semibold mb-5 text-sm tracking-wide">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Properties", href: "/properties" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  className="group flex items-center gap-1.5 text-sm text-background/40 hover:text-primary transition-colors"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-background font-semibold mb-5 text-sm tracking-wide">Services</h4>
            <div className="space-y-3">
              {["Find Property", "Sell Property", "Loan Assistance", "Interior Design", "Investment Consulting"].map((s) => (
                <p key={s} className="text-sm text-background/40">{s}</p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-background font-semibold mb-5 text-sm tracking-wide">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:+919999999999" className="flex items-center gap-3 text-sm text-background/40 hover:text-primary transition-colors">
                <div className="w-8 h-8 rounded-lg bg-background/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                +91 99999 99999
              </a>
              <a href="mailto:info@gharfinder.com" className="flex items-center gap-3 text-sm text-background/40 hover:text-primary transition-colors">
                <div className="w-8 h-8 rounded-lg bg-background/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                info@gharfinder.com
              </a>
              <div className="flex items-start gap-3 text-sm text-background/40">
                <div className="w-8 h-8 rounded-lg bg-background/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>123 Business Park, Whitefield, Bangalore - 560066</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/8 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-background/25 text-xs">
            © {new Date().getFullYear()} GharFinder. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((t) => (
              <a key={t} href="#" className="text-background/25 text-xs hover:text-background/50 transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
