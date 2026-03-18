import { MapPin, BedDouble, Maximize, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import interiorImg from "@/assets/interior.jpg";
import citySkyline from "@/assets/city-skyline.jpg";
import heroImg from "@/assets/hero-realestate.jpg";

const allProperties = [
  { name: "Prestige Lake Ridge", location: "Uttarahalli, Bangalore", price: "₹1.2 Cr+", beds: "2-4 BHK", area: "1200-2400 sqft", type: "Apartment", tag: "Premium", img: property1 },
  { name: "Brigade Eldorado", location: "Bagalur, Bangalore", price: "₹85 L+", beds: "2-3 BHK", area: "1100-1800 sqft", type: "Apartment", tag: "New Launch", img: property3 },
  { name: "Sobha Neopolis", location: "Panathur, Bangalore", price: "₹2.1 Cr+", beds: "3-4 BHK", area: "1800-3200 sqft", type: "Apartment", tag: "Luxury", img: heroImg },
  { name: "Godrej Ananda", location: "Aerospace Park, Bangalore", price: "₹75 L+", beds: "1-3 BHK", area: "650-1600 sqft", type: "Apartment", tag: "Popular", img: property1 },
  { name: "Assetz Canvas & Cove", location: "Hobli, Bangalore", price: "₹1.5 Cr+", beds: "3-4 BHK", area: "1600-2800 sqft", type: "Villa", tag: "Featured", img: property2 },
  { name: "Mana Dale", location: "Sarjapur Road, Bangalore", price: "₹1.8 Cr+", beds: "3-4 BHK", area: "1700-2900 sqft", type: "Apartment", tag: "Premium", img: interiorImg },
  { name: "Lodha Azur", location: "Bannerghatta Road, Bangalore", price: "₹1.4 Cr+", beds: "2-4 BHK", area: "1200-2600 sqft", type: "Apartment", tag: "New", img: property3 },
  { name: "Purva Park Hill", location: "Kanakpura Road, Bangalore", price: "₹95 L+", beds: "3-5 BHK", area: "2200-4000 sqft", type: "Villa", tag: "Luxury", img: property2 },
  { name: "Embassy East Avenue", location: "Whitefield, Bangalore", price: "₹1.1 Cr+", beds: "2-3 BHK", area: "1100-1900 sqft", type: "Apartment", tag: "Popular", img: citySkyline },
];

const types = ["All", "Apartment", "Villa"];

const Properties = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? allProperties : allProperties.filter((p) => p.type === filter);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-foreground" />
        <motion.div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${citySkyline})` }} initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 to-foreground/90" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div initial={{ width: 0 }} animate={{ width: 60 }} transition={{ duration: 0.8, delay: 0.3 }} className="h-[2px] bg-primary mx-auto mb-8" />
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-5">Our Portfolio</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="font-display text-4xl md:text-5xl lg:text-7xl text-background leading-tight">
            Find Your <span className="text-primary italic">Dream</span> Home
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="text-background/40 text-base mt-6 max-w-lg mx-auto">
            Browse our curated collection of premium properties across Bangalore.
          </motion.p>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex gap-3 mb-14">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-7 py-3 text-sm rounded-full font-semibold transition-all duration-400 ${
                  filter === t
                    ? "bg-primary text-primary-foreground shadow-premium"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 border border-border"
                }`}
              >
                {t}
              </button>
            ))}
            <div className="ml-auto text-sm text-muted-foreground self-center">
              {filtered.length} {filtered.length === 1 ? "property" : "properties"}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="group bg-background rounded-2xl overflow-hidden border border-border hover:shadow-[0_20px_60px_-15px_hsl(var(--foreground)/0.12)] transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[800ms] ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute top-4 left-4 px-3 py-1.5 bg-foreground/90 backdrop-blur-sm text-background text-[10px] font-bold tracking-wider uppercase rounded-full">
                      {p.tag}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <p className="text-white font-display text-2xl font-bold">{p.price}</p>
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
                      </div>
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
                        <BedDouble className="w-3.5 h-3.5" /> {p.beds}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Maximize className="w-3.5 h-3.5" /> {p.area}
                      </div>
                      <p className="ml-auto text-primary font-display text-lg font-bold">{p.price}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default Properties;
