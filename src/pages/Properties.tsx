import { MapPin } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const allProperties = [
  { name: "Prestige Lake Ridge", location: "Uttarahalli, Bangalore", price: "₹1.2 Cr+", type: "Apartment", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&auto=format" },
  { name: "Brigade Eldorado", location: "Bagalur, Bangalore", price: "₹85 L+", type: "Apartment", img: "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=600&auto=format" },
  { name: "Sobha Neopolis", location: "Panathur, Bangalore", price: "₹2.1 Cr+", type: "Apartment", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format" },
  { name: "Godrej Ananda", location: "Aerospace Park, Bangalore", price: "₹75 L+", type: "Apartment", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&auto=format" },
  { name: "Assetz Canvas & Cove", location: "Hobli, Bangalore", price: "₹1.5 Cr+", type: "Villa", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&auto=format" },
  { name: "Mana Dale", location: "Sarjapur Road, Bangalore", price: "₹1.8 Cr+", type: "Apartment", img: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&auto=format" },
  { name: "Lodha Azur", location: "Bannerghatta Road, Bangalore", price: "₹1.4 Cr+", type: "Apartment", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format" },
  { name: "Purva Park Hill", location: "Kanakpura Road, Bangalore", price: "₹95 L+", type: "Villa", img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&auto=format" },
  { name: "Embassy East Avenue", location: "Whitefield, Bangalore", price: "₹1.1 Cr+", type: "Apartment", img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&auto=format" },
];

const types = ["All", "Apartment", "Villa"];

const Properties = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? allProperties : allProperties.filter((p) => p.type === filter);

  return (
    <>
      <section className="pt-36 pb-20 px-6 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-7xl mx-auto text-center relative">
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">Properties</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">Find Your Dream Home</h1>
          <p className="text-muted-foreground text-[15px] mt-4 max-w-lg mx-auto">
            Browse our curated collection of premium properties across Bangalore.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 mb-12">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-6 py-2.5 text-sm rounded-xl font-medium transition-all duration-300 ${
                  filter === t
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 0.06}>
                <div className="group bg-background rounded-2xl overflow-hidden border border-border hover:shadow-elevated transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-[11px] font-semibold tracking-wide uppercase rounded-lg">
                      {p.type}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg text-foreground mb-1.5">{p.name}</h3>
                    <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
                      <MapPin className="w-3.5 h-3.5" />
                      {p.location}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <p className="text-primary font-display text-lg font-semibold">{p.price}</p>
                      <button className="text-xs text-primary font-semibold hover:underline tracking-wide uppercase">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Properties;
