import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-medical-navy border-t border-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">H+</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Africare</h3>
                <p className="text-xs text-muted-foreground">Excellence in Medical Care</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Committed to providing world-class healthcare services to the people of Nigeria 
              with compassion, innovation, and excellence.
            </p>
            <div className="flex items-center space-x-2 text-healing-green">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Caring for Nigeria since 1998</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-medical-blue transition-colors">Home</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-medical-blue transition-colors">Services</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-medical-blue transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-medical-blue transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-medical-blue transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-medical-blue mt-1" />
                <span className="text-sm text-muted-foreground">
                  123 Medical Center Drive<br />
                  Victoria Island, Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-medical-blue" />
                <span className="text-sm text-muted-foreground">+234 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-medical-blue" />
                <span className="text-sm text-muted-foreground">info@africare.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary/20 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Africare. All rights reserved. | Licensed by Nigerian Medical Association
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;