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
    <section id="amenities" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-muted-foreground text-sm tracking-wide mb-2">
          World-Class Amenities
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-2">
          29+ Curated Amenities
        </h2>
        <div className="flex justify-center my-6">
          <div className="w-16 h-px bg-border" />
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 mt-10">
          {amenities.map((a) => (
            <div
              key={a}
              className="py-4 px-3 bg-secondary text-center hover:bg-border/60 transition-colors"
            >
              <p className="text-xs text-foreground">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
