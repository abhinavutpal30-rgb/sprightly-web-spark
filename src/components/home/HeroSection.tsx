import heroBg from "@/assets/hero-realestate.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

      <div className="relative z-10 w-full px-6 max-w-7xl mx-auto">
        <p className="text-primary-foreground/70 text-sm tracking-[0.2em] uppercase mb-4 font-medium">
          Welcome to GharFinder
        </p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight max-w-2xl">
          Finding Your{" "}
          <em className="font-normal text-primary">Dream Home</em>{" "}
          Made Simple
        </h1>
        <p className="mt-5 text-white/60 text-base max-w-lg leading-relaxed">
          Your trusted partner in Bangalore real estate. From luxury apartments to investment properties, we help you find the perfect space.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/properties"
            className="px-7 py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Explore Properties
          </Link>
          <Link
            to="/contact"
            className="px-7 py-3.5 border border-white/30 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
