"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import projetoimc from "../../../public/projetoimc.png";
import projetopup from "../../../public/projetopup.png";
import arcoverdeagora from "../../../public/arcoverdeagora.png";
import assistirstarwars from "../../../public/assistirstarwars.png";
import sociallinks from "../../../public/sociallinks.png";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 0,
    name: "Arcoverde Agora",
    tags: ["Next.js", "Tailwind", "ShadcnUI"],
    image: arcoverdeagora,
    url: "https://www.arcoverdeagora.com.br/"
  },
  {
    id: 1,
    name: "Projeto PUP",
    tags: ["Next.js", "Tailwind", "Zustand"],
    image: projetopup,
    url: "https://projeto-pup.vercel.app/"
  },
  {
    id: 2,
    name: "Projeto IMC",
    tags: ["HTML", "CSS", "JavaScript"],
    image: projetoimc,
    url: "https://clecio-lira.github.io/Calcular_IMC/"
  },
  {
    id: 3,
    name: "Projeto Star Wars",
    tags: ["HTML", "CSS", "JavaScript"],
    image: assistirstarwars,
    url: "https://clecio-lira.github.io/Web-Page-StarWars/"
  },
  {
    id: 4,
    name: "Projeto Social Links",
    tags: ["HTML", "CSS", "JavaScript"],
    image: sociallinks,
    url: "https://clecio-lira.github.io/Social_Links_Profile/"
  },
];

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <Carousel plugins={[plugin.current]} className="w-4/5 xl:w-2/5 text-[#434237]">
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.id}>
            <div>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center relative">
                  <Image
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full py-5 md:py-4"
                    priority
                  />

                  <Link
                    href={project.url} target="_blank" rel="noopener noreferrer"
                    className="cursor-pointer absolute -bottom-4 bg-[#BC8A3C] text-center rounded-sm py-2 px-4 text-white hover:bg-[#434237]"
                  >
                    {project.name}
                  </Link>

                  <span className="absolute -top-3 flex gap-2 flex-wrap">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-300 text-sm px-2 py-1 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:block"/>
      <CarouselNext className="hidden md:block"/>
    </Carousel>
  );
}
