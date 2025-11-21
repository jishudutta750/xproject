import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrendingProducts from "@/components/TrendingProducts";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <TrendingProducts />
      <Testimonials />
      <Features />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
