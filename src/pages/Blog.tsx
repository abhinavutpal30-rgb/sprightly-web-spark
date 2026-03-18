import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const posts = [
  { title: "How to Quickly Sell Property in Bangalore", date: "Jun 7, 2024", category: "Selling", excerpt: "Discover proven strategies and tips for selling your property quickly in the competitive Bangalore real estate market.", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format" },
  { title: "Pros and Cons of Renting vs. Buying Property", date: "Dec 19, 2024", category: "Guide", excerpt: "A comprehensive guide to help you decide whether renting or buying is the right choice for your financial situation.", img: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=600&auto=format" },
  { title: "Luxury Residential Projects in Bangalore", date: "Dec 19, 2024", category: "Luxury", excerpt: "Explore the top luxury residential projects in Bangalore offering world-class amenities and premium living experiences.", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format" },
  { title: "Understanding RERA and Its Impact on Buyers", date: "Nov 15, 2024", category: "Legal", excerpt: "Learn how RERA regulations protect homebuyers and what you need to know before making a property purchase.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format" },
  { title: "Top Investment Locations in Bangalore 2025", date: "Oct 8, 2024", category: "Investment", excerpt: "Discover the most promising areas for real estate investment in Bangalore with high growth potential.", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&auto=format" },
  { title: "Home Loan Guide: Everything You Need to Know", date: "Sep 22, 2024", category: "Finance", excerpt: "A complete guide to home loans in India — eligibility, documentation, interest rates, and tips for approval.", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&auto=format" },
];

const Blog = () => {
  return (
    <>
      <section className="pt-36 pb-20 px-6 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-7xl mx-auto text-center relative">
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">Blog</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">Real Estate Insights</h1>
          <p className="text-muted-foreground text-[15px] mt-4 max-w-lg mx-auto">
            Stay informed with the latest trends, tips, and market analysis from our experts.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {posts.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.08}>
              <article className="group bg-background rounded-2xl overflow-hidden border border-border hover:shadow-elevated transition-all duration-500 h-full flex flex-col">
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
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-muted-foreground text-xs mb-3 font-medium">{p.date}</p>
                  <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-2 flex-1">{p.excerpt}</p>
                  <span className="group/link flex items-center gap-1.5 text-primary text-sm font-medium cursor-pointer">
                    Read More
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
