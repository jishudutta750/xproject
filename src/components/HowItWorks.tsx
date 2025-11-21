import { motion } from "framer-motion";
import { Card } from "./ui/card";

const steps = [
  {
    title: "Choose Your Game",
    description: "In any other game on from your marketplace includes, & start to browse.",
    icon: "🎮",
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/30"
  },
  {
    title: "Follow the Catalog",
    description: "A wide ranges offer on great and near deliver& finishes. Our inventory has game.",
    icon: "📋",
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/30"
  },
  {
    title: "Instant Delivery",
    description: "Securely is one game deal & get paid one one-to-market-at-us if.",
    icon: "🚀",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/30"
  },
  {
    title: "24/7 Support",
    description: "Our happy-to-from-get our yet one-on-one-delivery, backer's.",
    icon: "💬",
    color: "from-red-500/20 to-red-500/5",
    border: "border-red-500/30"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            How <span className="text-primary">Rocart</span> Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Buying whoever buyin fun & it integrated & effective Safe, 100% even-deliverable. 
            Here's how then can get started.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className={`bg-gradient-to-br ${step.color} border ${step.border} p-6`}>
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{step.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
