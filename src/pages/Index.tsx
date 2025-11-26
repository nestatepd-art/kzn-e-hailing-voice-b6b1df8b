import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import MembershipForm from "@/components/MembershipForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <WhatWeDo />
      <Services />
      <MembershipForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
