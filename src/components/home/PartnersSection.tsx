import { motion } from "framer-motion";

const partners = [
  "Prestige", "Sobha", "Brigade", "Godrej", "DLF",
  "Tata Housing", "Mahindra", "Lodha", "Assetz", "Birla Estate",
];

const PartnersSection = () => {
  return (
    <section className="py-20 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground text-xs font-bold tracking-[0.3em] uppercase">Trusted By Leading Developers</p>
        </motion.div>

        {/* Infinite scroll marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...partners, ...partners, ...partners].map((p, i) => (
              <div
                key={`${p}-${i}`}
                className="flex-shrink-0 px-10 py-5 bg-secondary/60 border border-border/50 rounded-xl text-muted-foreground text-sm font-bold tracking-wider hover:text-primary hover:border-primary/20 transition-all duration-300 cursor-default whitespace-nowrap"
              >
                {p}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
