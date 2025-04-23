import React from "react";
import { CarouselPlugin } from "../Carousel/Carousel";

const Projects = () => {
  return (
    <section id="projects" className="w-full min-h-screen flex justify-center items-center flex-col bg-[#434237] text-white py-20">
      <h3 className="font-bold text-xl tracking-widest mb-10">Projetos</h3>
      <div className="flex justify-center">
        <CarouselPlugin />
      </div>
    </section>
  );
};

export default Projects;
