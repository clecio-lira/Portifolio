"use client";
import Image from "next/image";
import React from "react";
import foto from "../../../public/ilustration.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-[#BC8A3C] text-white py-20 px-2 md:flex md:justify-center md:items-center md:px-10 lg:px-20 xl:px-60"
    >
      <div className="p-4 flex-1">
        <h3 className="font-bold text-lg tracking-widest" data-aos="fade-up">
          Sobre mim
        </h3>
        <p className="pt-2" data-aos="fade-up">
          Olá! Me chamo Clécio, sou fascinado por desenvolvimento web e estou em
          transição de carreira para atuar como desenvolvedor fullstack, unindo
          minha experiência como Auxiliar de TI com meu interesse por criar
          soluções completas e eficientes.
        </p>
        <p>
          {" "}
          Atualmente, colaboro como engenheiro de software em uma microempresa,
          onde utilizo React e Next.js no dia a dia. Tenho experiência com
          consumo de APIs RESTful, componentização de interfaces e boas práticas
          de código e acessibilidade.
        </p>
        <p>
          No backend, adquiri conhecimentos em NodeJS, NestJS, C# e .NET, além
          de trabalhar com Docker para conteinerização e organização de
          ambientes. Essa combinação me permite desenvolver aplicações de ponta
          a ponta, integrando interfaces modernas com backends robustos e
          escaláveis.{" "}
        </p>
        <p>
          Também gosto de criar projetos próprios, participar de comunidades
          tech e desafios em grupo. Estou sempre aprendendo algo novo,
          principalmente sobre SEO, design responsivo, performance web e
          arquiteturas backend.{" "}
        </p>
        <p>
          Meu objetivo é crescer na área e contribuir com soluções que façam a
          diferença, trabalhando em equipe e entregando experiências digitais de
          qualidade.
        </p>
      </div>

      <div
        className="flex justify-center pt-20 md:pt-0 flex-1"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <Image
          src={foto}
          alt="Imagem ilustrativa"
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
