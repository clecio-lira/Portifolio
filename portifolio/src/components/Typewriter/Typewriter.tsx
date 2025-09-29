"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypewriterComponent() {
  return (
    <span className="text-xl text-[#434237]">
      <Typewriter
        words={["o Clécio Lira!", "<Desenvolvedor Full Stack!/>"]}
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
