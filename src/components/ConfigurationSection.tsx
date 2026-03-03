import { useState } from "react";
import { motion } from "framer-motion";
import floorplan3bhkT1 from "@/assets/floorplan-3bhk-t1.webp";
import floorplan3bhkT2 from "@/assets/floorplan-3bhk-t2.webp";
import floorplan4bhk from "@/assets/floorplan-4bhk.webp";

const configs = [
  { type: "3 BHK — Type 1", sbua: "1,900 Sq.Ft.", carpet: "1,648 Sq.Ft.", floorplan: floorplan3bhkT1 },
  { type: "3 BHK — Type 2", sbua: "2,164 Sq.Ft.", carpet: "1,431 Sq.Ft.", floorplan: floorplan3bhkT2 },
  { type: "4 BHK", sbua: "2,476 Sq.Ft.", carpet: "1,869 Sq.Ft.", floorplan: floorplan4bhk },
];

const ConfigurationSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="configuration" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-[0.3em] text-sm uppercase mb-3">Floor Plans</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Configuration
          </h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mt-6" />
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {configs.map((c, i) => (
            <button
              key={c.type}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-2 rounded font-medium text-sm transition-all ${
                activeTab === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-muted"
              }`}
            >
              {c.type}
            </button>
          ))}
        </div>

        {/* Active config */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <img
              src={configs[activeTab].floorplan}
              alt={`${configs[activeTab].type} Floor Plan`}
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <h3 className="font-display text-3xl font-semibold text-foreground">
              {configs[activeTab].type}
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-secondary rounded-lg">
                <span className="text-muted-foreground">Super Built-Up Area</span>
                <span className="font-display text-2xl font-semibold text-foreground">{configs[activeTab].sbua}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-secondary rounded-lg">
                <span className="text-muted-foreground">Carpet Area</span>
                <span className="font-display text-2xl font-semibold text-foreground">{configs[activeTab].carpet}</span>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-block mt-4 px-8 py-3 bg-accent text-accent-foreground rounded font-medium hover:brightness-110 transition-all"
            >
              Check Price
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConfigurationSection;
