import { Star, Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  { name: "Naveen J.", role: "Homeowner", text: "GharFinder doesn't just sell properties — they create experiences. My family and I are beyond grateful for their assistance in finding our forever home." },
  { name: "Akhil R.", role: "Investor", text: "The team truly goes above and beyond. Their attention to detail and commitment to customer satisfaction are unmatched in the industry." },
  { name: "Rakesh V.", role: "First-time Buyer", text: "As a first-time homebuyer, I had many concerns. They patiently guided me through every step, making it smooth and stress-free." },
  { name: "Monica S.", role: "Homeowner", text: "Finding my dream home was a breeze! The team was attentive, professional, and truly understood my needs from day one." },
  { name: "Roopa R.", role: "Investor", text: "I was skeptical about property investing until I found GharFinder. Their expertise gave me peace of mind and great returns." },
  { name: "Mehak T.", role: "Homeowner", text: "From the moment I contacted them, I knew I was in good hands. They even assisted me in getting a loan approved quickly." },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">Testimonials</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">What Our Clients Say</h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.08}>
              <div className="bg-background rounded-2xl p-7 border border-border hover:shadow-elevated transition-all duration-500 h-full flex flex-col">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-foreground/80 text-[15px] leading-relaxed mb-6 flex-1 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-5 border-t border-border/50">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-sm font-bold">{t.name[0]}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-foreground block">{t.name}</span>
                    <span className="text-xs text-muted-foreground">{t.role}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
