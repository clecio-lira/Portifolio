import MenuHambuguer from "../MenuHamburguer/MenuHamburguer";

const links = [
  {
    id: 0,
    url: "#start",
    name: "Início",
  },
  {
    id: 1,
    url: "#about",
    name: "Sobre",
  },
  {
    id: 2,
    url: "#skills",
    name: "Habilidades",
  },
  {
    id: 3,
    url: "#projects",
    name: "Projetos",
  },
  {
    id: 4,
    url: "#contacts",
    name: "Contatos",
  },
];

const Header = () => {
  return (
    <header className="fixed z-50 w-full bg-[#1F2635] p-4 flex justify-between items-center text-white">
      <p className="tracking-wider text-2xl">CL</p>

      <div className="lg:hidden">
        <MenuHambuguer />
      </div>

      <div className="hidden lg:block">
        <ul className="flex gap-4">
          {links.map((link) => (
            <li key={link.id} className="hover:text-gray-400">
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
