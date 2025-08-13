import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Clock, Globe } from "lucide-react";
import medicalTeam from "@/assets/medical-team.jpg";

const stats = [
  {
    icon: Users,
    number: "50+",
    label: "Expert Doctors",
    description: "Highly qualified medical professionals"
  },
  {
    icon: Award,
    number: "25+",
    label: "Years Experience",
    description: "Serving Nigeria's healthcare needs"
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Emergency Care",
    description: "Round-the-clock medical services"
  },
  {
    icon: Globe,
    number: "100K+",
    label: "Patients Served",
    description: "Lives touched across Nigeria"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              About Africare
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Established with a vision to provide world-class healthcare services to the people of Nigeria, 
              we have been at the forefront of medical innovation and patient care for over two decades.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our state-of-the-art facility combines modern medical technology with the warmth of African 
              hospitality, ensuring every patient receives comprehensive care in a comfortable environment.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-healing-green rounded-full" />
                <span className="text-foreground">ISO 9001:2015 Certified Healthcare Facility</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-healing-green rounded-full" />
                <span className="text-foreground">Accredited by Nigerian Medical Association</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-healing-green rounded-full" />
                <span className="text-foreground">Advanced Medical Technology & Equipment</span>
              </div>
            </div>

            <Button variant="medical" size="lg">
              Learn More About Us
            </Button>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative">
              <img 
                src={medicalTeam} 
                alt="Our Medical Team" 
                className="w-full h-96 object-cover rounded-2xl shadow-medical"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-medical-navy/60 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                  Our Expert Team
                </h3>
                <p className="text-primary-foreground/90">
                  Dedicated professionals committed to your health and wellbeing
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-secondary/20 shadow-card-medical text-center group hover:shadow-medical transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-medical-blue/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-medical-blue" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">{stat.number}</h3>
                <h4 className="text-lg font-semibold text-foreground mb-1">{stat.label}</h4>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;