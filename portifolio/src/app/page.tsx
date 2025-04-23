import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Start from "@/components/Start/Start";

export default function Home() {
  return (
    <main>
      <Header />
      <Start />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}
