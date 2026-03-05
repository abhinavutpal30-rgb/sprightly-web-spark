import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

      <div className="relative z-10 w-full px-6 pb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-tight tracking-tight">
              Mizumi <em className="font-normal">Reserve</em>
            </h1>
            <p className="mt-3 text-white/70 text-sm tracking-[0.15em] uppercase">
              Off HSR Layout &nbsp;|&nbsp; ₹2.47 Cr*+
            </p>
          </div>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-white text-foreground text-sm font-medium tracking-wide hover:bg-white/90 transition-colors self-start md:self-auto"
          >
            Enquire Now
          </a>
        </div>
      </div>

      <p className="absolute bottom-4 left-0 right-0 text-center text-white/40 text-[10px] tracking-wide">
        RERA: PRM/KA/RERA/1251/310/PR/040226/006450 &nbsp;|&nbsp; T&C Apply &nbsp;|&nbsp; CGI Artist's Impression
      </p>
    </section>
  );
};

export default HeroSection;
