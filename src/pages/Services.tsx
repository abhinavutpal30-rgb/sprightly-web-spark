import { Search, Home, Landmark, Paintbrush, Handshake, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Search, title: "Find Your Property", desc: "Choose from our wide range of properties — plots, custom builds, luxurious villas, and convenient apartments. We match your vision and budget to the perfect space.", features: ["Personalized property matching", "Wide range of options", "Budget-friendly solutions"] },
  { icon: Home, title: "Luxury Properties", desc: "Experience luxury living at its finest with our carefully chosen collection of magnificent homes designed to elevate your lifestyle.", features: ["Premium locations", "World-class amenities", "High-end finishes"] },
  { icon: Handshake, title: "Resale Assistance", desc: "We specialize in resale properties, valuing their history for a personalized experience. Get the best possible price with efficient marketing and skilled negotiation.", features: ["Market valuation", "Professional marketing", "Expert negotiation"] },
  { icon: Landmark, title: "Loan Assistance", desc: "We guide you through the process of obtaining a loan for your ideal property, making homeownership more accessible and stress-free.", features: ["Bank partnerships", "Best interest rates", "Quick approvals"] },
  { icon: TrendingUp, title: "Investment Consulting", desc: "Our experienced advisors offer customized guidance to recognize favorable investment opportunities and optimize profits.", features: ["Market analysis", "ROI projections", "Portfolio strategy"] },
  { icon: Paintbrush, title: "Interior Design", desc: "Personalize your living space with our assistance, transforming your property into a reflection of your style.", features: ["Custom designs", "Quality materials", "End-to-end execution"] },
];

const Services = () => {
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-2">Our Services</p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground">What We Offer</h1>
          <p className="text-muted-foreground text-sm mt-4 max-w-lg mx-auto">
            End-to-end real estate solutions from property search to interior design.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto space-y-12">
          {services.map((s, i) => (
            <div key={s.title} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <s.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h2 className="font-display text-2xl text-foreground mb-3">{s.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`aspect-[4/3] rounded-2xl bg-secondary ${i % 2 === 1 ? "md:order-1" : ""}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl text-background mb-4">Need Our Help?</h2>
          <p className="text-background/60 text-sm mb-8">Get in touch with us today and let's find your perfect property together.</p>
          <Link to="/contact" className="px-7 py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
