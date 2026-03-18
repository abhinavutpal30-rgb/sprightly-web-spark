import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/70 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative">
        {/* Top row */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-base">I</span>
              </div>
              <span className="font-display text-2xl font-bold text-background">IRVANA</span>
            </Link>
            <p className="text-sm leading-relaxed text-background/35 mb-8 max-w-xs">
              Your trusted partner in finding the perfect property. We make real estate simple, transparent, and rewarding.
            </p>
            <div className="flex gap-3">
              {["Fb", "In", "Li", "Yt"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 rounded-full border border-background/10 hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center text-background/30 hover:text-primary text-xs font-bold transition-all duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-background/80 font-bold text-xs tracking-[0.2em] uppercase mb-6">Company</h4>
            <div className="space-y-3.5">
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
                  className="group flex items-center gap-1 text-sm text-background/35 hover:text-primary transition-colors duration-300"
                >
                  {l.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-background/80 font-bold text-xs tracking-[0.2em] uppercase mb-6">Services</h4>
            <div className="space-y-3.5">
              {["Find Property", "Sell Property", "Loan Assistance", "Interior Design", "Investment Consulting"].map((s) => (
                <p key={s} className="text-sm text-background/35">{s}</p>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-background/80 font-bold text-xs tracking-[0.2em] uppercase mb-6">Get in Touch</h4>
            <div className="space-y-5">
              <a href="tel:+919999999999" className="flex items-center gap-3 text-sm text-background/35 hover:text-primary transition-colors group">
                <div className="w-9 h-9 rounded-full border border-background/10 group-hover:border-primary/30 flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                +91 99999 99999
              </a>
              <a href="mailto:info@gharfinder.com" className="flex items-center gap-3 text-sm text-background/35 hover:text-primary transition-colors group">
                <div className="w-9 h-9 rounded-full border border-background/10 group-hover:border-primary/30 flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                info@gharfinder.com
              </a>
              <div className="flex items-start gap-3 text-sm text-background/35">
                <div className="w-9 h-9 rounded-full border border-background/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>123 Business Park, Whitefield, Bangalore - 560066</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/20 text-xs">
            © {new Date().getFullYear()} GharFinder. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((t) => (
              <a key={t} href="#" className="text-background/20 text-xs hover:text-background/40 transition-colors">
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
