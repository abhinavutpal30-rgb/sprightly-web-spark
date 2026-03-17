import { Users, Eye, Handshake, Car } from "lucide-react";

const reasons = [
  { icon: Users, title: "Client-Focused Service", desc: "Your needs lead our priority list. We listen first, act second." },
  { icon: Eye, title: "Market Experience", desc: "Guiding you through local market insights with years of expertise." },
  { icon: Handshake, title: "Transparent Partnerships", desc: "Building trust, one conversation at a time. No hidden fees." },
  { icon: Car, title: "Free Site Visits", desc: "Visit your potential home for free — no strings attached." },
];

const WhyUsSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-2">Why Choose Us</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">The GharFinder Advantage</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="text-center p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <r.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
