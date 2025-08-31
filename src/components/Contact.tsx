import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "shubhangigaikwad1803@gmail.com",
      link: "mailto:shubhangigaikwad1803@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 9075531068",
      link: "tel:+91 9075531068"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Sambhajinagar, Maharashtra",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      url: "https://github.com/shubh1803"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn", 
      url: "https://www.linkedin.com/in/shubhangi-gaikwad123/"
    }
  ];

  return (
    <section className="py-20 gradient-hero" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <div className="w-20 h-1 gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project or opportunity. I'm always open to interesting conversations and collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 gradient-secondary hover:glow-primary transition-smooth">
                    <div className="flex items-center gap-4">
                      <div className="p-3 gradient-primary rounded-lg text-primary-foreground">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-smooth"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-muted-foreground">{info.value}</span>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    asChild
                    className="hover:glow-primary transition-smooth hover:scale-105"
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      {social.icon}
                      <span className="ml-2">{social.title}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 gradient-secondary">
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            <form 
  action="https://formspree.io/f/xkgvbrvq"  // 🔹 replace with your Formspree ID
  method="POST"
  className="space-y-6"
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label htmlFor="name" className="block text-sm font-medium mb-2">
        Name
      </label>
      <Input
        id="name"
        name="name"
        placeholder="Your Name"
        required
        className="bg-background border-border focus:border-primary"
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium mb-2">
        Email
      </label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="your.email@example.com"
        required
        className="bg-background border-border focus:border-primary"
      />
    </div>
  </div>
  
  <div>
    <label htmlFor="subject" className="block text-sm font-medium mb-2">
      Subject
    </label>
    <Input
      id="subject"
      name="subject"
      placeholder="Project Discussion"
      required
      className="bg-background border-border focus:border-primary"
    />
  </div>
  
  <div>
    <label htmlFor="message" className="block text-sm font-medium mb-2">
      Message
    </label>
    <Textarea
      id="message"
      name="message"
      rows={5}
      placeholder="Tell me about your project or opportunity..."
      required
      className="bg-background border-border focus:border-primary resize-none"
    />
  </div>
  
  <Button 
    type="submit" 
    size="lg" 
    className="w-full glow-primary hover:scale-105 transition-bounce"
  >
    <Send className="mr-2 h-5 w-5" />
    Send Message
  </Button>
</form>

          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;