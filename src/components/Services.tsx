import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, Newspaper, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Industry Relations",
      description: "Building strong partnerships with e-hailing platforms, industry peers, and business associations to foster collaboration."
    },
    {
      icon: Shield,
      title: "Rights Protection",
      description: "Fighting for fair treatment, better working conditions, and equitable policies for all e-hailing operators in KZN."
    },
    {
      icon: Newspaper,
      title: "Media Relations",
      description: "Engaging with media houses to raise awareness about operator issues and amplify the voice of our community."
    },
    {
      icon: TrendingUp,
      title: "Capacity Building",
      description: "Providing support, information, and resources to help operators succeed in the e-hailing industry."
    }
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            We engage with various stakeholders: Industry peers, business, government, media houses, platform providers, associations and trade unions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
