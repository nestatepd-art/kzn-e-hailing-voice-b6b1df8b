const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold text-foreground">
            KwaZulu-Natal E-hailing Council
          </h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Advocating for better working conditions and representing the interests of our operator community across KwaZulu-Natal
          </p>
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} KZN E-hailing Council. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
