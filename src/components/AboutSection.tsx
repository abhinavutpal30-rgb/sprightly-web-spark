import { motion } from "framer-motion";
import iconProjects from "@/assets/icon-projects.png";
import iconSqft from "@/assets/icon-sqft.png";
import iconUnits from "@/assets/icon-units.png";
import iconAcres from "@/assets/icon-acres.png";

const stats = [
  { icon: iconProjects, value: "50+", label: "Projects", sub: "Residential & Commercial" },
  { icon: iconSqft, value: "50+ Mn", label: "Sq.Ft.", sub: "Developed & Ongoing" },
  { icon: iconUnits, value: "24,000+", label: "Units", sub: "Delivered & Underway" },
  { icon: iconAcres, value: "700+", label: "Acres", sub: "Acquired & Licensed" },
];

const AboutSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-[0.3em] text-sm uppercase mb-3">Legacy</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            About Assetz
          </h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mt-6" />
          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Assetz is a human-centric company that consistently sets new benchmarks in the built
            environment, ensuring a better quality of life for generations to come. Our iterative
            design philosophy creates ecosystems that are deeply attuned to today's needs while
            anticipating tomorrow's possibilities. For us, sustainability isn't an afterthought —
            it's fundamental to our vision.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-lg p-8 text-center border border-border"
            >
              <img src={s.icon} alt={s.label} className="w-12 h-12 mx-auto mb-4 object-contain" />
              <p className="font-display text-4xl font-bold text-accent">{s.value}</p>
              <p className="font-display text-lg font-semibold text-foreground mt-1">{s.label}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
