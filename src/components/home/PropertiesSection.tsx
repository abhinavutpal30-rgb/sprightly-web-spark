import { Link } from "react-router-dom";
import { MapPin, ArrowRight, BedDouble, Maximize } from "lucide-react";
import { motion } from "framer-motion";

const properties = [
  { name: "Prestige Lake Ridge", location: "Uttarahalli, Bangalore", price: "₹1.2 Cr+", beds: "2-4 BHK", area: "1200-2400 sqft", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&auto=format", tag: "Premium" },
  { name: "Brigade Eldorado", location: "Bagalur, Bangalore", price: "₹85 L+", beds: "2-3 BHK", area: "1100-1800 sqft", img: "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=600&auto=format", tag: "New Launch" },
  { name: "Sobha Neopolis", location: "Panathur, Bangalore", price: "₹2.1 Cr+", beds: "3-4 BHK", area: "1800-3200 sqft", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format", tag: "Luxury" },
  { name: "Godrej Ananda", location: "Aerospace Park, Bangalore", price: "₹75 L+", beds: "1-3 BHK", area: "650-1600 sqft", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&auto=format", tag: "Popular" },
  { name: "Assetz Canvas & Cove", location: "Hobli, Bangalore", price: "₹1.5 Cr+", beds: "3-4 BHK", area: "1600-2800 sqft", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&auto=format", tag: "Featured" },
  { name: "Mana Dale", location: "Sarjapur Road, Bangalore", price: "₹1.8 Cr+", beds: "3-4 BHK", area: "1700-2900 sqft", img: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&auto=format", tag: "Premium" },
];

const PropertiesSection = () => {
  return (
    <section className="py-28 px-6 bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
        >
          <div>
            <div className="h-[2px] w-12 bg-primary mb-6" />
            <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Featured</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Popular Properties</h2>
          </div>
          <Link
            to="/properties"
            className="group flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm font-semibold text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-400"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="group bg-background rounded-2xl overflow-hidden border border-border hover:shadow-[0_20px_60px_-15px_hsl(var(--foreground)/0.12)] transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[800ms] ease-out"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-4 left-4 px-3 py-1.5 bg-foreground/90 backdrop-blur-sm text-background text-[10px] font-bold tracking-wider uppercase rounded-full">
                    {p.tag}
                  </span>
                  {/* Price on hover */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <p className="text-white font-display text-2xl font-bold">{p.price}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{p.name}</h3>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    {p.location}
                  </div>
                  <div className="flex items-center gap-5 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <BedDouble className="w-3.5 h-3.5" />
                      {p.beds}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Maximize className="w-3.5 h-3.5" />
                      {p.area}
                    </div>
                    <p className="ml-auto text-primary font-display text-lg font-bold">{p.price}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
