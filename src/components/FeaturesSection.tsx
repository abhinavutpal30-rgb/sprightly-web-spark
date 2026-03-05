import iconClubhouse from "@/assets/icon-clubhouse.png";
import iconLeisure from "@/assets/icon-leisure.png";
import iconBalcony from "@/assets/icon-balcony.png";
import iconPool from "@/assets/icon-pool.png";
import iconCarpet from "@/assets/icon-carpet.png";
import iconOpenspace from "@/assets/icon-openspace.png";

const features = [
  { icon: iconClubhouse, title: "~ 63,000+ Sqft Clubhouse" },
  { icon: iconLeisure, title: "Over 2 Acres for Leisure & Amenities" },
  { icon: iconBalcony, title: "Large Living Balconies" },
  { icon: iconPool, title: "Temperature Controlled Pools" },
  { icon: iconCarpet, title: "~ 75% Carpet Area Efficiency" },
  { icon: iconOpenspace, title: "~77% Open Space" },
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
              <img src={f.icon} alt={f.title} className="w-12 h-12 mb-4 object-contain opacity-70" />
              <p className="text-sm text-foreground font-medium">{f.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
