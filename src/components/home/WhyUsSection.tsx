import { Users, Eye, Handshake, Car } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const reasons = [
  { icon: Users, title: "Client-Focused", desc: "Your needs lead our priority list. We listen first, act second.", stat: 200, suffix: "+" },
  { icon: Eye, title: "Market Expertise", desc: "Guiding you through local market insights with years of expertise.", stat: 10, suffix: "+" },
  { icon: Handshake, title: "Transparent", desc: "Building trust, one conversation at a time. No hidden fees.", stat: 50, suffix: "+" },
  { icon: Car, title: "Free Site Visits", desc: "Visit your potential home for free — no strings attached.", stat: 500, suffix: "+" },
];

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const totalFrames = 50;
    const timer = setInterval(() => {
      frame++;
      setCount(Math.round((frame / totalFrames) * end));
      if (frame >= totalFrames) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const WhyUsSection = () => {
  return (
    <section className="py-28 px-6 bg-foreground relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="h-[2px] w-12 bg-primary mb-6" />
            <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Why Choose Us</p>
            <h2 className="font-display text-4xl md:text-5xl text-background leading-[1.15] mb-6">
              The IRVANA <span className="text-primary italic">Advantage</span>
            </h2>
            <p className="text-background/40 text-base leading-relaxed max-w-lg">
              We combine deep market expertise with genuine care to deliver an unmatched experience in real estate.
            </p>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-background/[0.06] backdrop-blur-sm border border-background/10 rounded-2xl p-7 hover:bg-background/[0.1] hover:border-primary/30 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors duration-300">
                  <r.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <p className="font-display text-3xl font-bold text-background mb-1">
                  <Counter end={r.stat} suffix={r.suffix} />
                </p>
                <h3 className="font-display text-sm text-background/80 mb-2">{r.title}</h3>
                <p className="text-background/35 text-xs leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
