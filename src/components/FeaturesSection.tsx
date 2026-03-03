import { motion } from "framer-motion";
import iconClubhouse from "@/assets/icon-clubhouse.png";
import iconLeisure from "@/assets/icon-leisure.png";
import iconBalcony from "@/assets/icon-balcony.png";
import iconPool from "@/assets/icon-pool.png";
import iconCarpet from "@/assets/icon-carpet.png";
import iconOpenspace from "@/assets/icon-openspace.png";

const features = [
  { icon: iconClubhouse, title: "~ 63,000+ Sqft Clubhouse", desc: "World-class amenities under one roof" },
  { icon: iconLeisure, title: "Over 2 Acres for Leisure & Amenities", desc: "Dedicated recreation spaces" },
  { icon: iconBalcony, title: "Large Living Balconies", desc: "Expansive outdoor living spaces" },
  { icon: iconPool, title: "Temperature Controlled Pools", desc: "Year-round swimming comfort" },
  { icon: iconCarpet, title: "~ 75% Carpet Area Efficiency", desc: "Maximized usable living area" },
  { icon: iconOpenspace, title: "~77% Open Space", desc: "Lush green landscapes & gardens" },
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
              className="p-8 rounded-lg border border-primary-foreground/10 hover:border-gold/40 transition-all group hover:bg-primary-foreground/5 text-center"
            >
              <img src={f.icon} alt={f.title} className="w-16 h-16 mx-auto mb-4 object-contain group-hover:scale-110 transition-transform" />
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
