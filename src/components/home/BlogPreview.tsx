import { Link } from "react-router-dom";

const posts = [
  { title: "How to Quickly Sell Property in Bangalore", date: "Jun 7, 2024", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format" },
  { title: "Pros and Cons of Renting vs. Buying", date: "Dec 19, 2024", img: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=500&auto=format" },
  { title: "Luxury Residential Projects in Bangalore", date: "Dec 19, 2024", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format" },
];

const BlogPreview = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-primary text-sm font-medium tracking-wide uppercase mb-2">Insights</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">Latest from Our Blog</h2>
          </div>
          <Link to="/blog" className="text-primary text-sm font-medium hover:underline">
            Read All Articles →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <h3 className="font-display text-base text-foreground group-hover:text-primary transition-colors leading-snug">
                  {p.title}
                </h3>
                <Link to="/blog" className="mt-3 inline-block text-primary text-sm font-medium hover:underline">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
