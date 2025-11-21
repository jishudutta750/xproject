import { Twitter, Youtube, Send, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4 flex items-center gap-1">
              <span className="text-foreground">Ro</span>
              <span className="text-primary">Cart</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              RoCart is the easiest marketplace that can be used in-try with ease! 
              Based centralized in-on-to-game + with great services. 
              Created with care. For top-rated, users + safely "or one items for "a business!"
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors">
                <Send className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Social Media</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">TikTok</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Send a Ticket</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Legal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Affiliate</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Status Page</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 RoCart. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded">VISA</div>
            <div className="px-3 py-1 bg-gray-700 text-white text-xs font-semibold rounded">APPLE PAY</div>
            <div className="px-3 py-1 bg-gray-700 text-white text-xs font-semibold rounded">AMEX</div>
            <div className="px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded">DISCOVER</div>
            <div className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded">MASTERCARD</div>
            <div className="px-3 py-1 bg-gray-700 text-white text-xs font-semibold rounded">GOOGLE PAY</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
