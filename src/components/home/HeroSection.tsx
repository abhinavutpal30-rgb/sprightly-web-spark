import heroBg from "@/assets/hero-realestate.jpg";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Building2, Users, Award, ChevronDown } from "lucide-react";
import { useRef } from "react";

const stats = [
  { icon: Building2, value: "500+", label: "Properties Sold" },
  { icon: Users, value: "200+", label: "Happy Families" },
  { icon: Award, value: "10+", label: "Years of Trust" },
];

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[750px] flex items-center overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${heroBg})`, y: bgY, scale: 1.1 }}
      />
      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

      <motion.div style={{ opacity }} className="relative z-10 w-full px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          {/* Animated line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="h-[2px] bg-primary mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-primary text-xs tracking-[0.35em] uppercase mb-6 font-semibold"
          >
            Premium Real Estate Consultancy
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-white leading-[1.05] tracking-tight"
            >
              Find Your
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-white leading-[1.05] tracking-tight"
            >
              <span className="text-primary italic">Dream</span> Home
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="mt-8 text-white/50 text-base md:text-lg max-w-lg leading-relaxed"
          >
            Your trusted partner in Bangalore real estate. From luxury apartments
            to prime investment properties, we help you find the perfect space.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/properties"
              className="group relative flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold rounded-full overflow-hidden hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-500"
            >
              <span className="relative z-10">Explore Properties</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
            <Link
              to="/contact"
              className="group px-8 py-4 border border-white/25 text-white text-sm font-semibold rounded-full hover:bg-white hover:text-foreground transition-all duration-500 backdrop-blur-sm"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-20 flex flex-wrap gap-10 md:gap-16"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 + i * 0.15 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm flex items-center justify-center">
                <s.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-white font-display text-2xl font-bold tracking-tight">{s.value}</p>
                <p className="text-white/35 text-xs tracking-wider uppercase">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
