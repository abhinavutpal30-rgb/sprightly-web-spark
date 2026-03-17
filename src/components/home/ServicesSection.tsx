import { Search, Home, Landmark, Paintbrush, Handshake, TrendingUp } from "lucide-react";

const services = [
  { icon: Search, title: "Find Your Property", desc: "Browse our wide range of plots, villas, and apartments tailored to your needs." },
  { icon: Home, title: "Luxury Properties", desc: "Experience luxury living with our curated collection of magnificent homes." },
  { icon: Handshake, title: "Resale Assistance", desc: "We specialize in resale properties, offering personalized and transparent service." },
  { icon: Landmark, title: "Loan Assistance", desc: "We guide you through obtaining a loan, making homeownership more accessible." },
  { icon: TrendingUp, title: "Investment Consulting", desc: "Customized guidance to recognize favorable investment opportunities." },
  { icon: Paintbrush, title: "Interior Design", desc: "Transform your property into a reflection of your style with our design solutions." },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-2">What We Do</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Our Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-background rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
