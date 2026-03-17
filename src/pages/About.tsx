import { CheckCircle, Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-2">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground">Who We Are</h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl text-foreground mb-4">Your Trusted Real Estate Partner</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Founded with a vision to simplify real estate, GharFinder has grown into one of Bangalore's most trusted property consultancies. We believe everyone deserves a home that matches their dreams.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Our team of experienced professionals combines deep market knowledge with genuine care, ensuring every client finds not just a property, but a place they can truly call home.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { val: "500+", label: "Properties Sold" },
                { val: "10+", label: "Years Experience" },
                { val: "200+", label: "Happy Families" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl text-primary font-semibold">{s.val}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format"
              alt="About GharFinder"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl text-foreground">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Mission Driven", desc: "To make property ownership accessible and stress-free for everyone." },
              { icon: Eye, title: "Transparency", desc: "Honest communication and no hidden fees at every stage." },
              { icon: Award, title: "Excellence", desc: "We strive for the highest standards in service and client satisfaction." },
              { icon: CheckCircle, title: "Client First", desc: "Your goals and preferences always come before everything else." },
            ].map((v) => (
              <div key={v.title} className="bg-background rounded-xl p-7 border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
