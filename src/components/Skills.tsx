import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const technicalSkills = [
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "React", level: 85, category: "Frontend" },
    { name: "HTML/CSS", level: 95, category: "Frontend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "PHP", level: 85, category: "Backend" },
    { name: "Laravel", level: 80, category: "Backend" },
    { name: "Flutter", level: 75, category: "Mobile" }
  ];

  const technologies = [
    "JavaScript", "React", "Node.js", "HTML5", "CSS3", "Tailwind CSS", 
    "PHP", "Laravel", "Flutter", "Git", "REST APIs", "CRM Systems",
    "MySQL", "Microfinance Solutions", "Loan Management", "Express.js"
  ];

  const categoryColors = {
    Frontend: "bg-blue-500",
    Backend: "bg-green-500", 
    Mobile: "bg-purple-500"
  };

  return (
    <section className="py-20 gradient-secondary" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Technologies</h2>
          <div className="w-20 h-1 gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills with Progress */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center mb-8">Technical Proficiency</h3>
            
            {technicalSkills.map((skill, index) => (
              <Card key={index} className="p-6 hover:glow-primary transition-smooth">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold">{skill.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {skill.category}
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="relative">
                  <Progress value={skill.level} className="h-2" />
                  <div 
                    className={`absolute top-0 left-0 h-2 rounded-full ${categoryColors[skill.category]} transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </Card>
            ))}
          </div>

          {/* Technology Stack */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center mb-8">Technology Stack</h3>
            
            <Card className="p-8 gradient-hero">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-border hover:border-primary transition-smooth hover:glow-primary hover:scale-105 text-center"
                  >
                    <span className="font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-primary/20">
              <h4 className="text-xl font-semibold mb-4 text-center">Currently Learning</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="animate-glow-pulse">Next.js</Badge>
                <Badge variant="outline" className="animate-glow-pulse">Docker</Badge>
                <Badge variant="outline" className="animate-glow-pulse">AWS</Badge>
                <Badge variant="outline" className="animate-glow-pulse">GraphQL</Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;