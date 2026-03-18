import { Search, Home, Landmark, Paintbrush, Handshake, TrendingUp, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="py-28 px-6 bg-secondary relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="h-[2px] w-12 bg-primary mx-auto mb-6" />
          <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">Our Services</h2>
          <p className="text-muted-foreground text-base mt-5 max-w-xl mx-auto">
            End-to-end real estate solutions designed to make your property journey seamless.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 cursor-pointer overflow-hidden"
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500">
                    <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
