import { Star } from "lucide-react";

const testimonials = [
  { name: "Naveen J.", text: "GharFinder doesn't just sell properties — they create experiences. My family and I are beyond grateful for their assistance in finding our forever home." },
  { name: "Akhil R.", text: "The team truly goes above and beyond. Their attention to detail and commitment to customer satisfaction are unmatched." },
  { name: "Rakesh V.", text: "As a first-time homebuyer, I had many concerns. They patiently guided me through every step, making it smooth and stress-free." },
  { name: "Monica S.", text: "Finding my dream home was a breeze! The team was attentive, professional, and truly understood my needs." },
  { name: "Roopa R.", text: "I was skeptical about property investing until I found GharFinder. Their expertise gave me peace of mind." },
  { name: "Mehak T.", text: "From the moment I contacted them, I knew I was in good hands. They even assisted me in getting a loan." },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-2">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">What Our Clients Say</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-background rounded-xl p-6 border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-sm font-semibold">{t.name[0]}</span>
                </div>
                <span className="text-sm font-medium text-foreground">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
