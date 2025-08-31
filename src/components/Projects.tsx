import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Database, Users, CreditCard, Building } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CRM Management System",
      description:
        "Comprehensive Customer Relationship Management system built with React and Laravel. Features include lead management, customer tracking, sales pipeline, and automated workflows.",
      icon: <Users className="h-8 w-8" />,
      technologies: ["React", "Laravel", "PHP", "MySQL", "Tailwind CSS"],
      features: [
        "Lead Management Dashboard",
        "Customer Data Analytics",
        "Sales Pipeline Tracking",
        "Automated Email Workflows",
      ],
      category: "Web Application",
      codeLink: "https://github.com/shubhangi-gaikwad/crm-system",
      demoLink: "https://crm-demo.vercel.app",
    },
    {
      id: 2,
      title: "Loan Application Portal",
      description:
        "Digital loan processing platform streamlining the application, verification, and approval process. Built with modern web technologies for seamless user experience.",
      icon: <CreditCard className="h-8 w-8" />,
      technologies: ["React", "Node.js", "JavaScript", "HTML5", "CSS3"],
      features: [
        "Online Application Forms",
        "Document Upload System",
        "Status Tracking Dashboard",
        "Automated Eligibility Checks",
      ],
      category: "FinTech Solution",
      codeLink: "https://github.com/shubh1803/sja_admin_frontend.git",
      demoLink: "https://sjamicrofoundation.com/",       // dummy 
    },
    {
      id: 3,
      title: "Microfinance Management",
      description:
        "Complete microfinance solution for managing loans, repayments, and client relationships. Designed for microfinance institutions with robust reporting capabilities.",
      icon: <Building className="h-8 w-8" />,
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
      features: [
        "Loan Portfolio Management",
        "Repayment Tracking",
        "Client Management System",
        "Financial Reporting",
      ],
      category: "Financial System",
      codeLink: "https://github.com/shubh1803/sja_admin_api.git",
      demoLink: "https://microfinance-demo.vercel.app",              // dummy 
    },
    {
      id: 4,
      title: "Mobile Banking App backend API",
      description:
        "Cross-platform mobile application for banking services built with Flutter. Provides secure banking operations with intuitive user interface.",
      icon: <Database className="h-8 w-8" />,
      technologies: ["Flutter", "Dart", "REST APIs", "Firebase"],
      features: [
        "Account Management",
        "Transaction History",
        "Bill Payments",
        "Secure Authentication",
      ],
      category: "Mobile Application",
      codeLink: "https://github.com/shubh1803/sja_mobile_api.git",
      demoLink: "https://mobilebanking-demo.vercel.app",
    },
  ];

  return (
    <section className="py-20 gradient-secondary" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="w-20 h-1 gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing real-world projects in CRM systems, financial applications, and microfinance
            solutions that demonstrate my expertise in full-stack development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="p-8 gradient-hero hover:glow-primary transition-smooth group"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 gradient-primary rounded-xl text-primary-foreground group-hover:scale-110 transition-smooth">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 gradient-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-primary">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs hover:glow-primary transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 hover:glow-primary transition-smooth"
                  asChild
                >
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 hover:glow-primary transition-smooth"
                  asChild
                >
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="p-8 gradient-hero border-primary/20">
            <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm constantly working on new projects and exploring innovative solutions in web
              development, mobile applications, and financial technology.
            </p>
           <Button
  variant="outline"
  className="hover:glow-primary transition-smooth"
  asChild
>
  <a
    href="https://github.com/shubh1803"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github className="mr-2 h-5 w-5" />
    View All on GitHub
  </a>
</Button>

          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
