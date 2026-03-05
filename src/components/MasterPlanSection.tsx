import masterPlan from "@/assets/master-plan.webp";

const MasterPlanSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-2">
          Master Plan
        </h2>
        <div className="flex justify-center my-6">
          <div className="w-16 h-px bg-border" />
        </div>

        <div className="border border-border overflow-hidden mt-10">
          <img
            src={masterPlan}
            alt="Mizumi Reserve Master Plan"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default MasterPlanSection;
