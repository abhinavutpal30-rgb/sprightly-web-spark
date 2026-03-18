import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-36 pb-20 px-6 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-7xl mx-auto text-center relative">
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">Contact Us</h1>
          <p className="text-muted-foreground text-[15px] mt-4 max-w-lg mx-auto">
            Ready to find your dream home? Reach out and let us help you get started.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-20">
          <ScrollReveal direction="left">
            <div>
              <h2 className="font-display text-3xl text-foreground mb-5">Let's Connect</h2>
              <p className="text-muted-foreground text-[15px] leading-relaxed mb-10">
                Whether you're looking to buy, sell, or invest, our team is here to help. Book a free consultation or simply drop us a message.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: "+91 99999 99999", href: "tel:+919999999999" },
                  { icon: Mail, label: "Email", value: "info@gharfinder.com", href: "mailto:info@gharfinder.com" },
                  { icon: MapPin, label: "Address", value: "123 Business Park, Whitefield, Bangalore - 560066" },
                  { icon: Clock, label: "Hours", value: "Mon – Sat: 9:00 AM – 7:00 PM" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/8 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                      <c.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-0.5">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-[15px] text-muted-foreground hover:text-primary transition-colors">
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-[15px] text-muted-foreground">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-secondary rounded-2xl p-8 md:p-10 shadow-soft">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-3">Thank You!</h3>
                  <p className="text-muted-foreground text-[15px]">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-2xl text-foreground mb-1">Book an Appointment</h3>
                  <p className="text-muted-foreground text-sm mb-6">Fill in the details below and we'll reach out shortly.</p>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      className="px-4 py-3.5 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      className="px-4 py-3.5 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                  />
                  <textarea
                    rows={4}
                    placeholder="Tell us what you're looking for..."
                    className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-premium"
                  >
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
