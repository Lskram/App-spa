import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import massageService from "@/assets/massage-service.jpg";
import spaService from "@/assets/spa-service.jpg";
import hairService from "@/assets/hair-service.jpg";
import makeupService from "@/assets/makeup-service.jpg";

const categories = [
  {
    title: "Massage",
    description: "Traditional Thai, Swedish, Deep Tissue",
    image: massageService,
    price: "From ฿500",
    duration: "60-90 min",
  },
  {
    title: "Spa Treatment",
    description: "Aromatherapy, Hot Stone, Body Scrub",
    image: spaService,
    price: "From ฿800",
    duration: "90-120 min",
  },
  {
    title: "Hair Styling",
    description: "Cut, Color, Treatment, Styling",
    image: hairService,
    price: "From ฿600",
    duration: "60-120 min",
  },
  {
    title: "Makeup",
    description: "Special Events, Bridal, Everyday",
    image: makeupService,
    price: "From ฿1,200",
    duration: "45-90 min",
  },
];

const ServiceCategories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional wellness services at your convenience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {categories.map((category) => (
            <Card
              key={category.title}
              className="overflow-hidden hover:shadow-card transition-smooth border-2 border-border hover:border-primary/30 bg-card group cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-primary">
                      {category.price}
                    </span>
                    <span className="text-muted-foreground">
                      {category.duration}
                    </span>
                  </div>
                </div>
                <Button variant="wellness" className="w-full gap-2">
                  View Services
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
