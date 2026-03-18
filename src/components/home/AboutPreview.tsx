import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const highlights = [
  "Modern and Premium Spaces",
  "Great Investment Opportunities",
  "Luxurious Living Experience",
  "Prime Bangalore Locations",
];

const AboutPreview = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
        <ScrollReveal direction="left">
          <div className="relative">
            <div className="aspect-[4/5] bg-secondary rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format"
                alt="Modern luxury property"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-7 py-5 rounded-2xl shadow-premium">
              <p className="font-display text-3xl font-bold">10+</p>
              <p className="text-xs text-primary-foreground/80 mt-0.5">Years Experience</p>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-2xl" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div>
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">About Us</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5 leading-tight">
              Your Journey of Property Ownership Starts Here
            </h2>
            <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
              We are a human-centric real estate consultancy dedicated to making property buying, selling, and investing a seamless experience. With deep market knowledge and personalized service, we guide you every step of the way.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">{h}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-premium"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutPreview;
