import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <ScrollReveal>
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Get Started</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-background leading-tight mb-5">
            Are you looking for your perfect property?
          </h2>
          <p className="text-background/50 text-[15px] leading-relaxed max-w-xl mx-auto mb-10">
            Start your search with us today and unlock the door to your dream home. With our extensive listings and personalized service, we make finding your ideal property effortless.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/properties"
              className="group flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm font-medium rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-premium"
            >
              Browse Properties
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-7 py-4 border border-background/20 text-background text-sm font-medium rounded-xl hover:bg-background/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default CTASection;
