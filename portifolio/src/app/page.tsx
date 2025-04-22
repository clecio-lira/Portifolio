import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";
import Start from "@/components/Start/Start";

export default function Home() {
  return (
    <main>
      <Header />
      <Start />
      <About />
      <Projects />
    </main>
  );
}
