'use client'

import { Typewriter } from "react-simple-typewriter";

export default function TypewriterComponent() {
  return (
    <h1 className="text-2xl font-mono">
      <Typewriter
        words={["Olá, eu me chamo Clécio Lira!", "Sou Desenvolvedor Front-end!"]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </h1>
  );
}
