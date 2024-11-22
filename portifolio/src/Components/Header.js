const Header = () => {
  return (
    <header>
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg flex gap-4 items-center">
        <a href="#inicio" className="hover:text-gray-100">
          Início
        </a>
        <a href="#linguagens" className="hover:text-gray-100">
          Linguagens
        </a>
        <a href="#projetos" className="hover:text-gray-100">
          Projetos
        </a>
        <a href="#contatos" className="hover:text-gray-100">
          Contatos
        </a>
      </div>
    </header>
  );
}

export default Header;
