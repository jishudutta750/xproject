import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Star, Check } from "lucide-react";

const testimonials = [
  {
    name: "Hikaru T.",
    rating: 5,
    verified: true,
    text: "Love them! A true haven of epic whales on go-away trading.",
  },
  {
    name: "Michael J.",
    rating: 5,
    verified: true,
    text: "Best platform I have ever used. Got my items super fast."
  },
  {
    name: "Sarah K.",
    rating: 5,
    verified: true,
    text: "Their platform is best verified, getting items was insane to keep."
  },
  {
    name: "Hikaru S.",
    rating: 5,
    verified: true,
    text: "Most premium cheap services i got tried and i've been satisfied."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Trusted with by <span className="text-primary">5,000+ Happy Buyers</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">RATING 4.8</span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy players! We treat from 3000+ in-game items.
            In real/hybrid shipping, it maintains 95% by one transactions, so thank you carefully, 
            take care of safe listing/improved on Tektro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border p-6 h-full">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                {testimonial.verified && (
                  <div className="flex items-center gap-1 mb-3 text-primary text-xs font-semibold">
                    <Check className="w-3 h-3" />
                    Verified
                  </div>
                )}

                <p className="text-sm text-foreground mb-4">{testimonial.text}</p>
                
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
