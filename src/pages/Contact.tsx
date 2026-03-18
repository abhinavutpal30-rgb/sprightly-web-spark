import { Phone, Mail, MapPin, Clock, Send, ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import citySkyline from "@/assets/city-skyline.jpg";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-foreground" />
        <motion.div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${citySkyline})` }} initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 to-foreground/90" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div initial={{ width: 0 }} animate={{ width: 60 }} transition={{ duration: 0.8, delay: 0.3 }} className="h-[2px] bg-primary mx-auto mb-8" />
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-5">Get In Touch</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="font-display text-4xl md:text-5xl lg:text-7xl text-background leading-tight">
            Let's Start a <span className="text-primary italic">Conversation</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="text-background/40 text-base mt-6 max-w-lg mx-auto">
            Ready to find your dream home? Reach out and let us help you get started.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-14 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Phone, label: "Call Us", value: "+91 99999 99999", href: "tel:+919999999999" },
              { icon: Mail, label: "Email Us", value: "info@gharfinder.com", href: "mailto:info@gharfinder.com" },
              { icon: MapPin, label: "Visit Us", value: "123 Business Park, Whitefield, Bangalore" },
              { icon: Clock, label: "Working Hours", value: "Mon – Sat: 9AM – 7PM" },
            ].map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-500"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                  <c.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <p className="text-sm font-bold text-foreground mb-1">{c.label}</p>
                {c.href ? (
                  <a href={c.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{c.value}</a>
                ) : (
                  <p className="text-sm text-muted-foreground">{c.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-28 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-[2px] w-12 bg-primary mb-6" />
            <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Book Appointment</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 leading-tight">
              Let's Find Your <span className="text-primary italic">Perfect</span> Home
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-10">
              Whether you're looking to buy, sell, or invest, our team is here to help. Fill in the form and we'll get back to you within 24 hours.
            </p>

            <div className="bg-secondary rounded-2xl p-8 md:p-10 border border-border">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-3">Thank You!</h3>
                  <p className="text-muted-foreground text-sm">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" required className="px-4 py-3.5 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all" />
                    <input type="text" placeholder="Last Name" required className="px-4 py-3.5 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all" />
                  </div>
                  <input type="email" placeholder="Email Address" required className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all" />
                  <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all" />
                  <select className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all">
                    <option>I'm interested in...</option>
                    <option>Buying a Property</option>
                    <option>Selling a Property</option>
                    <option>Investment Consulting</option>
                    <option>Loan Assistance</option>
                    <option>Interior Design</option>
                  </select>
                  <textarea rows={4} placeholder="Tell us what you're looking for..." className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all resize-none" />
                  <button type="submit" className="group w-full flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-premium">
                    Submit Enquiry
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            {/* Map placeholder */}
            <div className="flex-1 bg-secondary rounded-2xl overflow-hidden border border-border min-h-[400px] relative">
              <img src={citySkyline} alt="Location" className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-8 text-center shadow-elevated">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-display text-lg text-foreground mb-1">Visit Our Office</p>
                  <p className="text-muted-foreground text-sm">123 Business Park, Whitefield<br />Bangalore - 560066</p>
                </div>
              </div>
            </div>

            {/* Quick contact CTA */}
            <div className="bg-foreground rounded-2xl p-8 text-center">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl text-background mb-2">Prefer to Talk?</h3>
              <p className="text-background/40 text-sm mb-5">Call us directly for an immediate consultation.</p>
              <a href="tel:+919999999999" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:shadow-premium transition-all duration-500">
                <Phone className="w-4 h-4" /> +91 99999 99999
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
