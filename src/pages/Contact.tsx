import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-2">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground">Contact Us</h1>
          <p className="text-muted-foreground text-sm mt-4 max-w-lg mx-auto">
            Ready to find your dream home? Reach out and let us help you get started.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-2xl text-foreground mb-6">Let's Connect</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Whether you're looking to buy, sell, or invest, our team is here to help. Book a free consultation or simply drop us a message.
            </p>

            <div className="space-y-5">
              {[
                { icon: Phone, label: "Phone", value: "+91 99999 99999", href: "tel:+919999999999" },
                { icon: Mail, label: "Email", value: "info@gharfinder.com", href: "mailto:info@gharfinder.com" },
                { icon: MapPin, label: "Address", value: "123 Business Park, Whitefield, Bangalore - 560066" },
                { icon: Clock, label: "Hours", value: "Mon – Sat: 9:00 AM – 7:00 PM" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-secondary rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display text-xl text-foreground mb-2">Book an Appointment</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    className="px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    className="px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <textarea
                  rows={4}
                  placeholder="Tell us what you're looking for..."
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
