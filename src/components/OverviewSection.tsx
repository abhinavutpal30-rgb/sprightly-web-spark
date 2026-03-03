import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const OverviewSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [agreed, setAgreed] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    toast.success("Thank you! Our team will contact you shortly.");
    setForm({ name: "", phone: "", email: "" });
  };

  return (
    <section id="overview" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            A Green Retreat in the Heart of the City
          </h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Assetz Mizumi Reserve is a luxury township in South Bangalore, spread across ~80 acres
              of meticulously designed landscapes. It offers spacious 3 and 4 BHK residences that
              redefine upscale living.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Surrounded by two serene lakes, each home provides breathtaking views and a tranquil
              retreat. Residents can enjoy a 63,000+ sqft clubhouse, premium amenities, and lush
              green spaces. With seamless connectivity and timeless architecture, Designed for those
              who seek exclusivity and elegance.
            </p>
          </motion.div>

          {/* Enquire Now form — matching reference layout */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-6">
                Enquire Now
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Name*"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone*"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                />
                <label className="flex items-start gap-3 text-sm text-muted-foreground cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    className="mt-0.5 accent-accent"
                  />
                  I agree to be contacted through SMS, Email, WhatsApp and other mediums for knowing
                  further details.
                </label>
                <button
                  type="submit"
                  className="w-full py-3 bg-accent text-accent-foreground font-medium rounded text-lg hover:brightness-110 transition-all tracking-wide"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
