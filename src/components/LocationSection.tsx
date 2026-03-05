import { GraduationCap, Building, ShoppingBag, Heart } from "lucide-react";

const categories = [
  {
    icon: GraduationCap,
    title: "Education",
    places: [
      { name: "Vibgyor High School", time: "7 mins" },
      { name: "National Public School", time: "9 mins" },
      { name: "Dayananda Sagar University", time: "9 mins" },
      { name: "PES University", time: "12 mins" },
    ],
  },
  {
    icon: Building,
    title: "IT Parks",
    places: [
      { name: "Infosys Limited", time: "14 mins" },
      { name: "Global Tech Park Phase 3", time: "14 mins" },
      { name: "Wipro Corporate Office", time: "18 mins" },
      { name: "Embassy Tech Village", time: "20 mins" },
    ],
  },
  {
    icon: ShoppingBag,
    title: "Leisure",
    places: [
      { name: "PNR Felicity Mall", time: "6 mins" },
      { name: "Centro, Soul Space Spirit", time: "18 mins" },
      { name: "Nexus Mall Koramangala", time: "20 mins" },
      { name: "Royal Meenakshi Mall", time: "24 mins" },
    ],
  },
  {
    icon: Heart,
    title: "Healthcare",
    places: [
      { name: "Manipal Hospital, Sarjapur", time: "12 mins" },
      { name: "Narayana Multispecialty", time: "14 mins" },
      { name: "Nurturehood Hospital", time: "15 mins" },
      { name: "Motherhood Hospital", time: "15 mins" },
    ],
  },
];

const LocationSection = () => {
  return (
    <section id="location" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-2">
          Location Advantage
        </h2>
        <div className="flex justify-center my-6">
          <div className="w-16 h-px bg-border" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-10 border border-border">
          {categories.map((cat) => (
            <div key={cat.title} className="bg-background">
              <div className="px-5 py-4 border-b border-border flex items-center gap-2">
                <cat.icon className="w-4 h-4 text-muted-foreground" />
                <h3 className="font-display text-base text-foreground">{cat.title}</h3>
              </div>
              <div className="px-5 py-4 space-y-3">
                {cat.places.map((p) => (
                  <div key={p.name} className="flex justify-between items-center text-xs">
                    <span className="text-foreground/80">{p.name}</span>
                    <span className="text-muted-foreground whitespace-nowrap ml-2">{p.time}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[10px] text-muted-foreground mt-4">
          ETA as per Google Maps. May vary depending on time of day and mode of transport.
        </p>
      </div>
    </section>
  );
};

export default LocationSection;
