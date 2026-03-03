import { motion } from "framer-motion";
import masterPlan from "@/assets/master-plan.webp";

const MasterPlanSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent tracking-[0.3em] text-sm uppercase mb-3">Layout</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Master Plan
          </h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden border border-border shadow-xl"
        >
          <img
            src={masterPlan}
            alt="Mizumi Reserve Master Plan"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MasterPlanSection;
