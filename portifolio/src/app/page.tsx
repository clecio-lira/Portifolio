import About from "@/components/About/About";
import Contacts from "@/components/Contacts/Contacts";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Start from "@/components/Start/Start";

export default function Home() {
  return (
    <main>
      <Start />
      <About />
      <Projects />
      <Skills />
      <Contacts />
    </main>
  );
}
