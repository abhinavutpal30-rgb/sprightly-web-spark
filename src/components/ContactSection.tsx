import { useState } from "react";
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
    <section id="contact" className="py-20 px-6 bg-foreground text-background">
      <div className="max-w-lg mx-auto">
        <h2 className="font-display text-3xl text-center mb-2">Contact Us</h2>
        <div className="flex justify-center my-6">
          <div className="w-16 h-px bg-background/20" />
        </div>
        <p className="text-center text-background/60 text-sm mb-10">
          Enter your details and our team will reach out to you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name*"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 bg-background/10 border border-background/20 text-background placeholder:text-background/40 text-sm focus:outline-none focus:border-background/40 transition-colors"
          />
          <input
            type="tel"
            placeholder="Phone*"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 bg-background/10 border border-background/20 text-background placeholder:text-background/40 text-sm focus:outline-none focus:border-background/40 transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 bg-background/10 border border-background/20 text-background placeholder:text-background/40 text-sm focus:outline-none focus:border-background/40 transition-colors"
          />
          <label className="flex items-start gap-3 text-xs text-background/50 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="mt-0.5"
            />
            I agree to be contacted through SMS, Email, WhatsApp and other mediums.
          </label>
          <button
            type="submit"
            className="w-full py-3 bg-background text-foreground font-medium text-sm tracking-wide hover:bg-background/90 transition-colors uppercase"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
