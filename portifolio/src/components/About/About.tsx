const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">
          Sobre Mim
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p className="pt-2">
            Olá! Me chamo Clécio e sou apaixonado por desenvolvimento web, com
            foco na criação de aplicações modernas, performáticas e escaláveis.
            Atualmente, atuo como desenvolvedor Full Stack em uma microempresa,
            desenvolvendo soluções completas para web utilizando tecnologias
            modernas no frontend e backend.
          </p>

          <p>
            No frontend, trabalho diariamente com <strong>React</strong>,{" "}
            <strong>Next.js</strong>, <strong>Tailwind CSS</strong> e{" "}
            <strong>Shadcn UI</strong>, desenvolvendo interfaces responsivas,
            acessíveis e otimizadas para performance e SEO. Tenho experiência
            com consumo de APIs RESTful, componentização, gerenciamento de
            estado e implementação de Progressive Web Apps (PWA).
          </p>

          <p>
            No backend, possuo conhecimentos em <strong>Node.js</strong>,{" "}
            <strong>NestJS</strong>, <strong>Java</strong> e{" "}
            <strong>Spring Boot</strong>, além de experiência com bancos de
            dados relacionais como <strong>PostgreSQL</strong> e utilização do{" "}
            <strong>Docker</strong> para conteinerização e organização de
            ambientes. Também desenvolvo APIs RESTful robustas, autenticação de
            usuários e integrações entre serviços.
          </p>

          <p>
            Tenho experiência no desenvolvimento de plataformas completas, como
            e-commerces, sistemas administrativos, portais de notícias e
            aplicações PWA com funcionamento offline, sempre buscando entregar
            soluções eficientes, intuitivas e alinhadas às necessidades do
            usuário.
          </p>

          <p>
            Além da experiência profissional, gosto de criar projetos próprios,
            participar de comunidades tech e enfrentar desafios em equipe. Estou
            constantemente estudando novas tecnologias e aprimorando
            conhecimentos em arquitetura de software, performance web, SEO e
            boas práticas de desenvolvimento.
          </p>

          <p>
            Meu objetivo é evoluir cada vez mais como desenvolvedor Full Stack,
            contribuindo com projetos que gerem impacto positivo e oferecendo
            experiências digitais modernas, seguras e de qualidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
