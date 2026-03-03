import { motion } from "framer-motion";
import clubhouseImg from "@/assets/clubhouse.jpg";

const OverviewSection = () => {
  return (
    <section id="overview" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-[0.3em] text-sm uppercase mb-3">About the Project</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            A Green Retreat in the Heart of the City
          </h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={clubhouseImg}
              alt="Mizumi Reserve Clubhouse"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Assetz Mizumi Reserve is a luxury township in South Bangalore, spread across ~80 acres
              of meticulously designed landscapes. It offers spacious 3 and 4 BHK residences that
              redefine upscale living.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Surrounded by two serene lakes, each home provides breathtaking views and a tranquil
              retreat. Residents can enjoy a 63,000+ sqft clubhouse, premium amenities, and lush
              green spaces.
            </p>
            <p className="text-muted-foreground italic">
              Designed for those who seek exclusivity and elegance.
            </p>
            <a
              href="#contact"
              className="inline-block mt-4 px-8 py-3 bg-primary text-primary-foreground rounded font-medium tracking-wide hover:bg-forest-light transition-colors"
            >
              Schedule a Visit
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
