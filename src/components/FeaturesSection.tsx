import { motion } from "framer-motion";
import { Building2, TreePine, Waves, Home, Maximize, Sun } from "lucide-react";

const features = [
  { icon: Building2, title: "63,000+ Sqft Clubhouse", desc: "World-class amenities under one roof" },
  { icon: TreePine, title: "~77% Open Space", desc: "Lush green landscapes & gardens" },
  { icon: Waves, title: "Temperature Controlled Pools", desc: "Year-round swimming comfort" },
  { icon: Home, title: "Large Living Balconies", desc: "Expansive outdoor living spaces" },
  { icon: Maximize, title: "~75% Carpet Efficiency", desc: "Maximized usable living area" },
  { icon: Sun, title: "2+ Acres Leisure & Amenities", desc: "Dedicated recreation spaces" },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] text-sm uppercase mb-3">Why Mizumi</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">Key Features</h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-lg border border-primary-foreground/10 hover:border-gold/40 transition-all group hover:bg-primary-foreground/5"
            >
              <f.icon className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-primary-foreground/60 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
