import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Clock } from "lucide-react";
import hospitalHero from "@/assets/hospital-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0">
        <img 
          src={hospitalHero} 
          alt="Modern Nigerian Hospital" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="relative container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Leading Healthcare in
              <span className="text-medical-blue block">Nigeria</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Providing world-class medical care with cutting-edge technology and compassionate service. 
              Your health is our priority, backed by decades of medical excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl" className="group">
                Book Appointment
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-primary-foreground">
                Our Services
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-card/20 backdrop-blur-sm rounded-lg border border-secondary/20">
                <Heart className="w-8 h-8 text-healing-green mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">Caring</h3>
                <p className="text-sm text-muted-foreground">Compassionate care</p>
              </div>
              <div className="text-center p-4 bg-card/20 backdrop-blur-sm rounded-lg border border-secondary/20">
                <Shield className="w-8 h-8 text-medical-blue mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">Trusted</h3>
                <p className="text-sm text-muted-foreground">Reliable healthcare</p>
              </div>
              <div className="text-center p-4 bg-card/20 backdrop-blur-sm rounded-lg border border-secondary/20">
                <Clock className="w-8 h-8 text-trust-blue mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">24/7</h3>
                <p className="text-sm text-muted-foreground">Always available</p>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right hidden lg:block">
            <div className="bg-gradient-card p-8 rounded-2xl shadow-card-medical border border-secondary/20">
              <h3 className="text-2xl font-bold text-foreground mb-6">Quick Emergency Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-emergency-red/10 rounded-lg border border-emergency-red/20">
                  <div className="w-10 h-10 bg-emergency-red rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">911</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Emergency Line</p>
                    <p className="text-sm text-muted-foreground">24/7 Emergency Response</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-medical-blue/10 rounded-lg border border-medical-blue/20">
                  <div className="w-10 h-10 bg-medical-blue rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">General Inquiry</p>
                    <p className="text-sm text-muted-foreground">+234 123 456 7890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;