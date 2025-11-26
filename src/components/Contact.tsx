import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      details: ["F355 Ntombela Road", "KwaMashu", "Durban 4360"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["071 537 0430"],
      link: "tel:0715370430"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@ehailingcouncil.org.za"],
      link: "mailto:info@ehailingcouncil.org.za"
    },
    {
      icon: Globe,
      title: "Website",
      details: ["www.ehailingcouncil.org.za"],
      link: "https://www.ehailingcouncil.org.za"
    }
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Are you an e-hailing operator in KZN? Connect with us to be part of a community that's driving change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {info.link ? (
                  <a 
                    href={info.link}
                    className="text-muted-foreground hover:text-primary transition-colors block"
                  >
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm leading-relaxed">{detail}</p>
                    ))}
                  </a>
                ) : (
                  info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground leading-relaxed">
                      {detail}
                    </p>
                  ))
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
