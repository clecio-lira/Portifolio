"use client";
import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState("");

  const skills = [
    {
      label: "HTML",
      icon: <FaHtml5 className="text-orange-600 text-3xl" />,
      desc: "Linguagem de marcação para estruturar páginas web.",
    },
    {
      label: "CSS",
      icon: <FaCss3Alt className="text-blue-600 text-3xl" />,
      desc: "Folhas de estilo para estilizar páginas HTML.",
    },
    {
      label: "JavaScript",
      icon: <FaJs className="text-yellow-400 text-3xl" />,
      desc: "Linguagem de programação para interatividade.",
    },
    {
      label: "React",
      icon: <FaReact className="text-cyan-400 text-3xl" />,
      desc: "Biblioteca JavaScript para construir interfaces modernas.",
    },
    {
      label: "TypeScript",
      icon: <SiTypescript className="text-blue-500 text-3xl" />,
      desc: "Superset do JavaScript com tipagem estática.",
    },
    {
      label: "Tailwind",
      icon: <SiTailwindcss className="text-sky-400 text-3xl" />,
      desc: "Framework de CSS utilitário.",
    },
    {
      label: "Zustand",
      icon: <FaReact className="text-white text-3xl" />,
      desc: "Biblioteca leve de gerenciamento de estado.",
    },
    {
      label: "Next.js",
      icon: <SiNextdotjs className="text-black text-3xl" />,
      desc: "Framework React com SSR e geração estática.",
    },
  ];

  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-[#BC8A3C] text-white py-1 px-2 flex flex-col lg:flex-row justify-center items-center md:px-10 lg:px-20 xl:px-60"
    >
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Habilidades</h2>
        <ul className="list-disc pl-5 text-sm">
          <li>Desenvolvimento Front-end.</li>
          <li>
            Experiência sólida em HTML e CSS para criar interfaces web
            visualmente atraentes e responsivas.
          </li>
          <li>
            Proficiente em React, JavaScript e TypeScript para o desenvolvimento
            eficiente de componentes front-end.
          </li>
          <li>Gestão de Estado.</li>
          <li>
            Colaboração em equipe para a criação de estratégias de estado de
            aplicação, garantindo uma experiência coesa para usuários.
          </li>
          <li>
            Conhecimento na utilização de bibliotecas populares como Shadcn UI,
            permitindo uma estilização de componentes mais dinâmica.
          </li>
          <li>
            Capacidade de trabalhar em equipe, considerando e trabalhando
            colaborativamente em diferentes abordagens no código.
          </li>
          <li>
            Familiaridade com metodologias ágeis, como Scrum, promovendo
            entregas contínuas e organizadas.
          </li>
          <li>
            Organização e controle de tarefas com Trello, facilitando a
            visualização do progresso dos projetos.
          </li>
        </ul>
      </div>

      <div className="w-full">
        {selectedSkill && (
          <div className="mb-4 bg-[#434237] text-white p-4 rounded shadow">
            <strong>{selectedSkill}</strong>:{" "}
            {skills.find((s) => s.label === selectedSkill)?.desc}
          </div>
        )}

        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#434237] h-20 flex items-center gap-4 justify-center cursor-pointer rounded hover:bg-gray-400"
              onClick={() => setSelectedSkill(skill.label)}
            >
              <span className="font-semibold">{skill.label}</span>
              <div>{skill.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
