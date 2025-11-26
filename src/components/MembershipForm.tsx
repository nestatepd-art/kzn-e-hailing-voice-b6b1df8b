import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { UserPlus } from "lucide-react";

const MembershipForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    registrationNumber: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    // Success toast
    toast({
      title: "Application Submitted!",
      description: "Thank you for joining the KZN E-hailing Council. We'll be in touch soon.",
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      vehicleMake: "",
      vehicleModel: "",
      vehicleYear: "",
      registrationNumber: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="membership-form" className="py-20 sm:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Join Our Council
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Register to become a member of the KwaZulu-Natal E-hailing Council
            </p>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <UserPlus className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Membership Application</CardTitle>
              <CardDescription>
                Fill in your details to join our community of e-hailing operators
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="071 234 5678"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      placeholder="Your residential address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground">Vehicle Information</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="vehicleMake">Vehicle Make</Label>
                      <Input
                        id="vehicleMake"
                        name="vehicleMake"
                        placeholder="e.g., Toyota"
                        value={formData.vehicleMake}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="vehicleModel">Vehicle Model</Label>
                      <Input
                        id="vehicleModel"
                        name="vehicleModel"
                        placeholder="e.g., Corolla"
                        value={formData.vehicleModel}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="vehicleYear">Year</Label>
                      <Input
                        id="vehicleYear"
                        name="vehicleYear"
                        type="number"
                        placeholder="2020"
                        value={formData.vehicleYear}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="registrationNumber">Registration Number</Label>
                      <Input
                        id="registrationNumber"
                        name="registrationNumber"
                        placeholder="ABC 123 GP"
                        value={formData.registrationNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MembershipForm;
