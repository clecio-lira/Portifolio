"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypewriterComponent() {
  return (
    <span className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
      <Typewriter
        words={["Clécio Lira!", "<Desenvolvedor Full Stack!/>"]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </span>
  );
}
