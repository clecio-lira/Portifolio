import { AiFillGithub, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";

const links = [
  {
    id: 0,
    Component: AiFillGithub,
    title: "Github Clécio Lira",
    url: "https://github.com/ClecioLira",
  },
  {
    id: 1,
    Component: AiOutlineLinkedin,
    title: "Linkedin Clécio Lira",
    url: "https://www.linkedin.com/in/cleciolira/",
  },
  {
    id: 2,
    Component: AiOutlineInstagram,
    title: "Instagram Clécio Lira",
    url: "https://www.instagram.com/cleciu_lira/",
  },
];

const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-gray-100 rounded-t-xl"
      id="contatos"
    >
      <div className="p-4">
        <h4 className="font-bold text-2xl text-center py-3">
          Contatos
        </h4>

        <ul className="pt-4 flex flex-col items-center">
          {links.map((link) => (
            <li
              key={link.id}
              className="flex items-center space-x-3 py-2"
            >
              {/* Renderizando o componente do ícone */}
              <link.Component className="text-2xl" aria-hidden="true" />
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:underline"
                title={link.title}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-center mt-3">
        Desenvolvido com ❤️ por <span className="font-bold">Clécio Lira</span>.
      </p>
    </footer>
  );
};

export default Footer;
