import { ChevronDown, Globe } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-bold flex items-center gap-1">
            <span className="text-foreground">Ro</span>
            <span className="text-primary">Cart</span>
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:bg-card-bg transition-colors">
            <span className="text-sm text-foreground">Choose a game</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-card transition-colors">
            <Globe className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-foreground">English/USD</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </button>
          
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6">
            Buy Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
