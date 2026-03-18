import { Users, Eye, Handshake, Car } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const reasons = [
  { icon: Users, title: "Client-Focused Service", desc: "Your needs lead our priority list. We listen first, act second.", stat: "200+" },
  { icon: Eye, title: "Market Experience", desc: "Guiding you through local market insights with years of expertise.", stat: "10+" },
  { icon: Handshake, title: "Transparent Partnerships", desc: "Building trust, one conversation at a time. No hidden fees.", stat: "50+" },
  { icon: Car, title: "Free Site Visits", desc: "Visit your potential home for free — no strings attached.", stat: "500+" },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">Why Choose Us</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">The GharFinder Advantage</h2>
            <p className="text-muted-foreground text-[15px] mt-4 max-w-xl mx-auto">
              We combine deep market expertise with genuine care to deliver an unmatched experience.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 0.1}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/8 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 group-hover:shadow-sm transition-all duration-300">
                  <r.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <p className="font-display text-3xl text-primary font-bold mb-1">{r.stat}</p>
                <h3 className="font-display text-base text-foreground mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
