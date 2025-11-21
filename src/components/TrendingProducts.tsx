import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { ChevronRight } from "lucide-react";

import raccoon from "@/assets/raccoon.png";
import queenBee from "@/assets/queen-bee.png";
import redGun from "@/assets/red-gun.png";
import sniperRifle from "@/assets/sniper-rifle.png";
import octopus from "@/assets/octopus.png";
import pinkCube from "@/assets/pink-cube.png";
import elephant from "@/assets/elephant.png";
import cow from "@/assets/cow.png";

const categories = [
  { 
    name: "Grow A Garden", 
    icon: "🌱",
    items: [
      { name: "RACCOON", price: "$15", image: raccoon },
      { name: "QUEEN BEE", price: "$10", image: queenBee }
    ],
    borderColor: "border-emerald-500/50",
    buttonBg: "bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/30"
  },
  { 
    name: "MM2", 
    icon: "🔪",
    items: [
      { name: "BACCOON", price: "$15", image: redGun },
      { name: "GINGERSCOPE", price: "$10", image: sniperRifle }
    ],
    borderColor: "border-red-500/50",
    buttonBg: "bg-red-500/10 hover:bg-red-500/20 border-red-500/30"
  },
  { 
    name: "Steal A brainrot", 
    icon: "🎮",
    items: [
      { name: "BACCOON", price: "$15", image: octopus },
      { name: "QUEEN BEE", price: "$10", image: pinkCube }
    ],
    borderColor: "border-purple-500/50",
    buttonBg: "bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/30"
  },
  { 
    name: "Adopt Me", 
    icon: "🐾",
    items: [
      { name: "BACCOON", price: "$15", image: elephant },
      { name: "QUEEN BEE", price: "$10", image: cow }
    ],
    borderColor: "border-cyan-500/50",
    buttonBg: "bg-cyan-500/10 hover:bg-cyan-500/20 border-cyan-500/30"
  },
];

const TrendingProducts = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-32 bg-border" />
            <h2 className="text-4xl font-bold text-foreground">Trending Now</h2>
            <div className="h-px w-32 bg-border" />
          </div>
          <p className="text-muted-foreground text-sm">
            Items moving really quickly right now <br />
            Most users are active on their catalog pages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className={`bg-card border ${category.borderColor} hover:border-primary/50 transition-all duration-300 overflow-hidden group`}>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                      <span className="text-lg">{category.icon}</span>
                    </div>
                    <h3 className="font-semibold text-foreground">{category.name}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="aspect-square bg-secondary/50 rounded-lg border border-border group-hover:border-primary/30 transition-colors p-2 flex items-center justify-center overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-xs font-semibold text-foreground uppercase tracking-wide">{item.name}</p>
                          <p className="text-sm font-bold text-primary">{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-2.5 px-4 rounded-lg border ${category.buttonBg} text-foreground text-sm font-semibold transition-all flex items-center justify-center gap-2 group-hover:gap-3`}>
                    Visit Market
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
