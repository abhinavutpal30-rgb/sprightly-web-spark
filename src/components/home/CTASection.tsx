import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl text-background mb-4">
          Are you looking for your perfect property?
        </h2>
        <p className="text-background/60 text-sm leading-relaxed max-w-xl mx-auto mb-8">
          Start your search with us today and unlock the door to your dream home. With our extensive listings and personalized service, we make finding your ideal property effortless.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/properties"
            className="px-7 py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Browse Properties
          </Link>
          <Link
            to="/contact"
            className="px-7 py-3.5 border border-background/30 text-background text-sm font-medium rounded-lg hover:bg-background/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
