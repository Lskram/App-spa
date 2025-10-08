import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smile, Heart, Zap, Wind } from "lucide-react";

const moods = [
  {
    icon: Smile,
    title: "Stressed",
    description: "Need to unwind",
    color: "text-accent",
  },
  {
    icon: Heart,
    title: "Energize",
    description: "Boost vitality",
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "Recover",
    description: "Muscle relief",
    color: "text-primary",
  },
  {
    icon: Wind,
    title: "Balance",
    description: "Inner peace",
    color: "text-accent",
  },
];

const MoodSelector = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            How are you feeling today?
          </h2>
          <p className="text-muted-foreground text-lg">
            Let us recommend the perfect ritual for your mood
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {moods.map((mood) => {
            const Icon = mood.icon;
            return (
              <Card
                key={mood.title}
                className="p-6 hover:shadow-card transition-smooth cursor-pointer border-2 border-border hover:border-primary/30 bg-gradient-card group"
              >
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary-light flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <Icon className={`h-8 w-8 ${mood.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {mood.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {mood.description}
                    </p>
                  </div>
                  <Button variant="wellness" size="sm" className="w-full">
                    Get Recommendations
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

export default MoodSelector;
