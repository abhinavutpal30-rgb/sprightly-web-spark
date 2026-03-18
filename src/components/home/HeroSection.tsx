import heroBg from "@/assets/hero-realestate.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Users, Award } from "lucide-react";

const stats = [
  { icon: Building2, value: "500+", label: "Properties" },
  { icon: Users, value: "200+", label: "Happy Families" },
  { icon: Award, value: "10+", label: "Years Experience" },
];

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/20" />

      <div className="relative z-10 w-full px-6 max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary-foreground/60 text-xs tracking-[0.25em] uppercase mb-5 font-medium"
        >
          Welcome to GharFinder
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white leading-[1.1] max-w-2xl"
        >
          Finding Your{" "}
          <em className="font-normal text-primary not-italic">Dream Home</em>{" "}
          Made Simple
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-white/50 text-base md:text-lg max-w-lg leading-relaxed"
        >
          Your trusted partner in Bangalore real estate. From luxury apartments to investment properties, we help you find the perfect space.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/properties"
            className="group flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm font-medium rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-premium"
          >
            Explore Properties
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="px-7 py-4 border border-white/20 text-white text-sm font-medium rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Book Appointment
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mt-16 flex flex-wrap gap-8 md:gap-12"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <s.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-white font-display text-xl font-semibold">{s.value}</p>
                <p className="text-white/40 text-xs tracking-wide">{s.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
