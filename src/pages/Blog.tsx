import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import interiorImg from "@/assets/interior.jpg";
import citySkyline from "@/assets/city-skyline.jpg";
import heroImg from "@/assets/hero-realestate.jpg";

const posts = [
  { title: "How to Quickly Sell Property in Bangalore", date: "Jun 7, 2024", read: "5 min", category: "Selling", excerpt: "Discover proven strategies and tips for selling your property quickly in the competitive Bangalore real estate market.", img: property1 },
  { title: "Pros and Cons of Renting vs. Buying Property", date: "Dec 19, 2024", read: "7 min", category: "Guide", excerpt: "A comprehensive guide to help you decide whether renting or buying is the right choice for your situation.", img: interiorImg },
  { title: "Luxury Residential Projects in Bangalore", date: "Dec 19, 2024", read: "6 min", category: "Luxury", excerpt: "Explore the top luxury residential projects in Bangalore offering world-class amenities.", img: property2 },
  { title: "Understanding RERA and Its Impact on Buyers", date: "Nov 15, 2024", read: "8 min", category: "Legal", excerpt: "Learn how RERA regulations protect homebuyers and what you need to know before purchasing.", img: citySkyline },
  { title: "Top Investment Locations in Bangalore 2025", date: "Oct 8, 2024", read: "6 min", category: "Investment", excerpt: "Discover the most promising areas for real estate investment with high growth potential.", img: property3 },
  { title: "Home Loan Guide: Everything You Need to Know", date: "Sep 22, 2024", read: "10 min", category: "Finance", excerpt: "A complete guide to home loans in India — eligibility, documentation, and tips for approval.", img: heroImg },
];

const Blog = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-foreground" />
        <motion.div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${citySkyline})` }} initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 to-foreground/90" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div initial={{ width: 0 }} animate={{ width: 60 }} transition={{ duration: 0.8, delay: 0.3 }} className="h-[2px] bg-primary mx-auto mb-8" />
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-5">Insights</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="font-display text-4xl md:text-5xl lg:text-7xl text-background leading-tight">
            Real Estate <span className="text-primary italic">Insights</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="text-background/40 text-base mt-6 max-w-lg mx-auto">
            Stay informed with the latest trends, tips, and market analysis from our experts.
          </motion.p>
        </div>
      </section>

      {/* Featured + Grid */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Featured Post */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="group grid lg:grid-cols-2 gap-0 bg-secondary rounded-3xl overflow-hidden border border-border mb-16 hover:shadow-elevated transition-all duration-500"
          >
            <div className="aspect-[16/10] lg:aspect-auto overflow-hidden relative">
              <img src={posts[0].img} alt={posts[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <span className="absolute top-6 left-6 px-4 py-1.5 bg-primary text-primary-foreground text-[10px] font-bold tracking-wider uppercase rounded-full">
                Featured
              </span>
            </div>
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <span className="inline-block self-start px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold tracking-wider uppercase rounded-full mb-5">{posts[0].category}</span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-snug mb-5 group-hover:text-primary transition-colors">{posts[0].title}</h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-8">
                <span>{posts[0].date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {posts[0].read}</span>
              </div>
              <span className="group/link inline-flex items-center gap-2 text-primary text-sm font-semibold cursor-pointer">
                Read Article <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </span>
            </div>
          </motion.article>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {posts.slice(1).map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-background rounded-2xl overflow-hidden border border-border hover:shadow-elevated transition-all duration-500 h-full flex flex-col"
              >
                <div className="aspect-[3/2] overflow-hidden relative">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-foreground/90 backdrop-blur-sm text-background text-[10px] font-bold tracking-wider uppercase rounded-full">
                    {p.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span>{p.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {p.read}</span>
                  </div>
                  <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors leading-snug mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-2 flex-1">{p.excerpt}</p>
                  <span className="group/link flex items-center gap-1.5 text-primary text-sm font-semibold cursor-pointer">
                    Read More <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
