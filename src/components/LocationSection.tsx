import { motion } from "framer-motion";
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
    <section id="location" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-[0.3em] text-sm uppercase mb-3">Connectivity</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Prime Location, Unmatched Access
          </h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg overflow-hidden"
            >
              <div className="p-5 bg-primary text-primary-foreground flex items-center gap-3">
                <cat.icon className="w-5 h-5 text-gold" />
                <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
              </div>
              <div className="p-5 space-y-3">
                {cat.places.map((p) => (
                  <div key={p.name} className="flex justify-between items-center text-sm">
                    <span className="text-foreground">{p.name}</span>
                    <span className="text-accent font-medium whitespace-nowrap ml-2">{p.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          ETA as per Google Maps. May vary depending on time of day and mode of transport.
        </p>
      </div>
    </section>
  );
};

export default LocationSection;
