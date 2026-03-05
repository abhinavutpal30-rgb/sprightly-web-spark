import { motion } from "framer-motion";
import greenImg from "@/assets/green-features.jpg";
import iconWater from "@/assets/icon-water.png";
import iconEnergy from "@/assets/icon-energy.png";
import iconWaste from "@/assets/icon-waste.png";

const greenFeatures = [
  {
    icon: iconWater,
    title: "Water Conservation",
    desc: "Advanced rainwater harvesting, dual plumbing systems, and water-efficient fixtures ensure optimal water usage while promoting long-term sustainability.",
  },
  {
    icon: iconEnergy,
    title: "Energy Efficiency",
    desc: "Solar-powered common areas, LED lighting, and EV charging stations are seamlessly integrated to reduce energy consumption and support a greener lifestyle.",
  },
  {
    icon: iconWaste,
    title: "Waste Management",
    desc: "A zero-waste approach, organic waste converters, and efficient waste segregation minimize landfill impact, fostering a cleaner and healthier community.",
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
          className="text-center mb-6"
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Green Features for Eco-Friendly Living
          </h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mt-6" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-primary-foreground/70 max-w-2xl mx-auto mb-16"
        >
          We offer smart water solutions like dual piping, dual flush systems, efficient fixtures,
          recycled water use, rainwater harvesting, and groundwater recharge for sustainability.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={greenImg}
              alt="Eco-friendly living at Mizumi Reserve"
              className="rounded-lg shadow-xl w-full h-[450px] object-cover"
            />
          </motion.div>

          <div className="space-y-8">
            {greenFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gold/20 rounded-lg flex items-center justify-center">
                  <img src={f.icon} alt={f.title} className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
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
