"use client";
import Image from "next/image";
import React from "react";
import world from "../../../public/world.png";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const sociais = [
  {
    id: 0,
    icon: <FaWhatsapp className="text-4xl" />,
    url: "https://wa.me/5587991090861",
  },
  {
    id: 1,
    icon: <FaGithub className="text-4xl" />,
    url: "https://github.com/ClecioLira",
  },
  {
    id: 2,
    icon: <TiSocialLinkedinCircular className="text-5xl" />,
    url: "https://www.linkedin.com/in/cleciolira/",
  },
];

const Contacts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="contacts"
      className="w-full min-h-screen bg-[#434237] text-white px-2 flex flex-col lg:flex-row justify-center items-center md:px-10 lg:px-20 xl:px-60 py-20"
    >
      <div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 p-4"
        data-aos="fade-up"
      >
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Precisa entrar em contato comigo?
          </h2>
          <p className="text-sm mb-6">
            Estou disponível por whatsapp, github, ou via linkedin.
          </p>

          <div className="flex justify-center md:justify-start gap-4 items-center">
            {sociais.map((social) => (
              <a
                key={social.id}
                href={social.url}
                className="p-3 rounded-full hover:bg-[#BC8A3C] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>{social.icon}</i>
              </a>
            ))}
          </div>
        </div>

        <div
          className="flex-1 flex justify-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Image
            src={world}
            alt="Globo com ícones de contato"
            className="w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
