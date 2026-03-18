import ScrollReveal from "@/components/ScrollReveal";

const partners = [
  "Prestige", "Sobha", "Brigade", "Godrej", "DLF",
  "Tata Housing", "Mahindra", "Lodha", "Assetz", "Birla Estate",
];

const PartnersSection = () => {
  return (
    <section className="py-20 px-6 bg-background border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase mb-3">Trusted By</p>
            <h2 className="font-display text-2xl md:text-3xl text-foreground">Our Partners</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-wrap justify-center gap-4 md:gap-5">
            {partners.map((p) => (
              <div
                key={p}
                className="px-8 py-4 bg-secondary/80 rounded-xl text-muted-foreground text-sm font-semibold tracking-wide hover:text-primary hover:bg-primary/5 hover:shadow-soft transition-all duration-300 cursor-default"
              >
                {p}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PartnersSection;
