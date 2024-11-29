// ICONS
import github from "../Images/github.png";
import linkedin from "../Images/linkedin.png";
import instagram from "../Images/instagram.png";

const links = [
  {
    id: 0,
    img: github,
    title: "Github Clécio Lira",
    url: "https://github.com/ClecioLira",
  },
  {
    id: 1,
    img: linkedin,
    title: "Linkedin Clécio Lira",
    url: "https://www.linkedin.com/in/cleciolira/",
  },
  {
    id: 2,
    img: instagram,
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

        <div className="pt-4 flex flex-col items-center">
          {links.map((link) => (
            <li
              key={link.id}
              className="flex items-center space-x-3 py-2"
            >
              <img src={link.img} alt="Icon JavaScript" className="size-8" />
              <a href={link.url} target="_blank">
                {link.title}
              </a>
            </li>
          ))}
        </div>
      </div>

      <p className="text-center mt-3">
        Desenvolvido com ❤️ por <span className="font-bold">Clécio Lira</span>.
      </p>
    </footer>
  );
};

export default Footer;
