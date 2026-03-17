import { Link } from "react-router-dom";

const posts = [
  { title: "How to Quickly Sell Property in Bangalore", date: "Jun 7, 2024", excerpt: "Discover proven strategies and tips for selling your property quickly in the competitive Bangalore real estate market.", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format" },
  { title: "Pros and Cons of Renting vs. Buying Property", date: "Dec 19, 2024", excerpt: "A comprehensive guide to help you decide whether renting or buying is the right choice for your financial situation.", img: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=600&auto=format" },
  { title: "Luxury Residential Projects in Bangalore", date: "Dec 19, 2024", excerpt: "Explore the top luxury residential projects in Bangalore offering world-class amenities and premium living experiences.", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format" },
  { title: "Understanding RERA and Its Impact on Buyers", date: "Nov 15, 2024", excerpt: "Learn how RERA regulations protect homebuyers and what you need to know before making a property purchase.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format" },
  { title: "Top Investment Locations in Bangalore 2025", date: "Oct 8, 2024", excerpt: "Discover the most promising areas for real estate investment in Bangalore with high growth potential.", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&auto=format" },
  { title: "Home Loan Guide: Everything You Need to Know", date: "Sep 22, 2024", excerpt: "A complete guide to home loans in India — eligibility, documentation, interest rates, and tips for approval.", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&auto=format" },
];

const Blog = () => {
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-2">Blog</p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground">Real Estate Insights</h1>
          <p className="text-muted-foreground text-sm mt-4 max-w-lg mx-auto">
            Stay informed with the latest trends, tips, and market analysis from our experts.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group bg-background rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <p className="text-muted-foreground text-xs mb-2">{p.date}</p>
                <h3 className="font-display text-base text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">{p.excerpt}</p>
                <span className="text-primary text-sm font-medium hover:underline cursor-pointer">Read More →</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
