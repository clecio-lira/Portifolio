const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">
          Sobre Mim
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p className="pt-2">
            Olá! Me chamo Clécio, sou fascinado por desenvolvimento web e estou disponível para atuar como desenvolvedor fullstack,
            para criar soluções completas e eficientes.
          </p>
          <p>
            Atualmente, colaboro desenvolvedor Full Stack em uma
            microempresa, onde utilizo React e Next.js no dia a dia. Tenho
            experiência com consumo de APIs RESTful, componentização de
            interfaces e boas práticas de código e acessibilidade.
          </p>
          <p>
            No backend, adquiri conhecimentos em NodeJS, NestJS, Java e Spring
            Boot além de trabalhar com Docker para conteinerização e organização
            de ambientes. Essa combinação me permite desenvolver aplicações de
            ponta a ponta, integrando interfaces modernas com backends robustos
            e escaláveis.
          </p>
          <p>
            Também gosto de criar projetos próprios, participar de comunidades
            tech e desafios em grupo. Estou sempre aprendendo algo novo,
            principalmente sobre SEO, design responsivo, performance web e
            arquiteturas backend.
          </p>
          <p>
            Meu objetivo é crescer na área e contribuir com soluções que façam a
            diferença, trabalhando em equipe e entregando experiências digitais
            de qualidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
