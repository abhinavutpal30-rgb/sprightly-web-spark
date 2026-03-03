import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/70 via-forest-dark/40 to-forest-dark/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gold tracking-[0.3em] text-sm font-body uppercase mb-4"
        >
          Off HSR Layout · South Bangalore
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground leading-tight"
        >
          Mizumi
          <span className="block font-semibold italic text-gold">Reserve</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-light max-w-2xl mx-auto"
        >
          A green retreat in the heart of the city. ~80 acres of luxury living
          surrounded by two serene lakes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-accent text-accent-foreground font-medium tracking-wide rounded hover:brightness-110 transition-all"
          >
            Enquire Now
          </a>
          <a
            href="#overview"
            className="px-8 py-3 border border-primary-foreground/30 text-primary-foreground font-medium tracking-wide rounded hover:bg-primary-foreground/10 transition-all"
          >
            Explore
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex justify-center gap-8 md:gap-16 text-primary-foreground/70"
        >
          {[
            { value: "₹2.47 Cr*+", label: "Starting Price" },
            { value: "3 & 4 BHK", label: "Configurations" },
            { value: "~80 Acres", label: "Township" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-display text-2xl md:text-3xl font-semibold text-gold">
                {item.value}
              </p>
              <p className="text-xs tracking-wider uppercase mt-1">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
