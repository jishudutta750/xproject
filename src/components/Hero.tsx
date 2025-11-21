import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import heroImage from "@/assets/hero-character.png";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Buy Your Favorite Items <br />
              <span className="text-primary">Fast, Safe, and Easy</span>
              <br />
              with RoCart!
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              RoCart: the fastest, safer, & popular buying place with an unmatched delivery. 
              Our offers are limited & wonderful. Whether you want to buy, integrate, shop, we're here to 
              ensure a smooth, flexible, and safe deal.
            </p>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 gap-2">
              <ShoppingCart className="w-5 h-5" />
              Start Buying
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img 
              src={heroImage} 
              alt="Gaming Character" 
              className="w-full max-w-2xl mx-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
