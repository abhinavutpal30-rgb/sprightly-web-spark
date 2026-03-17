const partners = [
  "Prestige", "Sobha", "Brigade", "Godrej", "DLF",
  "Tata Housing", "Mahindra", "Lodha", "Assetz", "Birla Estate",
];

const PartnersSection = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-2">Trusted By</p>
          <h2 className="font-display text-2xl md:text-3xl text-foreground">Our Partners</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 items-center">
          {partners.map((p) => (
            <div
              key={p}
              className="px-8 py-4 bg-secondary rounded-lg text-muted-foreground text-sm font-medium hover:text-primary hover:bg-primary/5 transition-colors"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
