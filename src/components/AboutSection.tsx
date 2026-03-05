import { Building, Ruler, Home, MapPin } from "lucide-react";

const stats = [
  { icon: Building, value: "50+", label: "Projects", sub: "Residential & Commercial" },
  { icon: Ruler, value: "50+ Mn", label: "Sq.Ft.", sub: "Developed & Ongoing" },
  { icon: Home, value: "24,000+", label: "Units", sub: "Delivered & Underway" },
  { icon: MapPin, value: "700+", label: "Acres", sub: "Acquired & Licensed" },
];

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-2">
          About Assetz
        </h2>
        <div className="flex justify-center my-6">
          <div className="w-16 h-px bg-border" />
        </div>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
          Assetz is a human-centric company that consistently sets new benchmarks in the built
          environment, ensuring a better quality of life for generations to come.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mt-12 border border-border">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-6 text-center">
              <s.icon className="w-7 h-7 mx-auto mb-3 text-muted-foreground" strokeWidth={1.2} />
              <p className="font-display text-2xl font-semibold text-foreground">{s.value}</p>
              <p className="text-sm text-foreground mt-1">{s.label}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
