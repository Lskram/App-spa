import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, MapPin } from "lucide-react";
import heroWellness from "@/assets/hero-wellness.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Your Wellness Journey Starts Here</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Relax Anywhere,
                <span className="text-primary"> Anytime</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Premium massage, spa, and wellness services delivered to your home or favorite location. Experience tranquility on your terms.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="gap-2">
                <Calendar className="h-5 w-5" />
                Book Now
              </Button>
              <Button variant="wellness" size="lg" className="gap-2">
                <MapPin className="h-5 w-5" />
                Browse Services
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold text-foreground">1000+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Therapists</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-2xl font-bold text-foreground">4.9</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-float">
              <img 
                src={heroWellness} 
                alt="Relaxing spa environment" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-card border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-wellness flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">First Session</p>
                  <p className="text-xs text-muted-foreground">20% Off</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
