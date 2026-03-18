import { CheckCircle, Target, Eye, Award, Heart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const About = () => {
  return (
    <>
      {/* Page Header */}
      <section className="pt-36 pb-20 px-6 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-7xl mx-auto text-center relative">
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">Who We Are</h1>
          <p className="text-muted-foreground text-[15px] mt-4 max-w-lg mx-auto">
            A human-centric real estate consultancy making property ownership simple and rewarding.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          <ScrollReveal direction="left">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5 leading-tight">Your Trusted Real Estate Partner</h2>
              <p className="text-muted-foreground text-[15px] leading-relaxed mb-4">
                Founded with a vision to simplify real estate, GharFinder has grown into one of Bangalore's most trusted property consultancies. We believe everyone deserves a home that matches their dreams.
              </p>
              <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
                Our team of experienced professionals combines deep market knowledge with genuine care, ensuring every client finds not just a property, but a place they can truly call home.
              </p>
              <div className="grid grid-cols-3 gap-8">
                {[
                  { val: "500+", label: "Properties Sold" },
                  { val: "10+", label: "Years Experience" },
                  { val: "200+", label: "Happy Families" },
                ].map((s) => (
                  <div key={s.label} className="text-center md:text-left">
                    <p className="font-display text-3xl text-primary font-bold">{s.val}</p>
                    <p className="text-xs text-muted-foreground mt-1 font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format"
                alt="About GharFinder"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">Our Foundation</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">Our Values</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {[
              { icon: Target, title: "Mission Driven", desc: "To make property ownership accessible and stress-free for everyone." },
              { icon: Eye, title: "Transparency", desc: "Honest communication and no hidden fees at every stage." },
              { icon: Award, title: "Excellence", desc: "We strive for the highest standards in service and client satisfaction." },
              { icon: Heart, title: "Client First", desc: "Your goals and preferences always come before everything else." },
            ].map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="bg-background rounded-2xl p-8 border border-border text-center hover:shadow-elevated transition-all duration-500 h-full">
                  <div className="w-14 h-14 bg-primary/8 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <v.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2.5">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
