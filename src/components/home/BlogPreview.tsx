import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const posts = [
  { title: "How to Quickly Sell Property in Bangalore", date: "Jun 7, 2024", category: "Selling", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format" },
  { title: "Pros and Cons of Renting vs. Buying", date: "Dec 19, 2024", category: "Guide", img: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=500&auto=format" },
  { title: "Luxury Residential Projects in Bangalore", date: "Dec 19, 2024", category: "Luxury", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format" },
];

const BlogPreview = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <div>
              <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">Insights</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">Latest from Our Blog</h2>
            </div>
            <Link to="/blog" className="group flex items-center gap-1.5 text-primary text-sm font-medium hover:gap-2.5 transition-all">
              Read All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {posts.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <article className="group bg-background rounded-2xl overflow-hidden border border-border hover:shadow-elevated transition-all duration-500">
                <div className="aspect-[3/2] overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-[11px] font-semibold tracking-wide uppercase rounded-lg">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-xs mb-3 font-medium">{p.date}</p>
                  <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors leading-snug mb-4">
                    {p.title}
                  </h3>
                  <Link to="/blog" className="group/link flex items-center gap-1.5 text-primary text-sm font-medium">
                    Read More
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
