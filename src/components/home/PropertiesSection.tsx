import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const properties = [
  { name: "Prestige Lake Ridge", location: "Uttarahalli, Bangalore", price: "₹1.2 Cr+", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&auto=format" },
  { name: "Brigade Eldorado", location: "Bagalur, Bangalore", price: "₹85 L+", img: "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=600&auto=format" },
  { name: "Sobha Neopolis", location: "Panathur, Bangalore", price: "₹2.1 Cr+", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format" },
  { name: "Godrej Ananda", location: "Aerospace Park, Bangalore", price: "₹75 L+", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&auto=format" },
  { name: "Assetz Canvas & Cove", location: "Hobli, Bangalore", price: "₹1.5 Cr+", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&auto=format" },
  { name: "Mana Dale", location: "Sarjapur Road, Bangalore", price: "₹1.8 Cr+", img: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&auto=format" },
];

const PropertiesSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-primary text-sm font-medium tracking-wide uppercase mb-2">Featured</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">Popular Properties</h2>
          </div>
          <Link
            to="/properties"
            className="text-primary text-sm font-medium hover:underline"
          >
            View All Properties →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p) => (
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
                <h3 className="font-display text-lg text-foreground mb-1">{p.name}</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  {p.location}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-primary font-semibold">{p.price}</p>
                  <button className="text-xs text-primary font-medium hover:underline">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
