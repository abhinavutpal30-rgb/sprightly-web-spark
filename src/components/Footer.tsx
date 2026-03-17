import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/70">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">G</span>
              </div>
              <span className="font-display text-xl font-bold text-background">GharFinder</span>
            </div>
            <p className="text-sm leading-relaxed text-background/50">
              Your trusted partner in finding the perfect property. We make real estate simple, transparent, and rewarding.
            </p>
          </div>

          <div>
            <h4 className="font-display text-background font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About Us", "Services", "Properties", "Blog", "Contact"].map((l) => (
                <Link
                  key={l}
                  to={`/${l.toLowerCase().replace(" ", "-").replace("about-us", "about")}`}
                  className="block text-sm text-background/50 hover:text-primary transition-colors"
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-background font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              {["Find Property", "Sell Property", "Loan Assistance", "Interior Design", "Investment Consulting"].map((s) => (
                <p key={s} className="text-sm text-background/50">{s}</p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-background font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+919999999999" className="flex items-center gap-2 text-sm text-background/50 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" /> +91 99999 99999
              </a>
              <a href="mailto:info@gharfinder.com" className="flex items-center gap-2 text-sm text-background/50 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" /> info@gharfinder.com
              </a>
              <div className="flex items-start gap-2 text-sm text-background/50">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>123 Business Park, Whitefield, Bangalore - 560066</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 py-5 px-6">
        <p className="text-center text-background/30 text-xs">
          © {new Date().getFullYear()} GharFinder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
