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
    title: "Candido Arquitetura",
    description:
      "Plataforma completa de e-commerce desenvolvida com Next.js, incluindo carrinho de compras, integração com Mercado Pago e painel administrativo moderno para gestão de produtos e pedidos.",
    tags: ["Next.js", "TypeScript", "Mercado Pago", "Shadcn UI", "Zustand"],
    github: undefined,
    demo: "https://www.candidoarquiteturamais.com",
    image: "/candido.png",
  },
  {
    title: "Arcoverde Agora",
    description:
      "Portal de notícias e informações locais com interface responsiva, sistema de gerenciamento de publicações e integração de componentes dinâmicos para uma experiência fluida.",
    tags: ["Next.js", "TypeScript", "Material UI", "Shadcn UI"],
    github: undefined,
    demo: "https://www.arcoverdeagora.com.br",
    image: "/arcoverdeagora.png",
  },
  {
    title: "Sistema de Vendas",
    description:
      "Sistema de vendas desenvolvido com Next.js, configurado como Progressive Web App (PWA) utilizando Serwist, permitindo funcionamento offline e armazenamento local dos pedidos via Local Storage.",
    tags: ["Next.js", "Tailwind CSS", "Serwist"],
    github: "https://github.com/clecio-lira/sistema-de-vendas",
    demo: "https://sistema-de-vendas-phi.vercel.app",
    image: "/sistemavendas.png",
  },
  {
    title: "Projeto PUP",
    description:
      "Plataforma completa de e-commerce de plantas desenvolvida com Next.js, incluindo carrinho de compras e painel administrativo moderno para gestão de produtos.",
    tags: ["Next.js", "TypeScript", "Material UI", "Zustand"],
    github: "https://github.com/clecio-lira/Projeto_PUP",
    demo: "https://projeto-pup.vercel.app/",
    image: "/projetopup.png",
  },
  {
    title: "Social Links",
    description:
      "Página responsiva de links sociais inspirada no Linktree, desenvolvida com HTML e CSS puro, destacando identidade visual e usabilidade.",
    tags: ["HTML", "CSS"],
    github: "https://github.com/clecio-lira/Social_Links_Profile",
    demo: "https://clecio-lira.github.io/Social_Links_Profile",
    image: "/sociallinks.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
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
                  className="w-full h-48 object-contain rounded-md mb-4"
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
                {project.github ? (
                  <>
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

                    <Button
                      variant="default"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent opacity-50 cursor-not-allowed"
                      disabled
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </Button>

                    <Button
                      variant="default"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
