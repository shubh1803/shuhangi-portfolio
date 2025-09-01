import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Coffee, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Code",
      description: "Writing maintainable and efficient code"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Problem Solver",
      description: "Turning complex challenges into simple solutions"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Fast Learner",
      description: "Continuously adapting to new technologies"
    }
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 gradient-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in">
           <p className="text-lg text-muted-foreground leading-relaxed">
  I'm a full-stack developer with 8 months of experience at <span className="text-primary font-semibold">etaxwala Sambhajinagar</span>, building business solutions like CRM systems and microfinance platforms. I work with React, Flutter, Node.js, PHP, and Laravel to create scalable, user-friendly applications for financial and enterprise sectors.
</p>

            
            <div className="flex flex-wrap gap-2 pt-4">
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">PHP</Badge>
              <Badge variant="secondary">Laravel</Badge>
              <Badge variant="secondary">Flutter</Badge>
              <Badge variant="secondary">HTML/CSS</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
            </div>
          </div>
          
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 gradient-secondary hover:glow-primary transition-smooth hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 gradient-primary rounded-lg text-primary-foreground">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;