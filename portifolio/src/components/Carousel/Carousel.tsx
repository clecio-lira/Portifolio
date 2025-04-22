"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import projetoimc from "../../public/projetoimc.png";
import projetopup from "../../public/projetopup.png";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "../ui/button";

const projects = [
  {
    id: 0,
    name: "Projeto IMC",
    tags: ["HTML", "CSS", "JavaScript"],
    image: projetoimc,
  },
  {
    id: 1,
    name: "Projeto PUP",
    tags: ["Next.js", "Tailwind", "Zustand"],
    image: projetopup,
  },
];

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-3/5 text-[#434237]"
    >
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.id}>
            <div>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center relative">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={300}
                    height={300}
                    className="object-cover"
                    priority
                  />

                  <Button className="cursor-pointer absolute -bottom-4 bg-[#BC8A3C] w-1/2 text-center rounded-sm p-2 text-white hover:bg-[#434237]">
                    {project.name}
                  </Button>

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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
