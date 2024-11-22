// IMAGES
import Avatar from "../Images/Avatar.jpg";
import imc from "../Images/IMC.png";
import starwars from "../Images/starwars.png";
import profile from "../Images/profile.png";
import login from "../Images/login.png";

// ICONS
import js from "../Images/javascript.png";
import css from "../Images/css.png";
import html from "../Images/html.png";
import react from "../Images/reactjs.png";
import nodejs from "../Images/nodejs.png";
import tail from "../Images/tailwind.png";
import view from "../Images/View_Icon.png";

const Main = () => {
  return (
    <main className="bg-gray-950 text-gray-100 space-y-14 pt-1 md:space-y-14" id="inicio">
      <section className="space-y-14 md:space-y-14">
        <div className="w-full flex justify-center mt-14 bg-gray-950 scrollcenter">
          <img src={Avatar} alt="Avatar" id="avatar"/>
        </div>

        <h2 className=" text-center font-bold text-4xl flex flex-col md:flex-row md:justify-center scrolltop">
          Olá, eu sou<span className="nome md:ml-3">Clécio Lira!</span>
        </h2>

        <p className="text-justify px-3 text-gray-300 md:px-24 scrolltop">
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

        <div className="flex justify-evenly scrollbottom">
          <button className="bg-gray-200 text-black md:px-10">Conversar</button>
          <button className="md:px-10">Baixar CV</button>
        </div>
      </section>

      <section className="py-7 space-y-10" id="linguagens">
        <h3 className="text-center text-2xl scrollcenter">Linguagens</h3>

        <ul className="flex justify-evenly">
          <li className="scrolltop">
            <img src={js} alt="Icon JavaScript" />
          </li>
          <li className="scrollbottom">
            <img src={nodejs} alt="Icon Nodejs" />
          </li>
          <li className="scrolltop">
            <img src={html} alt="Icon HTML" />
          </li>
          <li className="scrollbottom">
            <img src={css} alt="Icon CSS" />
          </li>
          <li className="scrolltop">
            <img src={react} alt="Icon React" />
          </li>
          <li className="scrollbottom">
            <img src={tail} alt="Icon Tailwind" />
          </li>
        </ul>
      </section>

      <section className="space-y-10 md:px-10 pb-5" id="projetos">
        <h3 className="text-center text-3xl font-extrabold nome scrollcenter">Projetos</h3>

        <div className="pb-4 md:grid md:grid-cols-2 md:grid-rows-2 space-y-10">
          <div className="card m-5 bg-gray-900 scrollbottom">
            <a
              href="https://cleciolira.github.io/Calcular_IMC/"
              target="_blank"
            >
              <img
                src={imc}
                alt="Foto projeto site IMC"
                className="hover:opacity-45"
              />
              <div className="flex justify-between items-center">
                <div className="pl-3 py-2">
                  <small>Clique para visitar</small>
                  <p>Site para calcular o seu IMC.</p>
                </div>
                <div className="mr-5">
                  <img src={view} alt="Icon React" />
                </div>
              </div>
            </a>
          </div>

          <div className="card m-5 bg-gray-900 scrolltop">
            <a
              href="https://cleciolira.github.io/Web-Page-StarWars/"
              target="_blank"
            >
              <img
                src={starwars}
                alt="Foto projeto site IMC"
                className="hover:opacity-45"
              />
              <div className="flex justify-between items-center">
                <div className="pl-3 py-2">
                  <small>Clique para visitar</small>
                  <p>Site sobre a franquia Star Wars.</p>
                </div>
                <div className="mr-5">
                  <img src={view} alt="Icon React" />
                </div>
              </div>
            </a>
          </div>

          <div className="card m-5 bg-gray-900 scrollbottom">
            <a
              href="https://cleciolira.github.io/Social_Links_Profile/"
              target="_blank"
            >
              <img
                src={profile}
                alt="Foto projeto site IMC"
                className="hover:opacity-45"
              />
              <div className="flex justify-between items-center">
                <div className="pl-3 py-2">
                  <small>Clique para visitar</small>
                  <p>Site social links.</p>
                </div>
                <div className="mr-5">
                  <img src={view} alt="Icon React" />
                </div>
              </div>
            </a>
          </div>

          <div className="card m-5 bg-gray-900 scrolltop">
            <a
              href="https://cleciolira.github.io/Projeto-Login/"
              target="_blank"
            >
              <img
                src={login}
                alt="Foto projeto site IMC"
                className="hover:opacity-45"
              />
              <div className="flex justify-between items-center">
                <div className="pl-3 py-2">
                  <small>Clique para visitar</small>
                  <p>Site tela de login.</p>
                </div>
                <div className="mr-5">
                  <img src={view} alt="Icon React" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
