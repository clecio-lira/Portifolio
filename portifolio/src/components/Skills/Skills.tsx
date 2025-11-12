import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "JavaScript",
    "React Native",
    "Next.js",
  ],
  backend: [
    "Node.js",
    "Express",
    "Nest.js",
    ".NET",
    "C#",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "REST APIs",
  ],
  tools: [
    "Postman",
    "Docker",
    "Vercel",
    "Render",
    "Git",
    "GitHub",
    "VS Code",
    "Figma",
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
          Habilidades
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Front-end</CardTitle>
              <CardDescription>Tecnologias de interface</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.frontend.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Back-end</CardTitle>
              <CardDescription>Tecnologias de servidor</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.backend.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ferramentas</CardTitle>
              <CardDescription>Desenvolvimento e deploy</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
