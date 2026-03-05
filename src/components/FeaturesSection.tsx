import { Building2, TreePine, PanelTop, Waves, Maximize, Leaf } from "lucide-react";

const features = [
  { icon: Building2, title: "~ 63,000+ Sqft Clubhouse" },
  { icon: TreePine, title: "Over 2 Acres for Leisure & Amenities" },
  { icon: PanelTop, title: "Large Living Balconies" },
  { icon: Waves, title: "Temperature Controlled Pools" },
  { icon: Maximize, title: "~ 75% Carpet Area Efficiency" },
  { icon: Leaf, title: "~77% Open Space" },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-2">
          Key Features
        </h2>
        <div className="flex justify-center my-6">
          <div className="w-16 h-px bg-border" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center text-center p-6 bg-background border border-border hover:shadow-sm transition-shadow"
            >
              <f.icon className="w-10 h-10 mb-4 text-muted-foreground" strokeWidth={1.2} />
              <p className="text-sm text-foreground font-medium">{f.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
