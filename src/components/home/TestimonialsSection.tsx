import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  { name: "Naveen J.", role: "Homeowner", text: "IRVANA doesn't just sell properties — they create experiences. My family and I are beyond grateful for their assistance in finding our forever home.", avatar: "N" },
  { name: "Akhil R.", role: "Investor", text: "The team truly goes above and beyond. Their attention to detail and commitment to customer satisfaction are unmatched in the industry.", avatar: "A" },
  { name: "Rakesh V.", role: "First-time Buyer", text: "As a first-time homebuyer, I had many concerns. They patiently guided me through every step, making it smooth and stress-free.", avatar: "R" },
  { name: "Monica S.", role: "Homeowner", text: "Finding my dream home was a breeze! The team was attentive, professional, and truly understood my needs from day one.", avatar: "M" },
  { name: "Roopa R.", role: "Investor", text: "I was skeptical about property investing until I found IRVANA. Their expertise gave me peace of mind and great returns.", avatar: "R" },
  { name: "Mehak T.", role: "Homeowner", text: "From the moment I contacted them, I knew I was in good hands. They even assisted me in getting a loan approved quickly.", avatar: "M" },
];

const TestimonialsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-28 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="h-[2px] w-12 bg-primary mx-auto mb-6" />
          <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Trusted by <span className="text-primary italic">Hundreds</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative bg-background rounded-2xl p-8 border transition-all duration-500 h-full flex flex-col ${
                hoveredIndex === i
                  ? "border-primary/30 shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.15)] -translate-y-1"
                  : "border-border"
              }`}
            >
              <Quote className="w-10 h-10 text-primary/10 mb-5" />
              <p className="text-foreground/70 text-[15px] leading-relaxed mb-8 flex-1">
                "{t.text}"
              </p>
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-primary/80 text-primary/80" />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-5 border-t border-border/50">
                <div className="w-11 h-11 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold">{t.avatar}</span>
                </div>
                <div>
                  <span className="text-sm font-bold text-foreground block">{t.name}</span>
                  <span className="text-xs text-muted-foreground">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
