import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Calendar, Sparkles } from "lucide-react";

const timeSlots = [
  {
    icon: Clock,
    title: "Now",
    subtitle: "Next available",
    time: "In 30 mins",
  },
  {
    icon: Calendar,
    title: "Today",
    subtitle: "This evening",
    time: "6:00 PM",
  },
  {
    icon: Sparkles,
    title: "This Weekend",
    subtitle: "Saturday",
    time: "10:00 AM",
  },
];

const QuickBooking = () => {
  return (
    <section className="py-16 bg-gradient-wellness">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Quick Booking in 3 Taps
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose your preferred time and we'll find the perfect match
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {timeSlots.map((slot) => {
            const Icon = slot.icon;
            return (
              <Card
                key={slot.title}
                className="p-8 hover:shadow-float transition-smooth cursor-pointer border-2 border-border hover:border-primary bg-card group"
              >
                <div className="text-center space-y-6">
                  <div className="mx-auto w-20 h-20 rounded-full bg-gradient-wellness flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {slot.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {slot.subtitle}
                    </p>
                    <p className="text-lg font-semibold text-primary">
                      {slot.time}
                    </p>
                  </div>
                  <Button variant="hero" size="lg" className="w-full">
                    Book {slot.title}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickBooking;
