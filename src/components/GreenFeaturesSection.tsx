import { motion } from "framer-motion";
import { Droplets, Zap, Recycle } from "lucide-react";
import greenImg from "@/assets/green-features.jpg";

const greenFeatures = [
  {
    icon: Droplets,
    title: "Water Conservation",
    desc: "Advanced rainwater harvesting, dual plumbing systems, and water-efficient fixtures ensure optimal water usage.",
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    desc: "Solar-powered common areas, LED lighting, and EV charging stations reduce energy consumption.",
  },
  {
    icon: Recycle,
    title: "Waste Management",
    desc: "Zero-waste approach with organic waste converters and efficient waste segregation systems.",
  },
];

const GreenFeaturesSection = () => {
  return (
    <section className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] text-sm uppercase mb-3">Sustainability</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Green Features for Eco-Friendly Living
          </h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={greenImg}
            alt="Eco-friendly living at Mizumi Reserve"
            className="rounded-lg shadow-xl w-full h-[400px] object-cover"
          />

          <div className="space-y-8">
            {greenFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                  <f.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-1">{f.title}</h3>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenFeaturesSection;
