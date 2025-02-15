// IMAGES
import Avatar from "../Images/Avatar.jpg";
import imc from "../Images/IMC.png";
import starwars from "../Images/starwars.png";
import profile from "../Images/profile.png";
import login from "../Images/login.png";
import pup from "../Images/pup.png";

// ICONS
import { AiOutlineJavaScript } from "react-icons/ai";
import { DiNodejs } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";

// PDF
import curriculo from "../pdf/Curriculo.pdf";

const icons = [
  {
    id: 0,
    Component: AiOutlineJavaScript,
    alt: "Icon JavaScript",
  },
  {
    id: 1,
    Component: DiNodejs,
    alt: "Icon NodeJS",
  },
  {
    id: 2,
    Component: DiHtml5,
    alt: "Icon HTML5",
  },
  {
    id: 3,
    Component: DiCss3,
    alt: "Icon CSS3",
  },
  {
    id: 4,
    Component: DiReact,
    alt: "Icon React",
  },
  {
    id: 5,
    Component: RiTailwindCssFill,
    alt: "Icon Tailwind",
  },
  {
    id: 6,
    Component: RiNextjsFill,
    alt: "Icon NextJS",
  },
];

const projetos = [
  {
    id: 0,
    link: "https://cleciolira.github.io/Calcular_IMC/",
    img: imc,
    title: "Site para calcular o seu IMC.",
  },
  {
    id: 1,
    link: "https://cleciolira.github.io/Web-Page-StarWars/",
    img: starwars,
    title: "Site sobre a franquia Star Wars.",
  },
  {
    id: 2,
    link: "https://cleciolira.github.io/Social_Links_Profile/",
    img: profile,
    title: "Site social links.",
  },
  {
    id: 3,
    link: "https://cleciolira.github.io/Projeto-Login/",
    img: login,
    title: "Site tela de login.",
  },
  {
    id: 4,
    link: "https://projeto-pup.vercel.app/",
    img: pup,
    title: "Site e-commerce de Plantas.",
  },
];

const Main = () => {
  return (
    <main
      className="bg-gray-950 text-gray-100 space-y-14 pt-10 md:space-y-14 lg:px-24 xl:px-40"
      id="inicio"
    >
      <section className="space-y-14 md:space-y-14">
        <div className="w-full flex justify-center mt-14 bg-gray-950">
          <img src={Avatar} alt="Avatar" id="avatar" />
        </div>

        <h2 className=" text-center font-bold text-4xl flex flex-col md:flex-row md:justify-center">
          Olá, eu sou<span className="nome md:ml-3">Clécio Lira!</span>
        </h2>

        <p className="text-justify px-3 text-gray-300 md:px-24 xl:px-52 2xl:mx-56">
          Sou um desenvolvedor em transição de carreira para a área de
          front-end. Após desenvolver minha paixão por tecnologia e programação,
          decidi me especializar em desenvolvimento web, focando principalmente
          em HTML, CSS, JavaScript e frameworks como React. Estou continuamente
          aprimorando minhas habilidades através de cursos e projetos pessoais,
          com o objetivo de criar interfaces de usuário intuitivas e funcionais.
          Tenho uma forte disposição para aprender e estou em busca de
          oportunidades para aplicar meus conhecimentos e evoluir como
          desenvolvedor.
        </p>

        <div className="flex justify-evenly xl:px-40 2xl:mx-80">
          <a
            href="https://wa.me/5587991090861"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Converse comigo pelo WhatsApp"
          >
            <button className="bg-gray-200 text-black md:px-10">
              Conversar
            </button>
          </a>

          <a href={curriculo} download="Curriculo-Clecio_Lira.pdf">
            <button className="md:px-10">Baixar CV</button>
          </a>
        </div>
      </section>

      <section className="py-7 space-y-10 scroll-m-10" id="linguagens">
        <h3 className="text-center text-2xl">Linguagens</h3>

        <ul className="flex justify-evenly md:px-24 xl:px-56 2xl:mx-56">
          {icons.map((icon) => (
            <li key={icon.id}>
              <icon.Component title={icon.alt} className="text-4xl" />
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-10 md:px-10 pb-5 scroll-m-20" id="projetos">
        <h3 className="text-center text-3xl font-extrabold nome">Projetos</h3>

        <div className="pb-4 md:grid md:grid-cols-2 md:grid-rows-2 2xl:mx-48">
          {projetos.map((projeto) => (
            <div key={projeto.id} className="card m-5 bg-gray-900">
              <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={projeto.img}
                  alt="Foto do projeto."
                  className="hover:opacity-45"
                />
                <div className="flex justify-between items-center">
                  <div className="pl-3 py-2">
                    <small>Clique para visitar</small>
                    <p>{projeto.title}</p>
                  </div>
                  <div className="mr-5">
                    <FaArrowUpRightFromSquare className="text-lg" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
