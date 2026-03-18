import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import citySkyline from "@/assets/city-skyline.jpg";

const CTASection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${citySkyline})` }} />
      <div className="absolute inset-0 bg-foreground/85 backdrop-blur-sm" />

      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 bg-primary/15 rounded-full blur-[80px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <div className="h-[2px] w-16 bg-primary mx-auto mb-8" />
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-background leading-tight mb-6">
          Ready to Find Your <span className="text-primary italic">Perfect</span> Property?
        </h2>
        <p className="text-background/40 text-base leading-relaxed max-w-xl mx-auto mb-12">
          Start your search with us today and unlock the door to your dream home.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/properties"
            className="group relative flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground text-sm font-semibold rounded-full overflow-hidden hover:shadow-[0_0_50px_hsl(var(--primary)/0.4)] transition-all duration-500"
          >
            <span className="relative z-10">Browse Properties</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
          <Link
            to="/contact"
            className="px-10 py-4 border border-background/20 text-background text-sm font-semibold rounded-full hover:bg-background hover:text-foreground transition-all duration-500"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
