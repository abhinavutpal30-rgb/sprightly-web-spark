import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import aboutTeam from "@/assets/about-team.jpg";

const counters = [
  { end: 500, suffix: "+", label: "Properties Sold" },
  { end: 10, suffix: "+", label: "Years Experience" },
  { end: 200, suffix: "+", label: "Happy Families" },
];

const AnimatedCounter = ({ end, suffix }: { end: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const totalFrames = 60;
    const counter = setInterval(() => {
      frame++;
      setCount(Math.round((frame / totalFrames) * end));
      if (frame >= totalFrames) clearInterval(counter);
    }, 25);
    return () => clearInterval(counter);
  }, [isInView, end]);
  return <span ref={ref}>{count}{suffix}</span>;
};

const AboutPreview = () => {
  return (
    <section className="py-28 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-elevated">
                <img src={aboutTeam} alt="IRVANA Team" className="w-full h-full object-cover" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 md:-right-10 bg-foreground text-background px-8 py-6 rounded-2xl shadow-2xl"
              >
                <p className="font-display text-4xl font-bold text-primary">10+</p>
                <p className="text-xs text-background/60 mt-1 tracking-wide uppercase">Years of Excellence</p>
              </motion.div>
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-primary/30 rounded-tl-3xl" />
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="h-[2px] w-12 bg-primary mb-6" />
            <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">About Us</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-[1.15]">
              Redefining the Way You
              <span className="text-primary italic"> Find Home</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-5 max-w-xl">
              We are a human-centric real estate consultancy dedicated to making property buying, selling,
              and investing a seamless experience. With deep market knowledge and personalized service,
              we guide you every step of the way.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-xl">
              Our team combines industry expertise with genuine care — because finding a home should feel
              exciting, not exhausting.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-10 pb-10 border-b border-border">
              {counters.map((c) => (
                <div key={c.label}>
                  <p className="font-display text-4xl font-bold text-foreground">
                    <AnimatedCounter end={c.end} suffix={c.suffix} />
                  </p>
                  <p className="text-muted-foreground text-xs mt-1 tracking-wide uppercase font-medium">{c.label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              <span className="border-b-2 border-foreground group-hover:border-primary transition-colors pb-0.5">
                Learn Our Story
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
