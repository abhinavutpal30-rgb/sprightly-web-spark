import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const ContactSection = () => {
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
    <section id="contact" className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gold tracking-[0.3em] text-sm uppercase mb-3">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">Contact Us</h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mt-6" />
          <p className="mt-4 text-primary-foreground/60">
            Please enter the details below and our team will reach out to you.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-5 bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-8"
        >
          <input
            type="text"
            placeholder="Name*"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
          />
          <input
            type="tel"
            placeholder="Phone*"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
          />
          <label className="flex items-start gap-3 text-sm text-primary-foreground/60 cursor-pointer">
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
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
