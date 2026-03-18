import { Search, Home, Landmark, Paintbrush, Handshake, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  { icon: Search, title: "Find Your Property", desc: "Choose from our wide range of properties — plots, custom builds, luxurious villas, and convenient apartments. We match your vision and budget to the perfect space.", features: ["Personalized property matching", "Wide range of options", "Budget-friendly solutions"], img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format" },
  { icon: Home, title: "Luxury Properties", desc: "Experience luxury living at its finest with our carefully chosen collection of magnificent homes designed to elevate your lifestyle.", features: ["Premium locations", "World-class amenities", "High-end finishes"], img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&auto=format" },
  { icon: Handshake, title: "Resale Assistance", desc: "We specialize in resale properties, valuing their history for a personalized experience. Get the best possible price with efficient marketing and skilled negotiation.", features: ["Market valuation", "Professional marketing", "Expert negotiation"], img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&auto=format" },
  { icon: Landmark, title: "Loan Assistance", desc: "We guide you through the process of obtaining a loan for your ideal property, making homeownership more accessible and stress-free.", features: ["Bank partnerships", "Best interest rates", "Quick approvals"], img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format" },
  { icon: TrendingUp, title: "Investment Consulting", desc: "Our experienced advisors offer customized guidance to recognize favorable investment opportunities and optimize profits.", features: ["Market analysis", "ROI projections", "Portfolio strategy"], img: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&auto=format" },
  { icon: Paintbrush, title: "Interior Design", desc: "Personalize your living space with our assistance, transforming your property into a reflection of your style.", features: ["Custom designs", "Quality materials", "End-to-end execution"], img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&auto=format" },
];

const Services = () => {
  return (
    <>
      <section className="pt-36 pb-20 px-6 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-7xl mx-auto text-center relative">
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">Our Services</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">What We Offer</h1>
          <p className="text-muted-foreground text-[15px] mt-4 max-w-lg mx-auto">
            End-to-end real estate solutions from property search to interior design.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto space-y-20">
          {services.map((s, i) => (
            <ScrollReveal key={s.title}>
              <div className={`grid md:grid-cols-2 gap-14 items-center`}>
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="w-14 h-14 bg-primary/8 rounded-2xl flex items-center justify-center mb-6">
                    <s.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">{s.title}</h2>
                  <p className="text-muted-foreground text-[15px] leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-3">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-foreground font-medium">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`aspect-[4/3] rounded-2xl overflow-hidden bg-secondary shadow-elevated ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-foreground text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <ScrollReveal>
          <div className="relative max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-background mb-5">Need Our Help?</h2>
            <p className="text-background/50 text-[15px] mb-10">Get in touch with us today and let's find your perfect property together.</p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm font-medium rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-premium"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};

export default Services;
