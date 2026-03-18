import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import interiorImg from "@/assets/interior.jpg";

const posts = [
  { title: "How to Quickly Sell Property in Bangalore", date: "Jun 7, 2024", read: "5 min", category: "Selling", img: property1, excerpt: "Learn the key strategies to sell your property fast in Bangalore's competitive market." },
  { title: "Pros and Cons of Renting vs. Buying", date: "Dec 19, 2024", read: "7 min", category: "Guide", img: interiorImg, excerpt: "Making the right decision between renting and buying your first home." },
  { title: "Luxury Residential Projects in Bangalore", date: "Dec 19, 2024", read: "6 min", category: "Luxury", img: property2, excerpt: "Explore the most sought-after luxury projects redefining Bangalore's skyline." },
];

const BlogPreview = () => {
  return (
    <section className="py-28 px-6 bg-secondary">
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
            <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Insights</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Latest Articles</h2>
          </div>
          <Link
            to="/blog"
            className="group flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            <span className="border-b-2 border-foreground group-hover:border-primary transition-colors pb-0.5">All Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-background rounded-2xl overflow-hidden border border-border hover:shadow-[0_20px_60px_-15px_hsl(var(--foreground)/0.1)] transition-all duration-500"
          >
            <div className="aspect-[16/10] overflow-hidden relative">
              <img src={posts[0].img} alt={posts[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1.5 bg-primary text-primary-foreground text-[10px] font-bold tracking-wider uppercase rounded-full mb-3">{posts[0].category}</span>
                <h3 className="font-display text-2xl text-white leading-snug">{posts[0].title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{posts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{posts[0].date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {posts[0].read}</span>
                </div>
                <Link to="/blog" className="flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                  Read <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.article>

          <div className="flex flex-col gap-6">
            {posts.slice(1).map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group flex flex-col sm:flex-row bg-background rounded-2xl overflow-hidden border border-border hover:shadow-[0_20px_60px_-15px_hsl(var(--foreground)/0.1)] transition-all duration-500 flex-1"
              >
                <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="sm:w-3/5 p-6 flex flex-col justify-center">
                  <span className="inline-block self-start px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold tracking-wider uppercase rounded-full mb-3">{p.category}</span>
                  <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors leading-snug mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">{p.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{p.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {p.read}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
