import Image from "next/image";
import foto from "../../public/cleciolira.png";
import TypewriterComponent from "../Typewriter/Typewriter";
import { Button } from "../ui/button";
import VantaBirds from "../VantaBG/VantaBG";

const Start = () => {
  return (
    <section
      id="start"
      className="flex flex-col items-center justify-center relative w-full"
    >
      <VantaBirds />

      <div className="flex flex-col items-center justify-center gap-10 absolute">
        <div>
          <Image
            src={foto}
            alt="Foto de perfil"
            width={300}
            height={200}
            className="rounded-lg"
            priority
          />
        </div>

        <div>
          <span className="text-xl text-[#434237]">Olá, eu sou </span><TypewriterComponent />
        </div>

        <div className="flex gap-8">
          <Button variant={"default"} className="cursor-pointer bg-[#BC8A3C]">
            Meu CV
          </Button>
          <Button className="cursor-pointer bg-[#BC8A3C]">Conversar</Button>
        </div>
      </div>
    </section>
  );
};

export default Start;
