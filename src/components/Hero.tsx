import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.5),transparent_70%)]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Content Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
              Shubhangi Gaikwad
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
              Full Stack Software Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Passionate software developer with 8 months of professional experience specializing in 
              <span className="text-primary font-semibold"> CRM systems, loan applications, and microfinance solutions</span>. 
              Currently crafting innovative web solutions at <span className="text-primary font-semibold">etaxwala Sambhajinagar</span>.
            </p>
          
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button size="lg" className="glow-primary animate-glow-pulse" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button variant="secondary" size="lg" className="transition-bounce hover:scale-105" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                <Github className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </div>
            
            <div className="flex justify-center lg:justify-start gap-6">
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-smooth" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-smooth" asChild>
                <a href="https://www.linkedin.com/in/shubhangi-gaikwad123/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-smooth" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Professional Photo Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
<div className="w-56 h-56 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full gradient-primary p-1 animate-glow-pulse">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  {/* Placeholder for professional photo */}
                  <div className="w-full h-full bg-muted rounded-full flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <Mail className="h-12 w-12 text-primary" />
                      </div>
                      <img
    src="/profile.png"   // place your photo in /public/profile.jpg
    alt="Shubhangi Gaikwad"
    className="w-full h-full object-cover rounded-full"
  />
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 gradient-primary rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 gradient-secondary rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;