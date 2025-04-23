'use client'
import React from "react";
import { CarouselPlugin } from "../Carousel/Carousel";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section id="projects" className="w-full min-h-screen flex justify-center items-center flex-col bg-[#434237] text-white py-20">
      <h3 className="font-bold text-xl tracking-widest mb-10"  data-aos="fade-up">Projetos</h3>
      <div className="flex justify-center" data-aos="fade-up">
        <CarouselPlugin />
      </div>
    </section>
  );
};

export default Projects;
