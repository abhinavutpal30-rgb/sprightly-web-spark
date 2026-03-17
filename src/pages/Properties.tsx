import { MapPin } from "lucide-react";
import { useState } from "react";

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
      <section className="pt-32 pb-16 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-2">Properties</p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground">Find Your Dream Home</h1>
        </div>
      </section>

      <section className="py-12 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 mb-10">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-5 py-2 text-sm rounded-lg font-medium transition-colors ${
                  filter === t
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div
                key={p.name}
                className="group bg-background rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-lg text-foreground">{p.name}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">{p.type}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    {p.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-primary font-semibold">{p.price}</p>
                    <button className="text-xs text-primary font-medium hover:underline">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Properties;
