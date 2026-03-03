import { motion } from "framer-motion";

const amenities = [
  "Seating Alcove", "Multipurpose Court", "Cards Room", "Board Games",
  "Pool Table", "Table Tennis", "Amphitheatre", "Pets' Park",
  "Outdoor Workstations", "Tennis Court", "Multipurpose Hall", "Bowling Alley",
  "Billiards Table", "Box Cricket", "Padel Tennis", "Outdoor Party Terrace",
  "Swimming Pool", "Kids' Pool", "Gym", "Badminton Court",
  "Squash Court", "Yoga Room", "Banquet Hall", "Outdoor Lawn",
  "Meeting Rooms", "Studio", "Library", "Crèche", "Kids' Play Area",
];

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-[0.3em] text-sm uppercase mb-3">Lifestyle</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            World-Class Amenities
          </h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mt-6" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Over 29 curated amenities spanning sports, wellness, socializing, and recreation — all within a 63,000+ sqft clubhouse.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {amenities.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="p-4 bg-background rounded-lg text-center hover:shadow-md hover:border-accent border border-transparent transition-all"
            >
              <p className="text-sm font-medium text-foreground">{a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
