import { Facebook } from "lucide-react";

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
          
          <div className="flex justify-center gap-6 pt-2">
            <a
              href="https://www.facebook.com/share/g/1H1LEznScH/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300"
              aria-label="Visit our Facebook page"
            >
              <Facebook size={24} />
              <span className="text-sm font-medium">Facebook</span>
            </a>
            <a
              href="https://www.tiktok.com/@kzn.ehailing.coun"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300"
              aria-label="Visit our TikTok page"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
              <span className="text-sm font-medium">TikTok</span>
            </a>
          </div>

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
