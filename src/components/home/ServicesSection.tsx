import { Search, Home, Landmark, Paintbrush, Handshake, TrendingUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">What We Do</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">Our Services</h2>
            <p className="text-muted-foreground text-[15px] mt-4 max-w-xl mx-auto">
              End-to-end real estate solutions designed to make your property journey seamless.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <div className="group bg-background rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-elevated transition-all duration-500 h-full">
                <div className="w-14 h-14 bg-primary/8 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/15 group-hover:shadow-sm transition-all duration-300">
                  <s.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2.5">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
