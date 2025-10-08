import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-wellness flex items-center justify-center">
                <span className="text-xl font-bold text-primary">R</span>
              </div>
              <h3 className="text-xl font-bold text-primary">RLAX</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium wellness services delivered to your preferred location. Relax anywhere, anytime.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Massage</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Spa Treatment</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Hair Styling</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Makeup</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Become a Therapist</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Wellness Hub</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Shop</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 RLAX. All rights reserved. | Made with <Sparkles className="inline h-4 w-4 text-accent" /> for your wellness
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
