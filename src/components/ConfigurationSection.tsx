import { motion } from "framer-motion";

const configs = [
  { type: "3 BHK — Type 1", sbua: "1,900 Sq.Ft.", carpet: "1,648 Sq.Ft." },
  { type: "3 BHK — Type 2", sbua: "2,164 Sq.Ft.", carpet: "1,431 Sq.Ft." },
  { type: "4 BHK", sbua: "2,476 Sq.Ft.", carpet: "1,869 Sq.Ft." },
];

const ConfigurationSection = () => {
  return (
    <section id="configuration" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
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

        <div className="grid md:grid-cols-3 gap-6">
          {configs.map((c, i) => (
            <motion.div
              key={c.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all group"
            >
              <div className="bg-primary p-6 text-primary-foreground">
                <h3 className="font-display text-2xl font-semibold">{c.type}</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">Super Built-Up Area</span>
                  <span className="font-display text-xl font-semibold text-foreground">{c.sbua}</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">Carpet Area</span>
                  <span className="font-display text-xl font-semibold text-foreground">{c.carpet}</span>
                </div>
                <a
                  href="#contact"
                  className="mt-4 block text-center py-3 bg-accent text-accent-foreground rounded font-medium hover:brightness-110 transition-all"
                >
                  Check Price
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConfigurationSection;
