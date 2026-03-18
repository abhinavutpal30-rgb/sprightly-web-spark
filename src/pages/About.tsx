import { Target, Eye, Award, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import aboutTeam from "@/assets/about-team.jpg";
import interiorImg from "@/assets/interior.jpg";

const AnimCounter = ({ end, suffix }: { end: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const total = 60;
    const timer = setInterval(() => {
      frame++;
      setCount(Math.round((frame / total) * end));
      if (frame >= total) clearInterval(timer);
    }, 25);
    return () => clearInterval(timer);
  }, [isInView, end]);
  return <span ref={ref}>{count}{suffix}</span>;
};

const values = [
  { icon: Target, title: "Mission Driven", desc: "Making property ownership accessible and stress-free for every family." },
  { icon: Eye, title: "Full Transparency", desc: "Honest communication, clear pricing, and no hidden fees at any stage." },
  { icon: Award, title: "Excellence First", desc: "We strive for the highest standards in service quality and satisfaction." },
  { icon: Heart, title: "Client Focused", desc: "Your goals and preferences always come before everything else." },
];

const team = [
  { name: "Arjun Mehta", role: "Founder & CEO", initial: "A" },
  { name: "Priya Sharma", role: "Head of Sales", initial: "P" },
  { name: "Vikram Rao", role: "Investment Advisor", initial: "V" },
  { name: "Deepa Nair", role: "Interior Consultant", initial: "D" },
];

const About = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-foreground" />
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${aboutTeam})` }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 to-foreground/90" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] bg-primary mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-5"
          >
            About GharFinder
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-4xl md:text-5xl lg:text-7xl text-background leading-tight"
          >
            Building Trust,<br />
            <span className="text-primary italic">One Home</span> at a Time
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-background/40 text-base mt-6 max-w-lg mx-auto"
          >
            A human-centric real estate consultancy making property ownership simple, transparent, and rewarding.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-28 px-6 bg-background relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="h-[2px] w-12 bg-primary mb-6" />
            <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Our Story</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6 leading-[1.15]">
              Your Trusted <span className="text-primary italic">Real Estate</span> Partner
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-5">
              Founded with a vision to simplify real estate, GharFinder has grown into one of Bangalore's most trusted property consultancies. We believe everyone deserves a home that matches their dreams.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-10">
              Our team of experienced professionals combines deep market knowledge with genuine care, ensuring every client finds not just a property, but a place they can truly call home.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10 pb-10 border-b border-border">
              {[
                { val: 500, suffix: "+", label: "Properties Sold" },
                { val: 10, suffix: "+", label: "Years Experience" },
                { val: 200, suffix: "+", label: "Happy Families" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    <AnimCounter end={s.val} suffix={s.suffix} />
                  </p>
                  <p className="text-muted-foreground text-xs mt-1 tracking-wide uppercase font-medium">{s.label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:shadow-premium transition-all duration-500"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-elevated">
              <img src={aboutTeam} alt="GharFinder Team" className="w-full h-full object-cover" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-foreground text-background px-8 py-6 rounded-2xl shadow-2xl"
            >
              <p className="font-display text-4xl font-bold text-primary">10+</p>
              <p className="text-xs text-background/50 mt-1 tracking-wide uppercase">Years of Excellence</p>
            </motion.div>
            <div className="absolute -top-5 -right-5 w-24 h-24 border-r-2 border-t-2 border-primary/20 rounded-tr-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 px-6 bg-secondary relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="h-[2px] w-12 bg-primary mx-auto mb-6" />
            <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Our Foundation</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Core Values</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-background rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-500 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500">
                  <v.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="h-[2px] w-12 bg-primary mx-auto mb-6" />
            <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Leadership</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Meet Our Team</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="w-28 h-28 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary group-hover:to-primary/80 transition-all duration-500 shadow-soft">
                  <span className="font-display text-3xl font-bold text-primary group-hover:text-primary-foreground transition-colors duration-500">
                    {t.initial}
                  </span>
                </div>
                <h3 className="font-display text-lg text-foreground mb-1">{t.name}</h3>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${interiorImg})` }} />
        <div className="absolute inset-0 bg-foreground/85 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-2xl mx-auto text-center"
        >
          <div className="h-[2px] w-16 bg-primary mx-auto mb-8" />
          <h2 className="font-display text-4xl md:text-5xl text-background mb-6">
            Ready to Start Your <span className="text-primary italic">Journey?</span>
          </h2>
          <p className="text-background/40 text-base mb-10">
            Let us help you find the property that perfectly matches your vision and lifestyle.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:shadow-[0_0_50px_hsl(var(--primary)/0.4)] transition-all duration-500"
          >
            Book a Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default About;
