import { Search, Home, Landmark, Paintbrush, Handshake, TrendingUp, ArrowRight, ArrowUpRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import interiorImg from "@/assets/interior.jpg";
import citySkyline from "@/assets/city-skyline.jpg";

const services = [
  { icon: Search, title: "Find Your Property", desc: "Choose from our wide range of properties — plots, custom builds, luxurious villas, and convenient apartments.", features: ["Personalized matching", "Wide range of options", "Budget-friendly"], img: property1 },
  { icon: Home, title: "Luxury Properties", desc: "Experience luxury living at its finest with our carefully chosen collection of magnificent homes.", features: ["Premium locations", "World-class amenities", "High-end finishes"], img: property2 },
  { icon: Handshake, title: "Resale Assistance", desc: "We specialize in resale properties, offering personalized experience with efficient marketing and negotiation.", features: ["Market valuation", "Professional marketing", "Expert negotiation"], img: property3 },
  { icon: Landmark, title: "Loan Assistance", desc: "We guide you through obtaining a loan for your ideal property, making homeownership more accessible.", features: ["Bank partnerships", "Best interest rates", "Quick approvals"], img: property1 },
  { icon: TrendingUp, title: "Investment Consulting", desc: "Our experienced advisors offer customized guidance to recognize favorable investment opportunities.", features: ["Market analysis", "ROI projections", "Portfolio strategy"], img: citySkyline },
  { icon: Paintbrush, title: "Interior Design", desc: "Personalize your living space with our assistance, transforming your property into a reflection of your style.", features: ["Custom designs", "Quality materials", "End-to-end execution"], img: interiorImg },
];

const process = [
  { step: "01", title: "Consultation", desc: "Share your requirements and budget with our expert advisors." },
  { step: "02", title: "Curated Options", desc: "Receive handpicked properties matching your criteria." },
  { step: "03", title: "Site Visits", desc: "Free accompanied visits to shortlisted properties." },
  { step: "04", title: "Close the Deal", desc: "Complete documentation and loan assistance handled by us." },
];

const Services = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-foreground" />
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${citySkyline})` }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 to-foreground/90" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div initial={{ width: 0 }} animate={{ width: 60 }} transition={{ duration: 0.8, delay: 0.3 }} className="h-[2px] bg-primary mx-auto mb-8" />
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-5">What We Do</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="font-display text-4xl md:text-5xl lg:text-7xl text-background leading-tight">
            End-to-End<br /><span className="text-primary italic">Real Estate</span> Solutions
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="text-background/40 text-base mt-6 max-w-lg mx-auto">
            From property search to interior design, we handle everything so you can focus on what matters.
          </motion.p>
        </div>
      </section>

      {/* Services Grid - Alternating */}
      <section className="py-28 px-6 bg-background">
        <div className="max-w-7xl mx-auto space-y-28">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                    <s.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="font-display text-6xl font-bold text-border/60">0{i + 1}</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5 leading-tight">{s.title}</h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-8">{s.desc}</p>
                <ul className="space-y-3 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-foreground font-medium">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={2} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                >
                  <span className="border-b-2 border-foreground group-hover:border-primary transition-colors pb-0.5">Learn More</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
              <motion.div
                className={`relative group ${i % 2 === 1 ? "lg:order-1" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1000ms]" />
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-primary/10 rounded-3xl -z-10" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-28 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <div className="h-[2px] w-12 bg-primary mx-auto mb-6" />
            <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">How It Works</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Our Process</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className="group relative bg-background rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-500"
              >
                <span className="font-display text-5xl font-bold text-primary/15 group-hover:text-primary/30 transition-colors duration-500">{p.step}</span>
                <h3 className="font-display text-xl text-foreground mt-4 mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                {i < 3 && <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-border" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${property2})` }} />
        <div className="absolute inset-0 bg-foreground/85 backdrop-blur-sm" />
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative max-w-3xl mx-auto text-center">
          <div className="h-[2px] w-16 bg-primary mx-auto mb-8" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-background leading-tight mb-6">
            Need Our <span className="text-primary italic">Help?</span>
          </h2>
          <p className="text-background/40 text-base max-w-xl mx-auto mb-12">Get in touch with us today and let's find your perfect property together.</p>
          <Link to="/contact" className="group inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:shadow-[0_0_50px_hsl(var(--primary)/0.4)] transition-all duration-500">
            Book a Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default Services;
