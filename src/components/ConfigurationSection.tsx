import { useState } from "react";
import floorplan3bhkT1 from "@/assets/floorplan-3bhk-t1.webp";
import floorplan3bhkT2 from "@/assets/floorplan-3bhk-t2.webp";
import floorplan4bhk from "@/assets/floorplan-4bhk.webp";

const configs = [
  { type: "3 BHK — Type 1", sbua: "1,900 Sq.Ft.", carpet: "1,648 Sq.Ft.", floorplan: floorplan3bhkT1 },
  { type: "3 BHK — Type 2", sbua: "2,164 Sq.Ft.", carpet: "1,431 Sq.Ft.", floorplan: floorplan3bhkT2 },
  { type: "4 BHK", sbua: "2,476 Sq.Ft.", carpet: "1,869 Sq.Ft.", floorplan: floorplan4bhk },
];

const ConfigurationSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="configuration" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-2">
          Configuration
        </h2>
        <div className="flex justify-center my-6">
          <div className="w-16 h-px bg-border" />
        </div>

        {/* Table view */}
        <div className="border border-border mb-12 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-secondary text-foreground">
                <th className="text-left py-3 px-5 font-medium">Type</th>
                <th className="text-left py-3 px-5 font-medium">Area (SBUA)</th>
                <th className="text-left py-3 px-5 font-medium">Price</th>
              </tr>
            </thead>
            <tbody>
              {configs.map((c, i) => (
                <tr key={c.type} className="border-t border-border hover:bg-secondary/50 transition-colors">
                  <td className="py-3 px-5 text-foreground">{c.type}</td>
                  <td className="py-3 px-5 text-muted-foreground">{c.sbua}</td>
                  <td className="py-3 px-5">
                    <a href="#contact" className="text-foreground underline underline-offset-2 text-xs font-medium">
                      Click Here
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-1 mb-8">
          {configs.map((c, i) => (
            <button
              key={c.type}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2 text-sm transition-colors ${
                activeTab === i
                  ? "bg-foreground text-background"
                  : "bg-secondary text-foreground hover:bg-border"
              }`}
            >
              {c.type}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="border border-border overflow-hidden">
            <img
              src={configs[activeTab].floorplan}
              alt={`${configs[activeTab].type} Floor Plan`}
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <h3 className="font-display text-2xl text-foreground">
              {configs[activeTab].type}
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-muted-foreground text-sm">Super Built-Up Area</span>
                <span className="font-display text-xl text-foreground">{configs[activeTab].sbua}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-muted-foreground text-sm">Carpet Area</span>
                <span className="font-display text-xl text-foreground">{configs[activeTab].carpet}</span>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-foreground text-background text-sm font-medium tracking-wide hover:bg-foreground/90 transition-colors"
            >
              Check Price
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfigurationSection;
