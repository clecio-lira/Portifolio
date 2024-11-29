const Header = () => {
  return (
    <div className="fixed w-full">
      <header className="text-gray-100 flex justify-around py-2 items-center bg-gray-900 z-50">
        <div id="logo">
          <p>CL</p>
        </div>
        <nav className="space-x-3 md:space-x-6">
          <a href="#inicio">Inicio</a>
          <a href="#linguagens">Linguagens</a>
          <a href="#projetos">Projetos</a>
          <a href="#contatos">Contatos</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;