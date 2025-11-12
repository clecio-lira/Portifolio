import TypewriterComponent from "../Typewriter/Typewriter";
import { Button } from "../ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Start = () => {
  return (
    <section
      id="start"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Olá eu sou <TypewriterComponent />
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance">
            Criando experiências web modernas e escaláveis
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Button variant="default" size="lg" asChild>
            <a href="#projects">Ver Projetos</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer">
              Meu CV
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 pt-8">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/clecio-lira"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/cleciolira"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:clecioliradev@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Start;
