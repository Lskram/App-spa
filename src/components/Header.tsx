import { Button } from "@/components/ui/button";
import { Menu, Bell, User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-wellness flex items-center justify-center">
                <span className="text-xl font-bold text-primary">R</span>
              </div>
              <h1 className="text-2xl font-bold text-primary">RLAX</h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
                Services
              </a>
              <a href="#wellness" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
                Wellness Hub
              </a>
              <a href="#shop" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
                Shop
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
