import { useState } from "react";
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
    <section id="overview" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-2">
          A Green Retreat in the Heart of the City
        </h2>
        <div className="flex justify-center my-6">
          <div className="w-16 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start mt-12">
          <div className="space-y-5">
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              Assetz Mizumi Reserve is a luxury township in South Bangalore, spread across ~80 acres
              of meticulously designed landscapes. It offers spacious 3 and 4 BHK residences that
              redefine upscale living.
            </p>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              Surrounded by two serene lakes, each home provides breathtaking views and a tranquil
              retreat. Residents can enjoy a 63,000+ sqft clubhouse, premium amenities, and lush
              green spaces. With seamless connectivity and timeless architecture, designed for those
              who seek exclusivity and elegance.
            </p>
          </div>

          <div className="border border-border p-8">
            <h3 className="font-display text-xl text-foreground text-center mb-6">
              Enquire Now
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name*"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-foreground/30 transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone*"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-foreground/30 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-foreground/30 transition-colors"
              />
              <label className="flex items-start gap-3 text-xs text-muted-foreground cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  className="mt-0.5"
                />
                I agree to be contacted through SMS, Email, WhatsApp and other mediums for knowing
                further details.
              </label>
              <button
                type="submit"
                className="w-full py-3 bg-foreground text-background font-medium text-sm tracking-wide hover:bg-foreground/90 transition-colors uppercase"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
