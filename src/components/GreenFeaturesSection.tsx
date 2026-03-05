import greenImg from "@/assets/green-features.jpg";
import iconWater from "@/assets/icon-water.png";
import iconEnergy from "@/assets/icon-energy.png";
import iconWaste from "@/assets/icon-waste.png";

const greenFeatures = [
  {
    icon: iconWater,
    title: "Water Conservation",
    desc: "Advanced rainwater harvesting, dual plumbing systems, and water-efficient fixtures.",
  },
  {
    icon: iconEnergy,
    title: "Energy Efficiency",
    desc: "Solar-powered common areas, LED lighting, and EV charging stations.",
  },
  {
    icon: iconWaste,
    title: "Waste Management",
    desc: "Zero-waste approach, organic waste converters, and efficient waste segregation.",
  },
];

const GreenFeaturesSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-2">
          Green Features
        </h2>
        <div className="flex justify-center my-6">
          <div className="w-16 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-10">
          <div className="overflow-hidden border border-border">
            <img
              src={greenImg}
              alt="Eco-friendly living at Mizumi Reserve"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-8">
            {greenFeatures.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-background border border-border flex items-center justify-center">
                  <img src={f.icon} alt={f.title} className="w-6 h-6 object-contain opacity-60" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenFeaturesSection;
