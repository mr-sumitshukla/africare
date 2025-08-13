import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-medical-navy/95 backdrop-blur-sm border-b border-secondary/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">H+</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Africare</h1>
              <p className="text-xs text-muted-foreground">Excellence in Medical Care</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-foreground hover:text-medical-blue transition-colors">Home</a>
            <a href="#services" className="text-foreground hover:text-medical-blue transition-colors">Services</a>
            <a href="#about" className="text-foreground hover:text-medical-blue transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-medical-blue transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+234 123 456 7890</span>
            </div>
            <Button variant="emergency" size="sm">
              Emergency
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;