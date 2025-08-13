import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Brain, 
  Heart, 
  Baby, 
  Bone, 
  Eye, 
  Pill,
  Microscope 
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Cardiology",
    description: "Advanced heart care with state-of-the-art cardiac facilities and expert cardiologists.",
    features: ["ECG Testing", "Heart Surgery", "Preventive Care"]
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Comprehensive neurological care for brain and nervous system conditions.",
    features: ["Brain Imaging", "Stroke Care", "Neurosurgery"]
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Specialized healthcare for children from newborns to adolescents.",
    features: ["Child Immunization", "Growth Monitoring", "Pediatric Surgery"]
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description: "Expert treatment for bone, joint, and musculoskeletal conditions.",
    features: ["Joint Replacement", "Sports Medicine", "Trauma Care"]
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Complete eye care services from routine checkups to complex surgeries.",
    features: ["Cataract Surgery", "Retinal Care", "Vision Correction"]
  },
  {
    icon: Microscope,
    title: "Laboratory",
    description: "Advanced diagnostic testing with modern laboratory equipment.",
    features: ["Blood Tests", "Pathology", "Microbiology"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Medical Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive healthcare services delivered by experienced medical professionals 
            using the latest technology and treatment methods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-secondary/20 shadow-card-medical hover:shadow-medical transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-medical-blue/20 transition-colors">
                  <service.icon className="w-8 h-8 text-medical-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 text-center">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-healing-green rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="medical" size="xl">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;