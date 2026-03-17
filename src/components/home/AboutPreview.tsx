import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Modern and Premium Spaces",
  "Great Investment Opportunities",
  "Luxurious Living",
  "Premium Locations",
];

const AboutPreview = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] bg-secondary rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format"
              alt="Modern luxury property"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg">
            <p className="font-display text-2xl font-bold">10+</p>
            <p className="text-xs text-primary-foreground/80">Years Experience</p>
          </div>
        </div>

        <div>
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-2">About Us</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 leading-tight">
            Your Journey of Property Ownership Starts Here
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            We are a human-centric real estate consultancy dedicated to making property buying, selling, and investing a seamless experience. With deep market knowledge and personalized service, we guide you every step of the way.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-8">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{h}</span>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
