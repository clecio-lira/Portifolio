import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/ecommerce-platform-screenshot.jpg",
  },
  {
    title: "Task Management App",
    description:
      "Aplicativo de gerenciamento de tarefas com colaboração em tempo real.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/task-management-app-screenshot.jpg",
  },
  {
    title: "Portfolio CMS",
    description:
      "Sistema de gerenciamento de conteúdo para portfólios criativos.",
    tags: ["Next.js", "Sanity", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/portfolio-cms-screenshot.jpg",
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
          Projetos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <CardTitle className="text-balance">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="flex-1 bg-transparent"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </a>
                </Button>
                <Button variant="default" size="sm" asChild className="flex-1">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
