import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Megaphone, Shield, Handshake } from "lucide-react";

const WhatWeDo = () => {
  const features = [
    {
      icon: Heart,
      title: "Community First",
      description: "We put our operator community at the heart of everything we do"
    },
    {
      icon: Megaphone,
      title: "Strong Advocacy",
      description: "Your voice amplified through effective engagement and representation"
    },
    {
      icon: Shield,
      title: "Protection",
      description: "Fighting for fair working conditions and operator rights"
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "Building bridges with government, industry, and stakeholders"
    }
  ];

  return (
    <section id="what-we-do" className="py-20 sm:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What We Do
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Comprehensive advocacy and support services for the e-hailing operator community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
