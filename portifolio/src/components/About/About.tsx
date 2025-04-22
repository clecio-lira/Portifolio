import Image from "next/image";
import React from "react";
import foto from "../../public/ilustration.png";

const About = () => {
  return (
    <section id="about" className="w-full h-screen bg-[#BC8A3C] text-white p-4">
      <div className="pt-4">
        <h3 className="font-bold text-lg">Sobre mim</h3>
        <p className="pt-4">
          Olá! Me chamo Clécio, sou apaixonado por desenvolvimento web. Estou em
          transição de carreira para atuar como desenvolvedor front-end, unindo
          minha experiência como Auxiliar de TI com meu interesse por interfaces
          modernas, interativas e responsivas. <br />
          Atualmente, colaboro como desenvolvedor front-end em uma microempresa,
          onde utilizo React e Next.js no dia a dia. Tenho experiência com
          consumo de APIs RESTful, componentização de interfaces, e estou sempre
          buscando evoluir com boas práticas de código e acessibilidade. <br />
          Também gosto de criar projetos próprios, participar de comunidades
          tech e desafios em grupo. Estou sempre aprendendo algo novo,
          principalmente sobre SEO, design responsivo, e performance web. Meu
          objetivo é crescer na área e contribuir com soluções que façam a
          diferença, trabalhando em equipe e entregando experiências digitais de
          qualidade.
        </p>
      </div>

      <div className="flex justify-center pt-10">
        <Image
          src={foto}
          alt="Foto de perfil"
          width={300}
          height={200}
          className="rounded-lg"
          priority
        />
      </div>
    </section>
  );
};

export default About;
