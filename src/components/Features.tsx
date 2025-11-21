import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Check } from "lucide-react";

const features = [
  {
    title: "Fast & Reliable",
    description: "Receive orders in just minutes! Our fast, user-safe & tested exchange lets it start, No annoying bends, in speed-limited.",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/30",
    icon: "⚡"
  },
  {
    title: "Fast & Reliable",
    description: "Browse a world of in-cart deliver! Choose items on Sale Rocket, game safe, in no way like a fully & by-product the same.",
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/30",
    icon: "🔒"
  },
  {
    title: "Fast & Reliable",
    description: "Our best orders in-cart or will deliver! Choose items in Safety, find safe, low no worry a live & it, you wish in Rocart.",
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/30",
    icon: "🎯"
  },
  {
    title: "Fast & Reliable",
    description: "Browse a world in-cart deliver! Choose items is our game, game safe, up out worst & future-e product the way that.",
    color: "from-red-500/20 to-red-500/5",
    border: "border-red-500/30",
    icon: "🎮"
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose <span className="text-primary">Rocart</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enjoy lightning-fast delivery, exclusively curated pick, safe & public buyer shopping 
            experience for all your own needs. Here's why we're the superior choice than others.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className={`bg-gradient-to-br ${feature.color} border ${feature.border} p-6 h-full hover:scale-105 transition-transform duration-300`}>
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-2xl">{feature.icon}</div>
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
