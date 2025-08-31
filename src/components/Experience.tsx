import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experience = {
    company: "etaxwala Sambhajinagar",
    position: "Software Developer",
    duration: "8 months",
    location: "Sambhajinagar",
    description: "Developing and maintaining web applications using modern technologies. Working on both frontend and backend development with a focus on user experience and performance optimization.",
    achievements: [
      "Built responsive web applications using React JavaScript or  TypeScript",
      "Implemented RESTful APIs with Node.js and Express.js", 
      "Collaborated with cross-functional teams in agile development",
      "Optimized application performance and user experience",
      "Integrated third-party services and APIs",
      "Participated in code reviews and maintained coding standards"
    ],
    technologies: ["React", "JavaScript","TypeScript","Node.js", "MongoDB", "Express.js", "HTML/CSS"]
  };

  return (
    <section className="py-20 bg-background" id="experience">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h2>
          <div className="w-20 h-1 gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in professional software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 gradient-secondary hover:glow-primary transition-smooth">
            {/* Company Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-primary mb-2">{experience.position}</h3>
                <h4 className="text-xl font-semibold mb-2">{experience.company}</h4>
                <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Briefcase className="h-6 w-6" />
                <Badge variant="outline" className="border-primary">Current Role</Badge>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {experience.description}
            </p>

            {/* Key Achievements */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-4">Key Achievements & Responsibilities:</h5>
              <ul className="grid md:grid-cols-2 gap-3">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Used */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Technologies Used:</h5>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="hover:glow-primary transition-smooth">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          {/* Timeline Decoration */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="w-12 h-0.5 bg-border"></div>
              <div className="w-3 h-3 gradient-primary rounded-full"></div>
              <span className="text-sm">Present</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;