import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  Ambulance 
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us for appointments, inquiries, or emergency services. 
            We're here to serve you 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-gradient-card border-secondary/20 shadow-card-medical">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-medical-blue" />
                  <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  123 Medical Center Drive<br />
                  Victoria Island, Lagos<br />
                  Nigeria
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-secondary/20 shadow-card-medical">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-medical-blue" />
                  <span>Phone Numbers</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Ambulance className="w-4 h-4 text-emergency-red" />
                  <span className="text-sm text-muted-foreground">Emergency:</span>
                  <span className="font-semibold text-emergency-red">+234 911</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-medical-blue" />
                  <span className="text-sm text-muted-foreground">Appointments:</span>
                  <span className="text-foreground">+234 123 456 7890</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-secondary/20 shadow-card-medical">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-medical-blue" />
                  <span>Operating Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Mon - Fri:</span>
                  <span className="text-foreground">24 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Weekend:</span>
                  <span className="text-foreground">24 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Emergency:</span>
                  <span className="text-healing-green font-semibold">24/7</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-secondary/20 shadow-card-medical">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Full Name
                      </label>
                      <Input 
                        placeholder="Enter your full name"
                        className="bg-background/50 border-secondary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address
                      </label>
                      <Input 
                        type="email"
                        placeholder="Enter your email"
                        className="bg-background/50 border-secondary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number
                    </label>
                    <Input 
                      placeholder="Enter your phone number"
                      className="bg-background/50 border-secondary"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <Input 
                      placeholder="What is this regarding?"
                      className="bg-background/50 border-secondary"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Please describe how we can help you..."
                      rows={5}
                      className="bg-background/50 border-secondary"
                    />
                  </div>
                  
                  <Button variant="medical" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Banner */}
        <Card className="bg-emergency-red/10 border-emergency-red/20 shadow-card-medical">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Ambulance className="w-8 h-8 text-emergency-red animate-pulse-glow" />
              <h3 className="text-2xl font-bold text-foreground">Medical Emergency?</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              For immediate medical attention, call our emergency line or visit our emergency department.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="emergency" size="lg">
                Call Emergency: +234 911
              </Button>
              <Button variant="outline" size="lg" className="border-emergency-red text-emergency-red hover:bg-emergency-red hover:text-primary-foreground">
                Emergency Department Info
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;